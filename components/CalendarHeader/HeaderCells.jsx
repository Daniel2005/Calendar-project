import React, { useContext } from "react";
import styles from "../../styles/Calendar.module.css";
import { daysOfWeek } from "../../shared/constants";
import Context from "../Context";

const HeaderCells = () => {
  const { currentDay, setCurrentDay } = useContext(Context);

  return (
    <>
      {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className={`${styles.dayHeader} ${
              day === currentDay ? styles.currentDay : ""
            }`}
            onClick={() => setCurrentDay(day)}
          >
          {day}
        </div>
      ))}
    </>
  );
};

export default HeaderCells;