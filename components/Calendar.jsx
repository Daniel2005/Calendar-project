import React, { useState, useEffect } from "react";
import styles from "../styles/Calendar.module.css";
import {
  daysOfWeek,
  events,
  timeSlots,
  getLevelColor,
} from "../components/EventData";
import EventModal from "./EventModal";

const Calendar = () => {
  const [modalEvent, setModalEvent] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("bg");
  const [currentDay, setCurrentDay] = useState("Понеделник - 29");
  const [currentHour, setCurrentHour] = useState(getCurrentHour());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(getCurrentHour());
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  function getCurrentHour() {
    const now = new Date();
    const options = { hour: "numeric", minute: "numeric", hour12: false, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone};
    return now.toLocaleTimeString("en-US", options);
  }

  const openModal = (event) => {
    setModalEvent(event);
  };

  const closeModal = () => {
    setModalEvent(null);
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "bg" ? "en" : "bg");
  };

  const handleDayClick = (day) => {
    setCurrentDay(day);
  };

  const sortedEvents = events.sort((a, b) => {
    const timeA = timeSlots.indexOf(a.startTime);
    const timeB = timeSlots.indexOf(b.startTime);
    return timeA - timeB;
  });

  return (
    <div className={styles.calendar}>
      {modalEvent && <EventModal event={modalEvent} close={closeModal} />}
      <div className={styles.header}>
        <div>
          <button
            className={styles.changeLanguageButton}
            onClick={toggleLanguage}
          >
            {currentLanguage === "bg" ? "EN" : "BG"}
          </button>
        </div>
        <div className={styles.emptyCell}></div>
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className={`${styles.dayHeader} ${
              day === currentDay ? styles.currentDay : ""
            }`}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        {timeSlots.map((hour, index) => (
          <div key={index} className={styles.hourRow}>
            {!events.isExtra && <div className={styles.hourLabel}>{hour}</div>}
            {daysOfWeek.map((day, dayIndex) => {
              const eventsForHour = sortedEvents.filter(
                (e) =>
                  e.day === day &&
                  parseInt(e.startTime.split(":")[0]) ===
                    parseInt(hour.split(":")[0])
              );

              return (
                <div key={dayIndex} className={styles.dayCell}>
                  {eventsForHour.map((event, eventIndex) => (
                    <div
                      className={`${styles.eventBox} ${
                        event.startTime === currentHour &&
                        day === currentDay
                          ? styles.greenEventBox
                          : ""
                      }`}
                      onClick={() => openModal(event)}
                    >
                      <div className={styles.imageBox}>
                        <img
                          src={event.imageUrl}
                          alt=""
                          className={styles.eventImage}
                        />
                        <div>
                          <div className={styles.eventTitle}>
                            {event.teacher}
                          </div>
                          <div className={styles.eventHour}>
                            <div
                              className={`${styles.circle} ${
                                event.startTime === currentHour &&
                                day === currentDay
                                  ? styles.greenCircle
                                  : ""
                              }`}
                            ></div>
                            {event.startTime === currentHour &&
                            day === currentDay
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
                            className={`${getLevelColor(level)} ${
                              styles.levelBlock
                            }`}
                          >
                            <span>{level}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;