import React from "react";
import { Box } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const style = {
    width: '100%',
    //overflow: 'scroll',
    overflowY: "auto",
    p: '0',
    color: "#d5d9da",
    backgroundColor: "#4e4e50",
    minHeight: "100px",
    borderBottom: 1,
    borderBottomColor: "#171718",
    display: "flex",
    flexDirection: "column",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  };

const History = ({history}) => {
    return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "flex-end",
        width: "360px",
        maxHeight: "150px",
        minHeight: "100px",
        paddingLeft: "10px",
        paddingRight: "10px",
        backgroundColor: "#2b2b2b",
      }}
    >
        <List sx={style}>
            {history.map((element, index)=>(
                <ListItem key={index} sx={{maxHeight: "37px", width: "100%", borderBottom: .5, borderColor:"#171718"}}>
                    <ListItemText primary={element.op+" = "+element.total} multiline />
                    {/* <ListItemText primary={} sx={{ width: 1/4, minWidth: 1/5 }}/> */}
                </ListItem>
            ))}
        </List>
    </Box>
    );
};

export default History;