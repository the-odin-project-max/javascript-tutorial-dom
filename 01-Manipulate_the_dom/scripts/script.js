let red = document.createElement('p');
red.style.color = 'red';
red.textContent = 'Hey I’m red!';
document.body.appendChild(red);

let blue = document.createElement('h3');
blue.style.color = 'blue';
blue.textContent = 'I’m a blue h3!';
document.body.appendChild(blue);

let div = document.createElement('div');
div.style.border = '1px solid black';
div.style["background-color"] = "pink";

let h1 = document.createElement('h1');
h1.textContent = 'I’m in a div';
let p = document.createElement('p');
p.textContent = 'ME TOO!';

document.body.appendChild(div);
div.appendChild(h1);
div.appendChild(p);
