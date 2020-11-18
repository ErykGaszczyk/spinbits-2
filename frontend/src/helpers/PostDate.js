import React from 'react';

const Time = (date) => {
  const currentDate = new Date(date);
  const year = currentDate.getFullYear();
  const monthsNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthsNames[currentDate.getMonth()];
  const day = currentDate.getDate();

  return <>{`${day} ${month} ${year}`}</>;
};

Time.propTypes = {};

Time.defaultProps = {};

export default Time;
