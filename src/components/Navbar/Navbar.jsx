import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../context/Store";
import "./Navbar.scss";

const Navbar = () => {
  const { user, setUser, cartList } = useStore();
  const [isChange, setIsChange] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser((prev) => ({ ...prev, isLoggedIn: false }));
  };

  useEffect(() => {
    let timer;

    if (cartList.length > 0) {
      setIsChange(true);
      timer = setTimeout(() => {
        setIsChange(false);
      }, 800);
    }
    return () => clearTimeout(timer);
  }, [cartList.length]);
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link    to="/" className="navbar-brand" href="#">
          Ecommers
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end bell-style"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servisec
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kategories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Electronics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Jawelery
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mens clothing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Woman clothing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact
              </a>
            </li>
          </ul>
          {user.isLoggedIn === true ? (
            <Link to="/cart">
              <box-icon name="cart-alt"></box-icon>
              <span className="bellstyle">{cartList.length}</span>
              {isChange ? (
                <box-icon name="bell" animation="tada"></box-icon>
              ) : (
                <box-icon name="bell"></box-icon>
              )}
              <button onClick={handleLogout} className="btn btn-danger">
                Log out
                <i class="fa-solid fa-right-from-bracket"></i>
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary" type="button">
                Log in
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
