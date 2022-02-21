import { getData } from '../getData/main.js';

const storeURL = 'https://fakestoreapi.com/products';

export const sortData = async() =>{

  const unsortedList  = await getData(storeURL);
  
  const sortedList = unsortedList.sort((less, more) => more.price - less.price);

  sortedList.sort((x, y) => {
    return x.category.localeCompare(y.category);
  });

  return sortedList;
};

//(async() => await sortData())();
