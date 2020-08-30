let monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const convertNumberToMonth = (number) => {
  if (number === undefined) return;
  return monthNames[number];
};

module.exports = convertNumberToMonth;
