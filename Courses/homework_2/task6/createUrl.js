export const createUrl = (template, params)=>{
  const url = template.substr(0,4).split(' ');

  for (const [key, value] of Object.entries(params)) {
    if (template.includes('{' + key + '}')){
      url.push('/' + value);
    } else{
      url.push('/undefined');
    }
  }

  return url.join('');
};