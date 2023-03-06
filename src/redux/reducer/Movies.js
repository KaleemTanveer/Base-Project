import React from "react";
const initialState = {
  popularMovie: [],
  nowPlayingMovie: [],
  upComingMovie: [],
  topRatedMovie: [],
  popularMovieDetail: [],
};
const Movies = (state = initialState, action) => {
  switch (action.type) {
    case "SAGA_POPULAR_MOVIE":
      return {
        popularMovie: [...action.payload.data.results],
      };

    case "SAGA_NOW_PLAYING":
      return {
        nowPlayingMovie: [...action.payload.data.results],
      };

    case "SAGA_UP_COMING_MOVIE":
      return {
        upComingMovie: [...action.payload.data.results],
      };

    case "SAGA_TOP_RATED_MOVIE":
      return {
        topRatedMovie: [...action.payload.data.results],
      };
    case "SAGA_POPULAR_PEOPLE_DETAIL":
      // console.log(action.data.data);
      return {
        popularMovieDetail: action.payload.data,
      };

    default:
      return state;
  }
};

export default Movies;
