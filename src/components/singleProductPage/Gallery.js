import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Gallery({ images = [{}] }) {
  const [mainImg, setMainImg] = useState(images[0]);

  useEffect(() => {
    setMainImg(images[0]);
  }, [images]);

  return (
    <Wrapper className="Gallery">
      <img src={mainImg} className="Gallery-img Gallery-main-img" />
      <div className="Gallery-imgs-container">
        {images.map((img, index) => (
          <img
            src={img}
            key={index}
            className={`Gallery-img ${img === mainImg ? "active" : ""}`}
            onClick={() => {
              setMainImg(img);
            }}
          />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .Gallery-img {
    width: 100%;
    object-fit: contain;
  }

  .Gallery-main-img {
    height: 50rem;
  }

  .Gallery-imgs-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;

    img {
      height: 10rem;
      cursor: pointer;
    }
  }

  .Gallery-imgs-container img:hover,
  .Gallery-imgs-container .active {
    border: solid 2px var(--clr-primary-dark);
  }

  // 880px
  @media (max-width: 55em) {
    .Gallery-main-img {
      height: 45rem;
    }
    .Gallery-imgs-container {
      img {
        height: 7rem;
      }
    }
  }
`;

export default Gallery;
