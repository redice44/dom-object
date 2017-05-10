import Domo from 'DOMObject';

// function heading (title, results) {
//   var h1 = document.createElement('h1');
//   h1.appendChild(document.createTextNode(title));
//   results.appendChild(h1);
// }

var results1 = new Domo(document.getElementById('results1'));
var results2 = new Domo(document.getElementById('results2'));

var node1 = new Domo('div > ul > li * 5');
var node1 = new Domo('div > ul > li * 5');
var text = new Domo('{foo}');
var text2 = new Domo('{bar}');

// heading('Creation String Single', results);
results1.append(new Domo('div > ul > li * 5'));
results1.append(new Domo('{foo}'), 'ul > li').addClass('foo');
results1.append(new Domo('{bar}'), 'ul > li', { index: 2 }).addClass('bar');
results1.append(new Domo('{baz}'), 'ul > li', { index: [1, 2, 3] }).addClass('baz');
results1.prepend(new Domo('{Pre-}'), 'ul > li', { index: 0 }).addClass('pre');
results1.insertAfter(new Domo('li {Inserted After}'), 'ul > li', { index: [1, 4] }).addClass('after');
results1.insertBefore(new Domo('li {Inserted Before}'), 'ul > li', { index: [2, 6] }).addClass('before');
results1.addClass('red', 'ul > li', { index: 4 });
results1.addClass(['blue', 'green'], 'ul > li', { index: 3 }).addClass('red');

results2.append(new Domo('div > ul > li * 5'));
results2.get('ul > li').append(new Domo('{foo}'));
results2.get('ul > li', { index: 2 }).append(new Domo('{bar}'));
results2.get('ul > li', { index: [1, 2, 3] }).append(new Domo('{baz}'));
results2.get('ul > li', { index: 0 }).prepend(new Domo('{Pre-}'));
results2.get('ul > li', { index: [1, 4] }).insertAfter(new Domo('li {Inserted After}'));
results2.get('ul > li', { index: [2, 6] }).insertBefore(new Domo('li {Inserted Before}'));
results2.get('ul > li', { index: 4 }).addClass('red');
results2.get('ul > li', { index: 3 }).addClass(['blue', 'green']);

