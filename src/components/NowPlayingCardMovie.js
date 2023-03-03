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
const NowPlayingMovieCard = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.Movies.nowPlayingMovie);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    dispatch({
      type: "NOW_PLAYING",
    });
  };
  return (
    <>
      <Box sx={{ mx: "10%", my: "10px" }}>
        <Typography variant="h4" sx={{ mx: "20px", fontWeight: "Bold" }}>
          NowPlaying Movies
        </Typography>
      </Box>
      {/* <Grid>
        <SimpleAccordion />
      </Grid> */}
      <Box sx={{ mx: "20%" }}>
        <Grid container spacing={3}>
          {/* <Stack direction="row"> */}
          {popularMovies?.map((movies) => (
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
                  <Typography gutterBottom variant="h5" component="div">
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

export default NowPlayingMovieCard;
