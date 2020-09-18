import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
    width: "540px",
    border: "1px solid #fff",
    borderRadius: 4,
    padding: theme.spacing(6),
    color: "#fff",
    fontSize: 22,
    backgroundColor: `rgba(0,0,0,0.5)`
  },
}));

const Counter = () => {
  const classes = useStyles();
  const [date, setDate] = useState(() => {
    const localData = localStorage.getItem("date");
    return localData
      ? moment(JSON.parse(localData))
      : moment().add(10, "hours");
  });
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  useEffect(() => {
    startCountdown();
    return clearInterval(interval.current);
  }, [date]);

  const startCountdown = () => {
    interval = setInterval(() => {
      localStorage.setItem("date", JSON.stringify(date));
      const now = moment();
      const distance = date - now;

      const hours = moment.duration(distance).hours();
      const minutes = moment.duration(distance).minutes();
      const seconds = moment.duration(distance).seconds();

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  return (
    <div className={classes.container}>

        <div>
            <p>{hours}</p>
            <p><small>Saat</small></p>
        </div>

        <div>
            <p>{minutes}</p>
            <p><small>Dakika</small></p>
        </div>

        <div>
            <p>{seconds}</p>
            <p><small>Saniye</small></p>
        </div>
    </div>
  );
};

export default Counter;