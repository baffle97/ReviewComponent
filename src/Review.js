import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [review, setReview] = useState(0);
  const { name, job, image, text } = people[review];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  const nextPerson = () => {
    setReview((review) => {
      let newReview = review + 1;
      return checkNumber(newReview);
    });
  };
  const prevPerson = () => {
    setReview((review) => {
      let newReview = review - 1;
      return checkNumber(newReview);
    });
  };

  const randomPerson = () => {
    let ranPerson = Math.round(Math.random() * people.length);

    if (ranPerson === review) {
      ranPerson = review + 1;
    }

    setReview(checkNumber(ranPerson));
  };
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
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
