const storeURL = 'https://fakestoreapi.com/products';

const store = () =>{
  return fetch( storeURL).then(response => {
    return response.json();
  });
};

const sortReceived = () =>{
  const priceList = [];
  let sortedList = [];
  const categoryList  = [];
  let sortedByAlphabet = [];

  store()
    .then(
      data =>{
        for (const [, value] of Object.entries(data)){
          priceList.push(value.price);
        }
        priceList.sort((less, more) => more - less);
    
        priceList.forEach(element => {
          for(let i = 0; i < data.length; i++){
            if(data[i].price === element && data[i] != sortedList){
              sortedList.push(data[i]);
            }
          }
          [...sortedList] = new Set(sortedList);
        });
        
        for (const [, value] of Object.entries(data)){
          categoryList.push(value.category);
        }
        categoryList.sort();
        
        categoryList.forEach(element => {
          for(let i = 0; i < sortedList.length; i++){
            if(sortedList[i].category === element && sortedList[i] != sortedByAlphabet){
              sortedByAlphabet.push(sortedList[i]);
            }
          }
          [...sortedByAlphabet ] = new Set(sortedByAlphabet );
        });

        return sortedByAlphabet;
      })
    .catch((error) => {
      return error;
    });
};

sortReceived();
