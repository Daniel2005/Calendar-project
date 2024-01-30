import React from 'react';
import styles from '../styles/EventModal.module.css';

const EventModal = ({ event, close }) => {
  return (
    <div className={styles.modalBackDrop} onClick={close}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={close}>X</button>
        <h3>{event.title}</h3>
        <img src={event.imageUrl} alt="Event" />
        <p>Учител: {event.teacher}</p>
        <p>Час: {event.startTime} - {event.endTime}</p>
        <p>Имате {event.title} с {event.teacher}</p>
      </div>
    </div>
  );
};


export default EventModal;