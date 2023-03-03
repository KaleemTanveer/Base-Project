import React, { useEffect } from "react";
import SimpleAccordion from "./Accordion";
import { useDispatch } from "react-redux";

import {
  Box,
  Typography,
  CssBaseline,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";
import PercentageProgress from "./Progress";
import abc from "../assets/abc.jpg";
import { useSelector } from "react-redux";

const TopRatedMovieCard = () => {
  const dispatch = useDispatch();
  const topRatedMovie = useSelector((state) => state.Movies.topRatedMovie);
  
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    dispatch({
      type: "TOP_RATED_MOVIE",
    });
  };
  return (
    <>
      <Box sx={{ mx: "10%", my: "10px" }}>
        <Typography variant="h4" sx={{ mx: "20px", fontWeight: "Bold" }}>
        TopRated Movies
        </Typography>
      </Box>
      {/* <Grid>
        <SimpleAccordion />
      </Grid> */}
      <Box sx={{ mx: "20%" }}>
        <Grid container spacing={3}>
          {/* <Stack direction="row"> */}
          {topRatedMovie?.map((movies) => (
            <Grid key={movies.id} item lg={3} md={4} sm={6} xs={12}>
              <Card sx={{ mixWidth: 50, minWidth: 150, maxHight: 550 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="auto"
                  image={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                />
                <PercentageProgress
                  key={movies.id}
                  vote={movies.vote_average * 10}
                />

                <CardContent>
                  <Typography gutterBottom variant="body2" component="div">
                    {movies.original_title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movies.release_date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* </Stack> */}
        </Grid>
      </Box>
    </>
  );
};

export default TopRatedMovieCard;
