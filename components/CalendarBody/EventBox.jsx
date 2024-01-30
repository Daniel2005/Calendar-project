import React, { useContext } from "react";
import styles from "../../styles/Calendar.module.css";
import { getLevelColor } from "../../shared/constants";
import Context from "../Context";

const EventBox = ({ event }) => {
  const { currentHour, currentDay, openModal } = useContext(Context);

  return (
    <div
      className={`${styles.eventBox} ${
        event.startTime === currentHour && currentDay === currentDay
          ? styles.greenEventBox
          : ""
      }`}
      onClick={() => openModal(event)}
    >
      <div className={styles.imageBox}>
        <img src={event.imageUrl} alt="" className={styles.eventImage} />
        <div>
          <div className={styles.eventTitle}>{event.teacher}</div>
          <div className={styles.eventHour}>
            <div
              className={`${styles.circle} ${
                event.startTime === currentHour && currentDay === currentDay
                  ? styles.greenCircle
                  : ""
              }`}
            ></div>
            {event.startTime === currentHour && currentDay === currentDay
              ? "сега "
              : ""}
            {event.startTime} - {event.endTime}
          </div>
        </div>
      </div>
      <div className={styles.eventLevelBox}>
        {event.levels.map((level, levelIndex) => (
            <div
              key={levelIndex}
              className={`${getLevelColor(level)} ${styles.levelBlock}`}
            >
              <span>{level}</span>
            </div>
          ))}
        </div>
      </div>
  );
};

export default EventBox;