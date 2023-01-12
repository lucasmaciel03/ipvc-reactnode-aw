import React, { useEffect, useState } from "react";
import WrapperFiltroSection from "../utilities/WrapperFiltroSection";
import classes from "./FormCategory.module.css";
import axios from "axios";


const FormCategory = ({ setFilter, filterVal }) => {
  const [selectedCategories, setSelectedCategories] = useState(filterVal);

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const url = "http://localhost:4243/api/categories/getAllCategories";
    const res = await axios.get(url);

    if(!res) return;
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, [categories]);


  const handleChange = ({ target }) => {
    if (target.checked) {
      setSelectedCategories([...selectedCategories, target.value]);
    } else {
      setSelectedCategories((currValue) => {
        return currValue.filter((val) => val !== target.value);
      });
    }
  };

  useEffect(() => {
    setFilter(selectedCategories);
  }, [selectedCategories, setFilter]);

  useEffect(() => {
    setSelectedCategories(filterVal);
  }, [filterVal]);

  return (
    <WrapperFiltroSection title="Categorias">
      <form className={classes.form}>
        {categories.map((category) => (
          <div className={classes.divInput} key={category.id}>
            <input
              type="checkbox"
              name="categoria"
              id={category.name}
              value={category.name}
              onChange={handleChange}
              checked={selectedCategories.includes(category.name)}
            />
            <label htmlFor={category.name}>{category.name}</label>
          </div>
        ))}
      </form>
    </WrapperFiltroSection>
  );
};

export default FormCategory;
