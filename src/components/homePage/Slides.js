import React, { useEffect, useState } from "react";
import slide1 from "../../assets/slides/slide-dhc-1.webp";
import slide2 from "../../assets/slides/slide-dhc-2.webp";
import slide3 from "../../assets/slides/slide-vitabox-1.webp";
import slide4 from "../../assets/slides/slide-vitabox-2.webp";
import slide5 from "../../assets/slides/slide-nature-made.jpeg";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function Slides() {
  const [index, setIndex] = useState(0);
  const slides = [slide1, slide2, slide3, slide4, slide5];

  const slideRight = () => {
    setIndex((index) => {
      if (index + 1 < slides.length) {
        return index + 1;
      } else {
        return 0;
      }
    });
  };

  const slideLeft = () => {
    setIndex((index) => {
      if (index > 0) {
        return index - 1;
      } else {
        return slides.length - ``;
      }
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      slideRight();
    }, 2000);

    return () => clearInterval(id);
  }, [index]);

  return (
    <Wrapper className="Slides">
      <div
        className="Slides-img-container"
        style={{ transform: `translateX(-${index}00%)` }}
      >
        {slides.map((slide, index) => (
          <img className="Slides-img" src={slide} key={index} />
        ))}
      </div>
      <div>
        <div className="Slides-btn Slides-btn-left">
          <FaChevronLeft onClick={slideLeft} />
        </div>
        <div className="Slides-btn Slides-btn-right">
          <FaChevronRight onClick={slideRight} />
        </div>
      </div>
      <div className="Slides-dots">
        {slides.map((item, itemIndex) => (
          <span
            className={`Slides-dot ${index === itemIndex ? "active" : null}`}
            key={itemIndex}
            onClick={() => {
              setIndex(itemIndex);
            }}
          ></span>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 40rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 2.4rem;

  .Slides-img-container {
    width: 100%;
    height: 100%;
    display: flex;
    transition: 0.3s;

    .Slides-img {
      /* https://befused.com/css/flexbox-prevent-image-shrinking/ */
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 44em) {
    height: 23rem;

    .Slides-img-container {
      .Slides-img {
        object-fit: contain;
      }
    }
  }

  .Slides-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 3.2rem;
    background-color: var(--clr-white);
    color: var(--clr-middle-gray);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      box-shadow: var(--box-shadow--hover);
    }
  }
  .Slides-btn-left {
    left: 0;
    margin-left: 1rem;
  }
  .Slides-btn-right {
    right: 0;
    margin-right: 1rem;
  }

  .Slides-dots {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1.5rem;

    .Slides-dot {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      background-color: var(--clr-gray);
      border-radius: 50%;
      box-shadow: var(--box-shadow);
      transition: var(transition);
      cursor: pointer;
    }
    .active {
      background-color: var(--clr-dark-gray);
    }
  }
`;

export default Slides;
