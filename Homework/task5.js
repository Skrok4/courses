export function getTime(str){ 
    let listIdx = []
    let lastIndex = -1
    while ((lastIndex = str.indexOf(':', lastIndex + 1)) !== -1) {
      listIdx.push(lastIndex)
    }
    for (let index = 0; index < listIdx.length; index++){
    let left = str.substr(listIdx[index]-2, 2)
    let right = str.substr(listIdx[index]+1, 2)
    if ( parseInt(left) < 0 || parseInt(left) >= 24) {
        continue;
    }
    else if (parseInt(right) < 0 || parseInt(right) >= 60) {
        continue;
    }
    return `${left}:${right}`;
} 
return ""
}
