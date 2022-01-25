export function stringMerge(str1, str2, symbol)
{
    let before_symbol = str1.split(symbol)[0];
    let pos = str2.indexOf(symbol)
    let after_symbol = str2.substr(pos,)
    return before_symbol.concat(after_symbol);
}
