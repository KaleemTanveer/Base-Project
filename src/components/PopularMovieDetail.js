import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
const PopularMovieDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const popularMovieDetail = useSelector(
    (state) => state.Movies.popularMovieDetail
  );
  

  useEffect(() => {
    dispatch({
      type: "POPULAR_PEOPLE_DETAIL",
      movieId: id,
    });
  }, []);

  const backGround = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${popularMovieDetail?.poster_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    height: 400,
    alignItem: "center",
  };
  return (
    <>
      
      <Box
      sx={{
        ...backGround,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          pt:6,
          color: "white",
          
        }}
      >
       {popularMovieDetail?.original_title}
      </Typography>
      <Typography
        variant="h4"
        sx={{
            
            color: "white",
        }}
      >
        Millions of movies, TV shows and people to discover. Explore now.
      </Typography>
    </Box>
    </>
  );
};

export default PopularMovieDetail;
