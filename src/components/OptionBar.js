import React from "react";
import { Box, IconButton } from "@mui/material";
import UndoIcon from '@mui/icons-material/Undo';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const OptionBar = ({changeHistory, undo}) => {
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
            <UndoIcon fontSize="small" sx={{backgroundColor:"#8c8c8c", borderRadius:5}} onClick={()=> undo()}/>
        </IconButton>
        <IconButton aria-label="delete" onClick={()=> changeHistory([])}>
            <DeleteOutlineOutlinedIcon fontSize="small" sx={{backgroundColor:"#8c8c8c", borderRadius:5}}/>
        </IconButton>
    </Box>)
};

export default OptionBar;