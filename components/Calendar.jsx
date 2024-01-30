import React, { useState, useEffect } from "react";
import styles from "../styles/Calendar.module.css";
import Modal from "./Modal";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import CalendarBody from "./CalendarBody/CalendarBody";
import { Provider } from "./Context";

const Calendar = () => {
  const [modalData, setModalData] = useState(null);

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
    const options = { hour: "numeric", minute: "numeric", hour12: false, 
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone};
    return now.toLocaleTimeString("en-US", options);
  }
  const openModal = (data) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className={styles.calendar}>
      <Provider value={{currentDay, setCurrentDay, currentHour, 
        setCurrentHour, openModal, closeModal, modalData}} >
        {modalData && <Modal />}
        <CalendarHeader />
        <CalendarBody />
      </Provider>
    </div>
  );
};

export default Calendar;