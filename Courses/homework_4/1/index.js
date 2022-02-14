const storeURL = 'https://fakestoreapi.com/products';

const store = () =>{
  return fetch( storeURL).then(response => {
    return response.json();
  })
};

const sortByPrice = () =>{
let priceList = [];
let sortedList = [];
  store()
.then(
  data =>{
    for (const [key, value] of Object.entries(data)){
      priceList.push(value.price)
    }
    priceList.sort((less, more) => more - less);
    
    priceList.forEach(element => {
    for(let i = 0; i < data.length; i++){
      if(data[i].price === element && data[i] != sortedList){
        sortedList.push(data[i])
      }
    }
    [...sortedList]=new Set(sortedList)
    })
   return sortedList;
})
.catch((error) => {
  return error;
});
}

// const sortByCategory = () =>{
// const sortedByAlphabet = [];
// store()
// .then(
//   data =>{
//   for(let i = 0; i < data.length; i++){
//   const sortArray= (x, y)=>{
//     for(let i = 0; i < data.length; i++){
//       console.log(data[i].category.localeCompare(data.category))
//       return data.category.localeCompare(data.category);
//     }
//   }
//   sortedByAlphabet = data.sort(sortArray)
//   console.log(sortedByAlphabet);
// }})
// .catch((error) => {
//   console.log(error)
// });
// }

sortByPrice()
// sortByCategory()