import React from "react";
import { Box } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    width: '100%',
    overflow: 'auto',
    p: '0',
    color: "#d5d9da",
    backgroundColor: "#4e4e50",
    minHeight: "100px",
    borderBottom: 1,
    borderBottomColor: "#171718",
    display: "flex",
    flexDirection: "column-reverse",
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
                <li key={index}>
                    <ListItem sx={{maxHeight: "37px", width: "100%", justifyContent: 'flex-end'}}>
                        <ListItemText primary={element.op} multiline sx={{ width: 2/4, maxWidth: 3/5 }}/>
                        <ListItemText primary="=" sx={{ width: 1/4, minWidth: 1/5 }}/>
                        <ListItemText primary={element.total} sx={{ width: 1/4, minWidth: 1/5 }}/>
                    </ListItem>
                    <Divider sx={{borderColor:'#171718'}} />
                </li>
            ))}
        </List>
    </Box>
    );
};

export default History;