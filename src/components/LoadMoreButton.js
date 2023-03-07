import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
let count = 1;
const LoadMoreButton = (props) => {
  const dispatch = useDispatch();

  const apiCall = () => {
      ++count;
    dispatch({
      type: "POPULAR_MOVIE",
      page: count,
    });
  };
  return (
    <>
      <Button variant="contained" sx={{ width: "100%" }} onClick={apiCall}>
        Load More
      </Button>
    </>
  );
};
export default LoadMoreButton;
