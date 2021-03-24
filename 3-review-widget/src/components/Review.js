import React, { useState } from "react";
import reviews from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  function next() {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function prev() {
    if (index === 0) {
      const newIndex = reviews.length - 1;
      setIndex(newIndex);
    } else {
      setIndex(index - 1);
    }
  }

  function random() {
    let randomIndex = index;

    while (randomIndex === index) {
      randomIndex = Math.floor(Math.random() * reviews.length);
    }

    setIndex(randomIndex);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        Random
      </button>
    </article>
  );
}

export default Review;
