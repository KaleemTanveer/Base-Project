import React from "react";
const initialState = {
  popularTvShow: [],
};
const TvShow = (state = initialState, action) => {
  switch (action.type) {
    case "SAGA_POPULAR_TV_SHOW":
        if (action.payload.page === 1) {
        
            return {
                popularTvShow: [...action.payload.data.results],
            };
          } else {
            return {
                popularTvShow: [...state.popularTvShow, ...action.payload.data.results],
            };
          }

    default:
      return state;
  }
};

export default TvShow;