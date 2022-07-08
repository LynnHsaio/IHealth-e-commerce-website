import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../contexts/ProductsContext";
import Loading from "../components/Loading";
import Gallery from "../components/singleProductPage/Gallery";
import StarReview from "../components/singleProductPage/StarReview";
import PurchaseForm from "../components/singleProductPage/PurchaseForm";
import styled from "styled-components";
import SupplementEffect from "../components/SupplementEffect";

function SingleProductPage() {
  const { productId } = useParams();
  const { singleProduct, singleProduct_loading, products, fetchSingleProduct } =
    useProductsContext();

  useEffect(() => {
    fetchSingleProduct(productId);
  }, [products]);

  // 剛開始singleProduct初始值為{}，或是undefined，或是singleProduct_loading為true時回傳Loading
  const objectLength = singleProduct
    ? Object.keys(singleProduct).length
    : singleProduct;

  if (!objectLength || !singleProduct.id || singleProduct_loading) {
    return <Loading />;
  }

  const {
    images,
    name,
    stars,
    reviews,
    effects,
    brief,
    company,
    category,
    price,
    stock,
    description: { img, text },
  } = singleProduct;

  return (
    <Wrapper className="SingleProdutPage container">
      <section className="SingleProductPage-info">
        <Gallery images={images} />
        <div className="SingleProduct-text-box">
          <h3 className="SingleProduct-title">{name}</h3>
          <StarReview stars={stars} reviews={reviews} />
          <div className="SingleProduct-effects">
            {effects.map((item, index) => (
              <SupplementEffect item={item} key={index} />
            ))}
          </div>
          <p className="SingleProduct-brief">&bull; {brief}</p>
          <p className="SingleProduct-company">品牌名稱: {company}</p>
          <p className="SingleProduct-category">產品類別: {category}</p>
          <p className="SingleProduct-price">NT${price}</p>
          {stock > 0 ? <PurchaseForm {...singleProduct} /> : null}
        </div>
      </section>

      <section className="SingleProductPage-description">
        {img ? <img src={img} alt={name} /> : ""}
        {text ? (
          <article>
            <h4>商品描述</h4>
            <p>{text}</p>
          </article>
        ) : (
          ""
        )}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .SingleProductPage-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
    padding: 3.6rem 0;
    border-bottom: solid 1px var(--clr-gray);

    .SingleProduct-text-box {
      display: flex;
      flex-direction: column;

      .SingleProduct-title {
        font-size: 3rem;
        margin-bottom: 0.8rem;
      }

      .StarReview {
        margin-bottom: 3.2rem;
      }

      .SingleProduct-effects {
        margin-bottom: 0.8rem;
      }

      .SingleProduct-brief {
        font-size: 2rem;
        margin-bottom: 3.2rem;
      }

      .SingleProduct-company,
      .SingleProduct-category {
        margin-bottom: 1.6rem;
      }

      .SingleProduct-price {
        font-size: 4.4rem;
        color: var(--clr-primary-dark);
        margin-top: 1.6rem;
        margin-bottom: 2.4rem;
      }

      .SingleProduct-quantity {
        display: flex;
        align-items: center;
        gap: 1.2rem;
      }
    }
  }
  .SingleProductPage-description {
    padding: 3.6rem 0;
    width: 70%;
    margin: 0 auto;

    img {
      width: 100%;
      margin-bottom: 2.4rem;
    }
    article {
      /* width: 70%; */
      font-size: 1.6rem;
      line-height: 1.8;
      /* margin: 0 auto; */

      h4 {
        font-size: 1.8rem;
        margin-bottom: 1.6rem;
      }
    }
  }

  /* 880px */
  @media (max-width: 50em) {
    .SingleProductPage-info {
      grid-template-columns: 1fr;
      gap: 4.8rem;
      /* gap: 0; */
    }
  }
  @media (max-width: 40em) {
    .SingleProductPage-info {
      padding: 0 0 3.6rem;
      /* gap: 3.2rem; */
    }

    .SingleProductPage-description {
      width: 100%;
    }
  }
`;

export default SingleProductPage;
