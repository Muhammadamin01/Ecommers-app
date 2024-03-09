import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "boxicons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import StoreProvider from "./context/Store";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <div>
    <>
      <ToastContainer
        hideProgressBar={true}
        pauseOnHover={false}
        draggable={true}
        autoClose={3000}
        newestOnTop={true}
        position="top-center"
      />
      <BrowserRouter>
        <StoreProvider>
          <App />
        </StoreProvider>
      </BrowserRouter>
    </>
  </div>
);
