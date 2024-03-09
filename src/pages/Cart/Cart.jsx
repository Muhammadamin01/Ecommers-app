import React, { useEffect, useState } from "react";
import { useStore } from "../../context/Store";
import "./Cart.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartList,
    setCartList,
    handleIncrementProd,
    handleDecrementProd,
    handleRemoveProd
  } = useStore();
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClearCard = () => {
    setCartList([]);
  };

  useEffect(() => {
    let sum = 0;
    cartList.forEach((item) => {
      sum += item.product.price * item.count;
    });
    setTotalPrice(sum);
  }, [cartList]);
  return (
    <div className="container">
      {cartList.length > 0 && (
        <div className="d-flex justify-content-between align-items center py-4 ">
          <h2>Shopping cart</h2>
          <button className="btn  bg-info text-dark" onClick={handleClearCard}>
            Remove all
          </button>
        </div>
      )}
      {cartList.length > 0 ? (
        <div>
          {cartList.map((item) => {
            return (
              <div
                key={item.product.id}
                className="row  py-1 pt-3 cart rounded bg-light "
              >
                <div className="col-3">
                  <Link to={`/product/${item.product.id}`}>
                    <img
                      src={item.product.image}
                      className="img-fluid rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-3">
                  <h3>{item.product.title}</h3>
                  <h4 className="text-primary">{item.product.category}</h4>
                  <p className="badge bg-dark">{item.product.price}$</p>
                </div>
                <div className="col-3">
                  <div className="btn-group">
                    <button
                      onClick={() => handleDecrementProd(item.product.id)}
                      className="btn btn-info"
                      disabled={item.count === 1}
                    >
                      -
                    </button>
                    <button className="btn btn-light border ">
                      {item.count}
                    </button>
                    <button
                      onClick={() => handleIncrementProd(item.product.id)}
                      className="btn btn-primary"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-3">
                  <b className="fs-5 mb-3 d-block">
                    {item.count}x={item.count * item.product.price}$
                  </b>
                  <button className="btn btn-secondary text-white d-block">
                    <box-icon
                      name="trash"
                      color="white"
                      onClick={() => handleRemoveProd(item.product.id)}
                    ></box-icon>
                  </button>
                </div>
              </div>
            );
          })}
          <div className="total">
            <h3>Total:{totalPrice} $</h3>
            <p>{cartList.length} items seleted</p>
            <button className="checkout  ">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <img
            src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg"
            className="img-fluid"
            alt="emty cart"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
