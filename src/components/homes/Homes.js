import React, { useState, useEffect } from "react";
import "./home.css";
import Home from "./Home";
const Homes = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const response = await fetch("https://my-json-server.typicode.com/nomsociuu/FERR/homeData");
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Error fetching home data:", error);
            }
        };
        fetchHomeData();
    }, []);
    return (
        <>
            <section className="home">
                <Home items={items} />
            </section>
            <div className="margin"></div>
        </>
    );
};
export default Homes;