import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Upcoming from "../upcoming/Upcoming"; // Ensure this component is correctly defined
import "./style.css";

const Trailer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [rec, setRec] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`https://my-json-server.typicode.com/nomsociuu/FERR/homeData/${id}`);
      if (response.ok) {
        const data = await response.json();
        setItem(data);
      } else {
        console.error("Failed to fetch item data");
      }
    };

    const fetchRecommended = async () => {
      const response = await fetch(`https://my-json-server.typicode.com/nomsociuu/FERR/recommended`);
      if (response.ok) {
        const data = await response.json();
        setRec(data);
      } else {
        console.error("Failed to fetch recommended data");
      }
    };

    fetchItem();
    fetchRecommended();
  }, [id]);

  // Share functions
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(item?.name)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="trailer-container">
      {item ? (
        <div className="trailer-card">
          <h1>{item.name}</h1>
          <h2>{item.time} | HD</h2>
          <video className="trailer-video" src={item.video} controls></video>
          <p className="trailer-description">{item.desc}</p>
          <div className="share-buttons">
            <button onClick={shareOnFacebook}>Share on Facebook</button>
            <button onClick={shareOnTwitter}>Share on Twitter</button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <h2 className="recommended-title">Recommended Movies</h2>
      <Upcoming items={rec} title='Recommended Movies' />
    </div>
  );
};

export default Trailer;
