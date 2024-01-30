import React from "react";
import styles from "../../styles/Calendar.module.css";
import LanguageButton from "./LanguageButton";
import HeaderCells from "./HeaderCells";

const CalendarHeader = () => {
  return (
    <div className={styles.header}>
      <LanguageButton />
      <div className={styles.emptyCell}></div>
      <HeaderCells />
    </div>
  );
};

export default CalendarHeader;