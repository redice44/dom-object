import Domo from 'DOMObject';

// function heading (title, results) {
//   var h1 = document.createElement('h1');
//   h1.appendChild(document.createTextNode(title));
//   results.appendChild(h1);
// }

var results = new Domo(document.getElementById('results'));
console.log(results);
var node = new Domo('div > ul > li * 5');
var text = new Domo('{foo}');
var text2 = new Domo('{bar}');
console.log(node);
// heading('Creation String Single', results);
results.append(node);
// results.append(text, 'ul > li');
// results.append(text2, 'ul > li', { index: 2 });
// results.append(new Domo('{baz}'), 'ul > li', { index: [1, 2, 3] });

results.get('ul > li').append(text);
results.get('ul > li', { index: 2 }).append(text2);
results.get('ul > li', { index: [1, 2, 3] }).append(new Domo('{baz}'));
results.get('ul > li', { index: 0 }).prepend(new Domo('{Pre-}'));
results.get('ul > li', { index: [1, 4] }).insertAfter(new Domo('li {Inserted After}'));
results.get('ul > li', { index: [2, 6] }).insertBefore(new Domo('li {Inserted Before}'));