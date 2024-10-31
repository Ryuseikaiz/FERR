// Trending.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrending } from '../../services/trendingServices';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './trending.css';


function Trending() {
  const dispatch = useDispatch();
  const { trending, error } = useSelector((state) => state.trending);

  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  return (
    <div className="trending-container">
      {/* Carousel */}
      <Carousel>
        {trending.map((item) => (
          <Carousel.Item key={item.id} className="carousel-item-custom">
            <img src={item.cover} alt={item.name} className="carousel-image" />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2 className="carousel-title">{item.name}</h2>
                <p className="carousel-rating">{item.rating} (IMDb)</p>
                <p className="carousel-time">{item.time}</p>
                <p className="carousel-desc">{item.desc}</p>
                <p><span className="carousel-label">Starring:</span> {item.starring}</p>
                <p><span className="carousel-label">Genres:</span> {item.genres}</p>
                <p><span className="carousel-label">Tags:</span> {item.tags}</p>
                <button className="play-now-button">Play Now</button>
              </div>
              <div className="watch-trailer">
                <button className="trailer-button">
                  <FontAwesomeIcon icon={faPlay} size="lg" />
                </button>

              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Trending;
