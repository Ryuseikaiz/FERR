import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import Ucard from "./Ucard";
import Slider from "react-slick";
import { fetchUpcoming } from "../../services/UpcomingServices";
import { UpcomingReducer } from "../../reducers/UpcomingReducer";
import "./Upcoming.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Upcoming = ({ title }) => {
  const [items, dispatch] = useReducer(UpcomingReducer, []);

  useEffect(() => {
    const getUpcomingItems = async () => {
      try {
        const data = await fetchUpcoming();
        dispatch({ type: "FETCH_UPCOMING", payload: data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getUpcomingItems();
  }, []);

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
    <>
      <section className="upcome">
        <div className="container">
          <div className="heading flexSB">
            <h1>{title}</h1>
            <Link to="/">View All</Link>
          </div>
          <div className="content">
            <Slider {...settings}>
              {items.map((item) => {
                return (
                  <>
                    <Ucard key={item.id} item={item} />
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Upcoming;
