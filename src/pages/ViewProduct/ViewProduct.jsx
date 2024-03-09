import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useStore } from "../../context/Store";
import "./ViewProduct.scss";

const URL = "https://fakestoreapi.com/products/";
const ViewProduct = () => {
  const { id } = useParams();
  const {
    cartList,
    user,
    handleAddCart,
    handleIncrementProd,
    handleDecrementProd,
    handleRemoveProd,
  } = useStore();

  const [currentProd, setCurrentProd] = useState(null);

  const getCurrentProduct = async () => {
    try {
      const response = await axios.get(URL + id);
      setCurrentProd(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCurrentProduct();
  }, [id]);

  return currentProd ? (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <button className="btn btn-light px-5">
              {currentProd.category}
            </button>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  col-6  rounded">
            <img
              className="img-fluid w-75 rounded"
              src={currentProd.image}
              alt="product picture"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  col-6 col-two  rounded p-3">
            <h3 className="text-white">{currentProd.title}</h3>
            <p>{currentProd.description}</p>
            <div className="d-flex gap-5">
              <span className="badge  bg-warning">{currentProd.price}$</span>
              {
                <button className="btn btn-primary">
                  {user.isLoggedIn === true &&
                    (cartList.find((item) => item.product.id == id) ? (
                      <div className="btn-group flex-wrap">
                        <button
                          onClick={() => handleDecrementProd(currentProd)}
                          className="btn btn-danger"
                          disabled={
                            cartList.find((item) => item.product.id == id)
                              .count === 1
                          }
                        >
                          -
                        </button>
                        <button className="btn btn-dark disabled">
                          {cartList.find((item) => item.product.id == id).count}
                        </button>
                        <button
                          onClick={() => handleIncrementProd(currentProd)}
                          className="btn btn-success"
                        >
                          +
                        </button>

                        <button
                          onClick={() => handleRemoveProd(currentProd)}
                          className="btn btn-outline-danger"
                        >
                          &times;
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddCart(currentProd)}
                        className="btn btn-warning"
                      >
                        <box-icon name="cart-alt"></box-icon>
                      </button>
                    ))}
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div class="d-flex justify-content-center">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default ViewProduct;
