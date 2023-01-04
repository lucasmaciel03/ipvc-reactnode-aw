import React from "react";
import { motion } from "framer-motion";
import "./categories.css";
import { useState, useEffect, useRef } from "react";
import  axios from "axios";

const Categorie2 = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  // connect to backend
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const url = "http://localhost:4243/api/categories/getAllCategories";
    const res = await axios.get(url);

    if (!res) return;
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, [categories]);
  
  return (
    <div className="categories">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {categories.map((category) => (
            <motion.div className="item"  key={category.id}>
              <p className="itemcategory">{category.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Categorie2;
