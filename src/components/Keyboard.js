import React from "react";
import { Box, Table, TableCell, TableRow, Typography } from "@mui/material";
import CalcButton from "./CalcButton";

const Keyboard = ({ changeDisplay }) => {
  const width = "70px";
  const height = "50px";
  const plusHeight = "100px";
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        width: "360px",
        margin: "10px",
        padding: "10px",
        backgroundColor: "#2b2b2b",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
      }}
    >
      <Table sx={{ width: "auto" }}>
        <TableRow>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  {"C"}
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  {"("}
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  {")"}
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  {"mod"}
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  {"Π"}
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#555555"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  7
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#555555"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  8
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#555555"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  9
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  {"÷"}
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  {"√"}
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
        </TableRow>
        <TableRow
          sx={{
            borderBottom: "none",
            "&:last-child th, &:last-child td": {
              borderBottom: 0,
            },
          }}
        >
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#555555"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  4
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#555555"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  5
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#555555"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  6
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  {"×"}
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  {"㎡"}
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
        </TableRow>
        <TableRow
          sx={{
            borderBottom: "none",
            "&:last-child th, &:last-child td": {
              borderBottom: 0,
            },
          }}
        >
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#555555"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  1
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#555555"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  2
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#555555"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  3
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  -
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell
            sx={{ padding: 0, width: "auto", borderBottom: 0 }}
            rowSpan={2}
          >
            <CalcButton
              width={width}
              height={plusHeight}
              backgroundColor={"#ed744a"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  =
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
        </TableRow>
        <TableRow
          sx={{
            borderBottom: "none",
            "&:last-child th, &:last-child td": {
              borderBottom: 0,
            },
          }}
        >
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#555555"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  0
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  .
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  %
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  +
                </Typography>
              }
              changeDisplay={changeDisplay}
            />
          </TableCell>
        </TableRow>
      </Table>
    </Box>
  );
};

export default Keyboard;
