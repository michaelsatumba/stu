// alert('hello');

let p = document.getElementById('p1');

let p2 = document.getElementById('p2');

// p.innerHTML = 'change';

// const array1 = [1, 25, 3];

// function add1() {
// 	x + 1;
// }

// const length1 = array1.length;

// let i = 0;

// while (i < array1.length) {
// 	x = array1[i];
// 	x = x + 1;
// 	i++;
// 	console.log(x);
// }

// p.innerHTML = array1[1];
var zero = 'cero';
var numbres = 'uno dos tres quatro cinco seis seite ocho nueve';

const SPACE = ' '; // space;
var numbresArray = numbres.split(SPACE);
numbresArray.unshift(zero);
p.innerHTML = numbresArray;

let number = prompt('Please enter a number', '1');

if (number != null) {
	n = numbresArray[number];
	document.getElementById('demo').innerText = n;
}
