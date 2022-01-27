export function stringMerge(str1, str2, symbol)
{
    const beforeSymbol = str1.split(symbol)[0];
    const pos = str2.indexOf(symbol)
    let afterSymbol = str2.substr(pos,)
    return beforeSymbol.concat(afterSymbol);
}
