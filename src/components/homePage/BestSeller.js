import React from "react";
import Heading from "./Heading";
import SingleProduct from "../SingleProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useProductsContext } from "../../contexts/ProductsContext";
import styled from "styled-components";

function BestSeller() {
  const { products } = useProductsContext();

  const BestSellerProducts = products.filter((product) => product.bestSeller);

  return (
    <div className="BestSeller-section container">
      <Wrapper className="BestSeller section">
        <Heading title={"熱賣商品"} subtitle={"Best-Seller"} />

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            860: {
              slidesPerView: 4,
            },
          }}
        >
          {BestSellerProducts.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <SingleProduct {...product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section``;

export default BestSeller;
