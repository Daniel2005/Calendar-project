import React from "react";
import styles from "../../styles/Calendar.module.css";
import EventBox from "./EventBox";
import { events, timeSlots } from "@/shared/constants";

const DayCell = ({ day, hour, dayIndex }) => {
  const sortedEvents = events.sort((a, b) => {
    const timeA = timeSlots.indexOf(a.startTime);
    const timeB = timeSlots.indexOf(b.startTime);
    return timeA - timeB;
  });

  const eventsForHour = sortedEvents.filter(
    (e) =>
      e.day === day &&
      parseInt(e.startTime.split(":")[0]) ===
        parseInt(hour.split(":")[0])
  );

  return (
    <div key={dayIndex} className={styles.dayCell}>
      {eventsForHour.map((event, eventIndex) => (
        <EventBox
          key={eventIndex}
          event={event}
        />
      ))}
    </div>
  );
};

export default DayCell;