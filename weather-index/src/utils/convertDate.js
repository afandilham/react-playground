const convertDate = (date) => {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let result = new Date(date).getDay();
  return weekday[result];
};

export default convertDate;