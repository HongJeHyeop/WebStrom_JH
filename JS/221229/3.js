const div = document.getElementsByTagName('div').item(0);
console.log(div);

const span = document.body.children.item(1);
console.log(span);

const p = document.body.lastElementChild
console.log(p);

// querySelector는 요소를 찾았다면 그 요소 반환하고 끝
const select1 = document.querySelector('body > div');
// querySelectorAll은 해당되는 모든 요소를 반환함
const select2 = document.querySelectorAll('body > div');
console.log(select1);
console.log(select2);

document.getElementsByTagName('div').item(2).getElementsByTagName('input').item(0);
