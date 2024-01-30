import React from "react";
import styles from "../../styles/Calendar.module.css";
import { events, timeSlots } from "../../shared/constants";
import { DayCells } from "./DayCells";

const CalendarBody = () => {
  return (
    <div className={styles.body}>
      {timeSlots.map((hour, index) => (
        <div key={index} className={styles.hourRow}>
          {!events.isExtra && <div className={styles.hourLabel}>{hour}</div>}
          <DayCells hour={hour} />
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;