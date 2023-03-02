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

const HomeBody = () => {
  return (
    <>
      <Box sx={{ mx: "10%", my: "10px" }}>
        <Typography variant="h4" sx={{ p: "10px", fontWeight:"bold" }}>
          Trending Movies.
        </Typography>
      </Box>

      <Container maxWidth="xl" sx={{  mb: 6 }}>
        <Box sx={{ overflow: "auto", width: "80%",mx:15 }}>
          <Grid container>
            <Stack direction="row" spacing={2}>
              <Card sx={{ minWidth: 200 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="auto"
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
              <Card sx={{ minWidth: 200 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="auto"
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
                  height="auto"
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
                  height="auto"
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
                  height="auto"
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
                  height="auto"
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
                  height="auto"
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
        </Box>
      </Container>
    </>
  );
};
export default HomeBody;
