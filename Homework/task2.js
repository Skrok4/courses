export function stringMerge(str1, str2, symbol)
{
    let a = str1.split(symbol)[0];
    let pos = str2.indexOf(symbol)
    let b = str2.substr(pos,)
    return a.concat(b);
}
