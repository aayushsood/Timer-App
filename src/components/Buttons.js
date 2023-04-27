import React, { useRef } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
let increaseSecond = 0;

export default function BasicButtons({ settime, setlaps, time, laps }) {
  const first = useRef(null);
  const classes = useStyles();

  const reset = () => {
    increaseSecond = 0;
    settime(`${0}${0}:${0}${0}`);
    clearInterval(first.current);
  };

  const showOnTheTimer = () => {
    if (increaseSecond <= 0) {
      clearInterval(first.current);
      return `${0}${0}:${0}${0}`;
    } else if (increaseSecond < 10) return `${0}${0}:${0}${increaseSecond}`;
    else if (increaseSecond >= 10 && increaseSecond < 60) {
      const remainder = increaseSecond % 10;
      // console.log("remainder ", remainder);
      const quotient = Math.floor(increaseSecond / 10);
      // console.log("quotient ", quotient);
      return `${0}${0}:${quotient}${remainder}`;
    } else if (increaseSecond >= 60) {
      console.log(increaseSecond);
      const somequotient = Math.floor(increaseSecond / 60);
      const someremainder = increaseSecond % 60;
      console.log(somequotient);
      console.log(someremainder);
      if (somequotient < 10 && someremainder < 10) {
        return `${0}${somequotient}:${0}${someremainder}`;
      } else if (somequotient >= 10 && someremainder < 10) {
        const quotienQuotient = Math.floor(somequotient / 10);
        const quotientRemainder = somequotient % 10;
        return `${quotienQuotient}${quotientRemainder}:${0}${someremainder}`;
      } else if (somequotient < 10 && someremainder >= 10) {
        const remainderQuotient = Math.floor(someremainder / 10);
        const remainderRemainder = someremainder % 10;
        return `${0}${somequotient}:${remainderQuotient}${remainderRemainder}`;
      } else if (somequotient >= 10 && someremainder >= 10) {
        const quotientQuotient = Math.floor(somequotient / 10);
        const quotientRemainder = somequotient % 10;
        const remainderQuotient = Math.floor(someremainder / 10);
        const remainderReamainder = someremainder % 10;
        return `${quotientQuotient}${quotientRemainder}:${remainderQuotient}${remainderReamainder}`;
      }
    }
  };

  const decreaseTimeByOneSec = () => {
    if (increaseSecond > 0) {
      first.current = setInterval(() => {
        --increaseSecond;
        settime(showOnTheTimer);
      }, 1000);
    }
  };

  return (
    <>
      <Stack direction="row" spacing={2} className={classes.stackWidth}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            increaseSecond++;
            settime(showOnTheTimer);
          }}
        >
          +
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            decreaseTimeByOneSec();
          }}
        >
          Start
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            clearInterval(first.current);
          }}
        >
          Stop
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            const lapsCopy = [...laps];
            lapsCopy.push(time);
            setlaps([...lapsCopy]);
          }}
        >
          Lap
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            reset();
          }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            if (increaseSecond > 0) --increaseSecond;
            settime(showOnTheTimer);
          }}
        >
          -
        </Button>
      </Stack>
    </>
  );
}

const useStyles = makeStyles({
  button: {
    backgroundColor: "rgb(109, 99, 99)",
    color: "#000000",
    "&:hover": {
      backgroundColor: "gray",
    },
    fontWeight: "bold",
  },
  stackWidth: {
    width: "30%",
    margin: "auto",
  },
});
