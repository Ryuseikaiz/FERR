import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { fetchLatestMovies } from '../../services/latestServices';
import './latestMovie.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div>
  );
};

const LatestMovies = ({ title }) => {
  const state = useSelector((state) => state);
  const { loading, movies = [], error } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="latest-movies">
      <div className="container">
        <div className="heading flexSB">
          <h1>Latest Movies</h1>
          <a href="/movies">View All</a>
        </div>
        <div className="content">
          <Slider {...settings}>
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img src={movie.cover} alt={movie.name} />
                <div className="movie-info">
                  <h2>{movie.name}</h2>
                  <p>{movie.time}</p>
                  <button className="play-button">
                    <i className="play-icon fa fa-play"/>Play Now</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LatestMovies;
