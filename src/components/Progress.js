import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const progress = {
    position: 'relative',
    display: 'inline-flex',
    bgcolor: "black",
    borderRadius: "100%",
    p: 0.3,
    mx: 2,
    mt: -2.6
}
const progressValue = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
let mRating = 50;
let circleColor;
if (mRating >= 70) {
    circleColor = "success"
} else if (mRating >= 50)  {
    circleColor = "warning"
} else if (mRating >= 30 ) {
    circleColor = "primary"
} else if (mRating < 30) {
    circleColor = "primary"
}
function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ ...progress }}>
            <CircularProgress variant="determinate" color={circleColor} {...props} />
            <Box sx={{ ...progressValue }}>
                <Typography variant="caption" component="div" color="white">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}
export default function PercentageProgress() {
    return <CircularProgressWithLabel value={mRating} />;
}