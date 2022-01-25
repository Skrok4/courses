export function getTime(str){ 
    const listIdx = [];
    let lastIndex = -1
    while ((lastIndex = str.indexOf(':', lastIndex + 1)) !== -1) {
      listIdx.push(lastIndex)
    }
    for (let index = 0; index < listIdx.length; index++){
    let hours = str.substr(listIdx[index]-2, 2)
    let minutes = str.substr(listIdx[index]+1, 2)
    if (parseInt(hours) < 0 || parseInt(hours) >= 24) {
        continue;
    }
    else if (parseInt(minutes) < 0 || parseInt(minutes) >= 60) {
        continue;
    }
    return `${hours}:${minutes}`;
} 
return ""
}
