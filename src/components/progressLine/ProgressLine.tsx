import React from 'react';
import styles from './Progress.module.css';

type ProgressType = {
  activeStep: number;
};

const ProgressLine = ({ activeStep }: ProgressType) => {
  const getStyle = (index: number) => {
    if (activeStep === index) return styles.lineBlack;
    return styles.lineGray;
  };

  return (
    <div className={styles.lineContainer}>
      <div className={getStyle(0)} />
      <div className={getStyle(1)} />
      <div className={getStyle(2)} />
    </div>
  );
};

export default ProgressLine;
