import React from "react";
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
const MovieCard = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ mx: "10%", my: "10px" }}>
        <Typography variant="h4" sx={{ mx: "20px", fontWeight: "Bold" }}>
          Popular Movies
        </Typography>
      </Box>
      <Box sx={{ mx: "20%" }}>
        <Grid xs={12} container spacing={2}>
          {/* <Stack direction="row"> */}
          <Grid item lg={3} md={4}>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <PercentageProgress />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} md={4}>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <PercentageProgress />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} md={4}>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <PercentageProgress />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} md={4}>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <PercentageProgress />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} md={4}>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <PercentageProgress />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} md={4}>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <PercentageProgress />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} md={4}>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <PercentageProgress />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* </Stack> */}
        </Grid>
      </Box>
    </>
  );
};

export default MovieCard;
