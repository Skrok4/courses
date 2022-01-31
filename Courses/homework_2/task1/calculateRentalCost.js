export const calculateRentalCost = (quantityOfDays)=>{
  const priceForDay = 40;

  if (quantityOfDays < 0){
    return 'Sorry! Quantity of days can\'t be less than 1';
  }

  if (quantityOfDays < 3 ) {

    return priceForDay * quantityOfDays;
  } else if (quantityOfDays >= 3 && quantityOfDays < 7) {

    return priceForDay * quantityOfDays - 20;
  } else if (quantityOfDays >= 7 ) {

    return priceForDay * quantityOfDays - 50;
  } 
};