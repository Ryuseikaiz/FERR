import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css";

const HomeCard = (props) => {
  const { id, cover, name, rating, time, desc, starring, genres, tags, video } = props.item;

  return (
    <div className="homeCard-box">
      <div className="homeCard-coverImage">
        <img src={cover} alt={name} />
      </div>
      <div className="homeCard-content">
        <div className="homeCard-details row">
          <h1>{name}</h1>
          <div className="homeCard-rating">
            <div className="rate">
              <i className="fas fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
            <label>{rating}(Imdb)</label>
            <span>GP</span>
            <label>{time}</label>
          </div>
          <p>{desc}</p>
          <div className="homeCard-cast">
            <h4>
              <span>Starring </span>
              {starring}
            </h4>
            <h4>
              <span>Genres </span>
              {genres}
            </h4>
            <h4>
              <span>Tags </span>
              {tags}
            </h4>
          </div>
          <div>
            <button className="homeCard-primary-btn">
              <i className="fas fa-play"></i> PLAY NOW
            </button>
          </div>
        </div>
        <div className="homeCard-palyButton row">
          <Link to={`/singlepage/${id}`}>
            <button>
              <div className="homeCard-img">
                <img src="./images/play-button.png" alt="Play Button" />
                <img src="./images/play.png" className="homeCard-change" alt="Play" />
              </div>
              WATCH TRAILER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
