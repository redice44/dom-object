import Domo from 'DOMObject';

// function heading (title, results) {
//   var h1 = document.createElement('h1');
//   h1.appendChild(document.createTextNode(title));
//   results.appendChild(h1);
// }

var results = new Domo(document.getElementById('results'));
console.log(results);
var node = new Domo('div > ul > li * 5');
var text = new Domo('p {foo}');
var text2 = new Domo('p {bar}');
console.log(node);
// heading('Creation String Single', results);
results.insertAfter(node);
// results.insertAfter(text, 'ul > li');
// results.insertAfter(text2, 'ul > li', { index: 2 });
// results.insertAfter(new Domo('p {baz}'), 'ul > li', { index: [1, 2, 3] });

results.get('ul > li').append(text);
results.get('ul > li', { index: 2 }).append(text2);
results.get('ul > li', { index: [1, 2, 3] }).append(new Domo('p {baz}'));

console.log(results.get('ul > li', { index: 2 }).remove());
results.remove('ul > li', { index: 2 });
// console.log(results);