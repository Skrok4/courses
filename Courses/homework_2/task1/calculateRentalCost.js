export const calculateRentalCost = (quantityOfDays)=>{
  const priceForDay = 40;
  const discountMore2Days = 20;
  const discountMore6Days = 50;

  if (quantityOfDays < 0){
    return 'Sorry! Quantity of days can\'t be less than 1';
  }

  if (quantityOfDays < 3 ) {

    return priceForDay * quantityOfDays;
  } else if (quantityOfDays >= 3 && quantityOfDays < 7) {

    return priceForDay * quantityOfDays - discountMore2Days;
  } else if (quantityOfDays >= 7 ) {

    return priceForDay * quantityOfDays - discountMore6Days;
  } 
};
