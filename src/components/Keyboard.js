import React from "react";
import { Box, Table, TableCell, TableRow, Typography } from "@mui/material";
import CalcButton from "./CalcButton";

const Keyboard = ({ children }) => {
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
            />
          </TableCell>
          <TableCell sx={{ padding: 0, width: "auto", borderBottom: 0 }}>
            <CalcButton
              width={width}
              height={height}
              backgroundColor={"#404040"}
              value={
                <Typography variant="h5" fontWeight={"bold"}>
                  ,
                </Typography>
              }
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
            />
          </TableCell>
        </TableRow>
      </Table>
    </Box>
  );
};

export default Keyboard;
