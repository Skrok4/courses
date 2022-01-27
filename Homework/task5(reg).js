export function getTimeReg(timeStr){ 
  const regPattern = /((\b[0-1][0-9]|2[0-3])+:[0-5][0-9]\b)(,|$)/g;
  const regex = timeStr.match(regPattern);
  
  return regex !== null ? regex[0].replace(/,/, '') : '';
}
