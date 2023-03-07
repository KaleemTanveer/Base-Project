import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  Box,
  Typography,
  Container,
  CardMedia,
  Card,
  Grid,
  Avatar,
} from "@mui/material";
const PopularMovieDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const popularMovieDetail = useSelector(
    (state) => state.Movies.popularMovieDetail
  );
 let newDate=new Date (popularMovieDetail?.release_date)
  useEffect(() => {
    dispatch({
      type: "POPULAR_MOVIE_DETAIL",
      movieId: id,
    });
  }, []);
  let getYear = () => {
    let currentYear =popularMovieDetail?.release_date;
    return currentYear;
};
  const backGround = {
    // backgroundImage: `url(https://image.tmdb.org/t/p/original/${popularMovieDetail?.backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    bgColor: "black",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "auto",
    alignItem: "center",
    backgroundColor: "black",
    // opacity: "0.7",
  };
  return (
    <>
      <Box
        sx={{
          ...backGround,
          bgcolor: "text.primary",
        }}
      >
        <Container width="xl">
          <Grid container py={6}>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Card sx={{ mixWidth: 50, minWidth: 150, maxHeight: 400 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="auto"
                  image={
                    popularMovieDetail?.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${popularMovieDetail?.poster_path}`
                      : "#"
                  }
                />
              </Card>
            </Grid>
            <Grid item lg={9} md={4} sm={6} xs={12} pl={5}>
              <Box pt={5}>
                <Typography variant="h5" color={"wheat"}>
                  {popularMovieDetail?.original_title} ({newDate.getFullYear()}){" "}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle" color={"white"}>
                {popularMovieDetail?.release_date}  (US) Horror, Mystery, Thriller 1h 40m{" "}
                </Typography>
              </Box>
              <Box display={"flex"}>
                <Avatar sx={{ bgcolor: "#002244",ml:"10px" }}>
                  <FormatListBulletedIcon fontSize="small" />
                </Avatar>
                <Avatar sx={{ bgcolor: "#002244",ml:"10px" }}>
                  <FavoriteIcon fontSize="small" />
                </Avatar>
                <Avatar sx={{ bgcolor: "#002244",ml:"10px" }}>
                  <BookmarkIcon fontSize="small" />
                </Avatar>
              </Box>
              <Box>
                <Typography variant="subtitle" color={"white"}>Save your family or save humanity. Make the choice.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PopularMovieDetail;
