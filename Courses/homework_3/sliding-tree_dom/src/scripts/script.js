const tree = document.querySelector('.tree');

for (let li of tree.querySelectorAll('li')){
    const span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}

tree.onclick = function (event) {
    if (event.target.tagName != 'SPAN') {
        return;
    }
    const childCont = event.target.parentNode.querySelector('ul');
    if (!childCont) return;
    childCont.hidden = !childCont.hidden;
}