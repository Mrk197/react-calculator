import React from "react";
import { Box, Typography } from "@mui/material";

const style = {
  backgroundColor: "#4e4e50",
  color: "#ffffff", 
  width: "100%",
  padding: "5px",
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5
};

const Display = ({total}) => {
    return(
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        width: "360px",
        height: "50px",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginBottom: "-10px",
        backgroundColor: "#2b2b2b",
      }}
    >
          <Typography variant="h5" fontWeight={"bold"} sx={style}>{total}</Typography>
    </Box>
    );
};

export default Display;