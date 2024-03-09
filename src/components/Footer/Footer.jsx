import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="footer-about">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="useful-link">
                <h2>Useful Links</h2>
                <div class="use-links">
                  <li>
                    <i class="fa-solid fa-angles-right"></i> Home
                  </li>
                  <li>
                    <i class="fa-solid fa-angles-right"></i> About Us
                  </li>
                  <li>
                    <i class="fa-solid fa-angles-right"></i> Gallery
                  </li>
                  <li>
                    <i class="fa-solid fa-angles-right"></i> Contact
                  </li>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="social-links">
                <h2>More About Page </h2>
                <div class="social-icons">
                  <li>
                    <a href="">
                      <i class="fa-brands fa-facebook-f"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa-brands fa-instagram"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/@breake_code">
                      <i class="fa-brands fa-telegram"></i> Telegram
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="address">
                <h2>Address</h2>
                <div class="address-links">
                  <li>
                    <a href="">
                      <i class="fa-solid fa-phone"></i> +998999807010
                    </a>
                  </li>
                  <li>
                    <a href="https://www.webstar.uz/login">
                      <i class="fa-solid fa-envelope"></i> webstar.uz
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
     
    </div>
  );
};

export default Footer;
