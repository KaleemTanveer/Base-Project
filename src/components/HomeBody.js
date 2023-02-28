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
import React from "react";
import abc from "../assets/abc.jpg";
import PercentageProgress from "./Progress";



export const HomeBody = () => {
 

//   if (num > 70) {
//     circleColor = "success";
//   } else if (num > 50) {
//     circleColor = "warning";
//   } else if (num > 30) {
//     circleColor = "danger";
//   }

  return (
    <>
      <Box sx={{ mx: "10%", my: "10px" }}>
        <Typography variant="h4" sx={{ p: "10px" }}>
          Trending.
        </Typography>
      </Box>

      <Container sx={{ mx: "10%", mb: "40px" }}>
        <Grid container sx={{ overflow: "auto" }}>
          <Stack direction="row" spacing={2}>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <PercentageProgress/>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={abc}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plane
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023-01-12
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Container>
    </>
  );
};
