import React from "react";
import { Button } from "@mui/material";

const CalcButton = ({ value, width, height, rowSpan = 1, backgroundColor, changeDisplay }) => {
  const buttonPresed = ()=>{
    changeDisplay(value.props.children);
  }
  return (
    <Button
      variant="contained"
      sx={{
        m: "1px",
        width: `${width}`,
        height: `${height}`,
        alignContent: "center",
        alignItems: "center",
        gridRow: `span ${rowSpan}`,
        borderRadius: "5px",
        backgroundColor: `${backgroundColor}`,
      }}
      onClick={buttonPresed}
    >
      {value}
    </Button>
  );
};

export default CalcButton;
