import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const FilterContext = createContext();

const initialFilter = {
  colors: [],
  prices: { min: 0, max: 1000 },
  categories: [],
  name: "",
};

const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState(initialFilter);
  const [films, setFilms ] = useState([])

  const getFilms = async () => {
    const url = "http://localhost:4243/api/films/getAllFilmsWithCategoryName";
    const res = await axios.get(url);
    
    if(!res) return;
    setFilms(res.data);
  };

  useEffect(() => {
    getFilms();
  }, []);

  const [filteredProducts, setFilteredProducts] = useState(films);

  const saveFilter = (newFilter) => {
    setFilter((currVal) => ({ ...newFilter, name: currVal.name }));
  };

  const saveInputSearchVal = (name) => {
    setFilter((currVal) => ({ ...currVal, name }));
  };

  const deleteInputSearchVal = () => {
    setFilter((currVal) => ({ ...currVal, name: "" }));
  };

  const deleteFilter = (valToDelete, filterName) => {
    setFilter((currVal) => {
      const newArray = currVal[filterName].filter((val) => val !== valToDelete);
      return { ...currVal, [filterName]: [...newArray] };
    });
  };

  const deleteColor = (colorToDelete) => {
    deleteFilter(colorToDelete, "colors");
  };

  const deleteCategory = (categoryToDelete) => {
    deleteFilter(categoryToDelete, "categories");
  };

  //Filtragem
  useEffect(() => {
    let newFilter = {};

    //Filtrar por cor
    newFilter = films.filter((prod) => {
      if (filter.colors.length === 0) return true;
      return filter.colors.indexOf(prod.color) >= 0;
    });

    //Filtrar por categoria
    newFilter = films.filter((prod) => {
      if (filter.categories.length === 0) return true;
      return filter.categories.indexOf(prod.category) >= 0;
    });

    //Filtrar por nome
    newFilter = newFilter.filter((prod) => {
      const prodNames = prod.name.split(" ");
      const productNameHasSearchValue = prodNames.some((name) => {
        return name.toLowerCase().startsWith(filter.name);
      });
      if (productNameHasSearchValue) return prod;
      return false;
    });
    
    //Filtrar por preço
    newFilter = newFilter.filter((prod) => {
      return (
        prod.price >= +filter.prices?.min && prod.price <= +filter.prices?.max
      );
    });

    setFilteredProducts(newFilter);
  }, [
    filter.colors,
    filter.categories,
    filter.name,
    filter.prices,
    films,
  ]);

  return (
    <FilterContext.Provider
      value={{
        saveFilter,
        saveInputSearchVal,
        deleteInputSearchVal,
        deleteColor,
        deleteCategory,
        filteredProducts,
        initialFilter,
        filter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
