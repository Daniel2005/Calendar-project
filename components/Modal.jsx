import React, { useContext } from 'react';
import styles from '../styles/Modal.module.css';
import Context from './Context';

const Modal = () => {
  const { closeModal, modalData } = useContext(Context);

  return (
    <div className={styles.modalBackDrop} onClick={closeModal}>
      <div className={styles.modalContent} onClick={e => 
        e.stopPropagation()}>
        <button className={styles.closeButton} onClick= 
        {closeModal}>X</button>
        <h3>{modalData.title}</h3>
        <img src={modalData.imageUrl} alt="Event" />
        <p>Учител: {modalData.teacher}</p>
        <p>Час: {modalData.startTime} - {modalData.endTime}</p>
        <p>Имате {modalData.title} с {modalData.teacher}</p>
      </div>
    </div>
  );
};


export default Modal;