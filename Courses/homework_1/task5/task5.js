export function getTime(str){ 
    const listIdx = [];
    let lastIndex = -1;
  
    while ((lastIndex = str.indexOf(':', lastIndex + 1)) !== -1) {
      listIdx.push(lastIndex);
    }
  
    for (let index = 0; index < listIdx.length; index++){
      const hours = str.substr(listIdx[index]-2, 2);
      const minutes = str.substr(listIdx[index]+1, 2);
  
      if (parseInt(hours) < 0 || parseInt(hours) >= 24) {
        continue;
      } else if (parseInt(minutes) < 0 || parseInt(minutes) >= 60) {
        continue;
      }
  
      return `${hours}:${minutes}`;
    }
   
    return '';
  }
  
  
  export function getTimeReg(timeStr){ 
    const regPattern = /((\b[0-1][0-9]|2[0-3])+:[0-5][0-9]\b)(,|$)/g;
    const regex = timeStr.match(regPattern);
    
    return regex !== null ? regex[0].replace(/,/, '') : '';
  }