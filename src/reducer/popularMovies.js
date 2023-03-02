import React from "react";
const initialState = {
  list: [],
};
const popularMovies = (state = initialState, action) => {
  switch (action.type) {
    case "Api_data":
      return {
        list: [...action.payload.data.results],
      };

    default:
      return state;
  }
};

export default popularMovies;
