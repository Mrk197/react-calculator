import React from "react";
import { Box, IconButton } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const OptionBar = () => {
    return(<Box
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-end",
        width: "370px",
        height: "20px",
        padding: "5px",
        backgroundColor: "#2b2b2b",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
      }}
    >
        <IconButton aria-label="delete">
            <RestartAltIcon fontSize="small" sx={{backgroundColor:"#8c8c8c", borderRadius:5}}/>
        </IconButton>
        <IconButton aria-label="delete">
            <DeleteOutlineOutlinedIcon fontSize="small" sx={{backgroundColor:"#8c8c8c", borderRadius:5}}/>
        </IconButton>
    </Box>)
};

export default OptionBar;