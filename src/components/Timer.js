import { Box } from "@mui/system";
import React, { useState } from "react";
import "../styles/timer.css";
import Buttons from "./Buttons";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

const Timer = () => {
  const classes = useStyles();
  const [time, settime] = useState(`${0}${0}:${0}${0}`);
  const [laps, setlaps] = useState([]);
  return (
    <div className="align-center timer-font-size">
      <h1>The timer app</h1>
      <h2>{time}</h2>
      <Buttons setlaps={setlaps} settime={settime} time={time} laps={laps} />
      <Box>
        <TableContainer component={Paper} className={classes.table}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableRowCenter}>Laps</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {laps.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.tableRowCenter}
                  >
                    {row}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

const useStyles = makeStyles({
  table: {
    width: "50%",
    margin: "auto",
    marginTop: "2rem",
  },
  tableRowCenter: {
    textAlign: "center",
  },
});

export default Timer;
