
 let position = 0;
 const sliderToScroll = 1;
 const container = document.querySelector('.slider-container');
 const track = document.querySelector('.slider-track');
 const btnPrev = document.querySelector('.arrow-left');
 const btnNext = document.querySelector('.arrow-right');
 const items = document.querySelectorAll('.slider-item');
 const itemCount = items.length;
 const itemWidth = container.clientWidth;
 const movePosition = sliderToScroll * itemWidth;

 const init = () => {
 items.forEach((item) => {
     item.style.minWidth = `${itemWidth}px`;
 });

 btnPrev.addEventListener('click', ()=>{
    const itemsLeft =  Math.abs(position) / itemWidth;
    if(itemsLeft >= sliderToScroll){
        position += movePosition;
    } else{
        position += itemsLeft * itemWidth;
    }
    setPosition();
    checkBtns();
});

btnNext.addEventListener('click', ()=>{
    const itemsLeft =  itemCount - (Math.abs(position) + itemWidth) / itemWidth;
    if(itemsLeft >= sliderToScroll){
        position -= movePosition;
    } else{
        position -= itemsLeft * itemWidth;
    }

    setPosition();
    checkBtns();
});

 const setPosition = () =>{
     track.style.transform = `translateX(${position}px)`;
 };

 const checkBtns = () => {
     position === 0 ? btnPrev.style.visibility = "hidden" : btnPrev.style.visibility = "visible";
     position <= - (itemCount - 1) * itemWidth ? btnNext.style.visibility = "hidden" :  btnNext.style.visibility = "visible";
 };

 checkBtns();
}

document.addEventListener('DOMContentLoaded', init);
