import React from 'react';

const Checkbox = ({ type }: { type: 'correct' | 'incorrect' | 'default' }) => {
  const getColor = () => {
    if (type === 'default') return '#D9D9D9';
    if (type === 'incorrect') return '#FB0909';
    if (type === 'correct') return '#42FF00';
    return '#D9D9D9';
  };

  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="7.5" r="7.5" fill={getColor()} />
    </svg>
  );
};

export default Checkbox;
