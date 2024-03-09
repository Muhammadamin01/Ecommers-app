import React, { memo } from "react";
import "./ProductCard.scss";
import { useStore } from "../../context/Store";
import { Link } from "react-router-dom";

const ProductCard = ({ prod }) => {
  const {
    user,
    cartList,
    handleAddCart,
    handleDecrementProd,
    handleIncrementProd,
    handleRemoveProd,
  } = useStore();
  const { id } = prod;

  return (
    <div className="prod-item" key={prod.id}>
      <div className="card">
        <img src={prod.image} alt="" className="card-img-top p-3" />
        <div className="card-body bg-secondary ">
          <Link to={`/product/${id}`}>
            <h4 className="text-white">{prod.title}</h4>
            <p className="text-white">{prod.description}</p>
          </Link>
        </div>
        <div className="d-flex p-1 bg-dark align-items-center justify-content-between">
          <mark className="bg-primary text-light fs-5 badge">
            {prod.price}$
          </mark>
          {user.isLoggedIn === true &&
            (cartList.find((item) => item.product.id === id) ? (
              <div className="btn-group">
                <button
                  onClick={() => handleDecrementProd(id)}
                  className="btn btn-danger"
                  disabled={
                    cartList.find((item) => item.product.id === id).count === 1
                  }
                >
                  -
                </button>
                <button className=" disabled btn btn-light border  ">
                  {cartList.find((item) => item.product.id === id).count}
                </button>
                <button
                  onClick={() => handleIncrementProd(id)}
                  className="btn btn-primary"
                >
                  +
                </button>

                <button
                  onClick={() => handleRemoveProd(id)}
                  className="btn btn-outline-danger"
                >
                  &times;
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleAddCart(prod)}
                className="btn btn-warning"
              >
                <box-icon name="cart-alt"></box-icon>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
