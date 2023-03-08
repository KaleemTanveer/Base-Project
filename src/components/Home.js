import React from "react";
import home from "../assets/home.jfif";
import { Typography, Box, TextField,InputAdornment,Button } from "@mui/material";
const Home = () => {
  const styles = {
    // paperContainer: {
    //   // backgroundImage: `url(${posterImage})`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   color: "white",
    //   minHeight: "400px",
    // },
    inputField: {
      mt:"20px",
      width: "90%",
      height: "30px",
      border: 0,
      outline: "none",
      borderRadius: "50px",
    },
    inputField: {
      width: "100%",
      "& .MuiInputBase-root": {
        borderRadius: "50px",
        paddingRight: "0px",
        height: "46px",
        backgroundColor: "white",
      },
    },
  };
  const backGround = {
    backgroundImage: `url(${home})`,
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
    <Box
      sx={{
        ...backGround,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          pt: 6,
          color: "white",
        }}
      >
        Welcome.
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          
        }}
      >
        Millions of movies, TV shows and people to discover. Explore now.
      </Typography>
      <Box mt={5}>
      <TextField 
        placeholder="Search for a movie, tv show, people"
        InputLabelProps={{ shrink: false }}
        id="input-with-icon-textfield"
        sx={styles.inputField}
        // onChange={(e) => setInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment
              className="searchbtn"
              position="start"
              sx={{ height: "46px", marginRight: "0px" }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ height: "46px", borderRadius: "50px" }}
              >
                Search
              </Button>
            </InputAdornment>
          ),
        }}
      />
      </Box>
    </Box>
  );
};
export default Home;
