const storeURL = 'https://fakestoreapi.com/products';

export const getData = async(url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};  

const sortData = async() =>{
  let unsortedList = [];

  try{
    unsortedList  = await getData(storeURL);
  } catch (error) {
    return error;
  }
  
  const sortedList = unsortedList.sort((less, more) => more.price - less.price);

  sortedList.sort((x, y) => {
    return x.category.localeCompare(y.category);
  });

  return sortedList;
};

sortData();
