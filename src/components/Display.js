import React from "react";
import { Box, Typography } from "@mui/material";

const Display = ({total}) => {
    return(
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        width: "360px",
        height: "50px",
        padding: "10px",
        marginBottom: "-10px",
        backgroundColor: "#404040",
      }}
    >
        <Typography variant="h5" fontWeight={"bold"} sx={{color: "#ffff"}}>{total}</Typography>
    </Box>
    );
};

export default Display;