export const createUrl = (template, params)=>{
  let url = template;
  const keyArray = template.match(/(?<=\{).+?(?=\})/gi);

  for (let i = 0; i < keyArray.length; i++) {
    if (Object.keys(params).includes(keyArray[i])) {
      url = url.replace(`{${keyArray[i]}}`, params[`${keyArray[i]}`]); 
    }
    url = url.replace(`{${keyArray[i]}}`, 'undefined');
  }

  return url;
};
