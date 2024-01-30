import React, { useState } from "react";
import styles from "../../styles/Calendar.module.css";

const LanguageButton = ({}) => {
  const [currentLanguage, setCurrentLanguage] = useState("bg");
  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "bg" ? "en" : "bg");
  };

  return (
    <div>
      <button
        className={styles.changeLanguageButton}
        onClick={toggleLanguage}
      >
        {currentLanguage === "bg" ? "EN" : "BG"}
      </button>
    </div>
  );
};

export default LanguageButton;