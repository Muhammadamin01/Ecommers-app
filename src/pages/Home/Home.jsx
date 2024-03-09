import React, { useCallback, useEffect, useMemo, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Slider from "react-slick";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div onClick={onClick} className="my-icon my-icon-left">
      <box-icon size="sm" color="white" name="chevron-left"></box-icon>
    </div>
  );
};
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div onClick={onClick} className="my-icon my-icon-right">
      <box-icon size="sm" color="white" name="chevron-right"></box-icon>
    </div>
  );
};
const Home = () => {
  const [allProducts, setAllProducts] = useState(null);
  let setting = {
    dots: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "60px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  const handleAllProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cachedData = useCallback((data) => {
    return data;
  }, []);

  useEffect(() => {
    handleAllProducts();
  }, []);
  return <div></div> ? (
    <div>
      <Carousel />

      <div className="container">
        <div className="row">
          <h3 className="text-center">Electronics</h3>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider {...setting}>
              {allProducts
                ?.filter((item) => item.category === "electronics")
                .map((prod) => (
                  <ProductCard key={prod.id} prod={prod} />
                ))}
            </Slider>
          </div>
        </div>
        <div className="row">
          <h3 className="text-center mt-5">Jewelery</h3>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider {...setting}>
              {allProducts
                ?.filter((item) => item.category === "jewelery")
                .map((prod) => (
                  <ProductCard key={prod.id} prod={prod} />
                ))}
            </Slider>
          </div>
        </div>
        <div className="row">
          <h3 className="text-center mt-5">Mens Clothes</h3>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider {...setting}>
              {allProducts
                ?.filter((item) => item.category === "men's clothing")
                .map((prod) => (
                  <ProductCard key={prod.id} prod={prod} />
                ))}
            </Slider>
          </div>
        </div>
        <div className="row">
          <h3 className="text-center mt-5">Womans Clothes</h3>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider {...setting}>
              {allProducts
                ?.filter((item) => item.category === "women's clothing")
                .map((prod) => (
                  <ProductCard key={prod.id} prod={cachedData(prod)} />
                ))}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Home;
