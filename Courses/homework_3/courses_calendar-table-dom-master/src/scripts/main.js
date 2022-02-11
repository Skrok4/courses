'use strict';

const calendarTable = (year, month, element) =>{
  const mon = month - 1;
  const receivedDate = new Date(year, mon);
  
  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  for (let index = 0; index < getDay(receivedDate); index ++) {
    table += '<td></td>';
  }

  while (receivedDate.getMonth() == mon) {
    table += '<td>' + receivedDate.getDate() + '</td>';

    if (getDay(receivedDate) % 7 === 6) {
      table += '</tr><tr>';
    }
    receivedDate.setDate(receivedDate.getDate() + 1);
  }

  if (getDay(receivedDate) !== 0) {
    for (let i = getDay(receivedDate); i < 7; i++) {
      table += '<td></td>';
    }
  }
  table += '</tr></table>';
  element.innerHTML = table;

  
};

const getDay = (date)=> {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  } 

  return day - 1;
};

calendarTable(2019, 10, document.getElementById('calendar'));
