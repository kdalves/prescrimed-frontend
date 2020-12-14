import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [search, setSearch] = useState("");

  const newSearch = (input) => {
    setSearch(input);
  };

  return (
    <SearchContext.Provider value={{ search, newSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

