import React from "react";
import { motion } from "framer-motion";
import "./categories.css";
import { useState, useEffect, useRef } from "react";

const Categorie2 = () => {
  const Action = "Action",
    AnimationMovie = "Animation",
    Adventure = "Adventure",
    Comedy = "Comedy",
    Drama = "Drama",
    Fantasy = "Fantasy",
    Horror = "Horror",
    Musicals = "Musicals",
    Mystery = "Mystery",
    Romance = "Romance",
    ScienceFiction = "Science Fiction",
    Sports = "Sports",
    Crime = "Crime",
    Violence = "Violence",
    Western = "Western",
    War = "War",
    Thriller = "Thriller";

  const categories = [
    Action,
    AnimationMovie,
    Adventure,
    Comedy,
    Drama,
    Fantasy,
    Horror,
    Musicals,
    Mystery,
    Romance,
    ScienceFiction,
    Sports,
    Crime,
    Violence,
    Western,
    War,
    Thriller,
  ];

  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

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
            <motion.div className="item" key={category}>
              <p className="itemcategory">{category}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Categorie2;
