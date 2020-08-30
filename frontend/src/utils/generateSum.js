const getNewData = function (data) {
  let indessx = 1;
  let newData = [];
  data.forEach((el) => {
    if (newData.findIndex((element) => element.month == el.month) != -1) {
      let curElement =
        newData[newData.findIndex((element) => element.month == el.month)];
      curElement.number = (
        parseInt(curElement.number) + parseInt(el.number)
      ).toString();
      delete curElement.date;
    } else {
      let newEl = el;
      newEl.indessx = indessx;
      newData.push(newEl);
      indessx++;
    }
  });
  return newData;
};

export default getNewData;
