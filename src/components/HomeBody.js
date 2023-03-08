import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import abc from "../assets/abc.jpg";
import PercentageProgress from "./Progress";

const HomeBody = () => {
  const trendingMovie = useSelector((state) => state.Movies.trendingMovie);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "TRENDING_MOVIE",
    });
  }, []);
  return (
    <>
      <Box sx={{ mx: "10%", my: "10px" }}>
        <Typography variant="h4" sx={{ p: "10px", fontWeight: "bold" }}>
          Trending Movies.
        </Typography>
      </Box>

      <Container maxWidth="xl" sx={{ mb: 6 }}>
        <Box sx={{ overflow: "auto", width: "80%", mx: 15 }}>
          <Grid container>
            <Stack direction="row" spacing={2}>
              {trendingMovie?.map((trend) => {
                
                return (
                  <Card key={trend.id} sx={{ minWidth: 200 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="auto"
                      image={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`}
                    />
                    <PercentageProgress
                      key={trend.id}
                      vote={trend.vote_average * 10}
                    />

                    <CardContent>
                      <Typography gutterBottom variant="subtitle" component="div" fontWeight={"bold"}>
                        {trend.original_title || trend.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                     { trend.release_date||trend.first_air_date}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Stack>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default HomeBody;
