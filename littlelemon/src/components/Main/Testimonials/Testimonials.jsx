import React from "react";
import { AppWrap } from "../../../wrapper";
import { images } from "../../../constants";
import "./Testimonials.css";
import { AiFillStar } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

const Pulse = styled.div`
  animation: 5s ${keyframes`${pulse}`} infinite;
`;

const reviews = [
  {
    image: images.iqsf,
    name: "Meriem",
    reviewText:
      "Savor Delights is perfect for special occasions. The service, ambiance, and food are consistently amazing. Try their seafood and save room for dessert!",
  },
  {
    image: images.sajal,
    name: "Sarah",
    reviewText:
      "Impressive service and top-notch ingredients. Whether you're a vegetarian or a meat lover, you'll find something to love. A gem in our culinary scene.",
  },
  {
    image: images.ramsha,
    name: "Fairouz",
    reviewText:
      "Savor Delights is a culinary adventure! Unique fusion flavors, great wine selection, and knowledgeable staff make it a must-visit for foodies.",
  },
  {
    image: images.mawra,
    name: "Mawra",
    reviewText:
      "Savor Delights is family-friendly and excellent. They have a fantastic kids' menu and cater to various tastes. Perfect for celebrating special occasions with loved ones.",
  },
];

const ReviewCard = ({ props }) => {
  return (
    <div className="app__testimonials-review">
      <div className="app__testimonials-stars">
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
        <AiFillStar className="app__testimonials-review-stars-icon" />
      </div>
      <div className="app__testimonials-name-image">
        <img
          className="app__testimonial-review-image"
          src={props.image}
          alt={props.name}
        />
        <h6 className="app__testimonials-review-name">{props.name}</h6>
      </div>
      <p className="app__testimonials-review-text">{props.reviewText}</p>
    </div>
  );
};
const Testimonials = () => {
  return (
    <div className="app__testimonials-content">
      <h1 className="app__testimonals-title">Testimonials</h1>
      <div className="app__testimonial-review-card">
        {reviews.map((review) => {
          return (
            <Pulse>
              <ReviewCard props={review} />
            </Pulse>
          );
        })}
      </div>
    </div>
  );
};

export default AppWrap(
  Testimonials,
  "testimonials-section",
  "app__testimonials"
);
