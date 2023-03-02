import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const progress = {
  position: "relative",
  display: "inline-flex",
  bgcolor: "black",
  borderRadius: "100%",
  p: 0.3,
  mx: 2,
  mt: -2.6,
};
const progressValue = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
function CircularProgressWithLabel(props) {
  console.log(props.vote);
//   let circleColor;
//   if (props.vote >= 70) {
//     circleColor = "success";
//   } else if (props.vote >= 50) {
//     circleColor = "warning";
//   } else if (props.vote >= 30) {
//     circleColor = "primary";
//   } else if (props.vote < 30) {
//     console.log("color");
//     circleColor = "primary";
//   }

//   {
//     // console.log(circleColor);
//   }
  return (
    <Box sx={{ ...progress }}>
      <CircularProgress variant="determinate" color="success" {...props} />
      <Box sx={{ ...progressValue }}>
        <Typography variant="caption" component="div" color="white">
          {`${Math.round(props.vote)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
export default function PercentageProgress(props) {
  return <CircularProgressWithLabel vote={props.vote} />;
}
