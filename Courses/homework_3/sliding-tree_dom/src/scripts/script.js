const tree = document.querySelector('.tree');

const elements = document.querySelectorAll('li');
const classToAdd = 'active';
elements.forEach(element => element.addEventListener('mouseenter', ()=>{
  element.classList.add(classToAdd);
}));

elements.forEach(element => element.addEventListener('mouseleave', ()=>{
  element.classList.remove(classToAdd);
}));

tree.addEventListener('click', (event) => {
  if(event.target.tagName != 'LI') {return;}
  if(event.target.children.length > 0) {event.target.children[0].hidden = !event.target.children[0].hidden;}
});

