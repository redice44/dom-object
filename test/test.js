import Domo from 'DOMObject';

var results1 = new Domo(document.getElementById('results1'));
var results2 = new Domo(document.getElementById('results2'));

results1.append(new Domo('div > ul > li * 5').addClass('yo'));
results1.append(new Domo('{foo}'), 'ul > li').addClass('foo');
results1.append(new Domo('{bar}'), 'ul > li', { index: 2 }).addClass('bar');
results1.append(new Domo('{baz}'), 'ul > li', { index: [1, 2, 3] }).addClass('baz');
results1.prepend(new Domo('{Pre-}'), 'ul > li', { index: 0 }).addClass('pre');
results1.insertAfter(new Domo('li {Inserted After}'), 'ul > li', { index: [1, 4] }).addClass('after');
results1.insertBefore(new Domo('li {Inserted Before}'), 'ul > li', { index: [2, 6] }).addClass('before');
results1.addClass('red', 'ul > li', { index: 4 }).addClass('yellow');
results1.addClass(['blue', 'green'], 'ul > li', { index: 3 }).addClass('red');
results1.removeClass('red', 'ul > li', { index: 4 });
results1.toggleClass('foo', 'ul > li', { index: 0 });
results1.toggleClass(['foo', 'bar'], 'ul > li', { index: 1 }).toggleClass('foo');
results1.toggleClass(['blue', 'green'], 'ul > li', { index: 3 });
results1.setAttr({ id: 'foo' }, 'ul > li', { index: 3 }).setStyle({ color: 'blue' });
results1.setStyle({ color: 'red' }, 'ul > li', { index: 4}).setAttr({ id: 'bar'});
results1.append('ol > li {hi} * 3');


results2.append(new Domo('div > ul > li * 5'));
results2.get('ul > li').append(new Domo('{foo}'));
results2.get('ul > li', { index: 2 }).append(new Domo('{bar}'));
results2.get('ul > li', { index: [1, 2, 3] }).append(new Domo('{baz}')).addClass('baz');
results2.get('ul > li', { index: 0 }).prepend(new Domo('{Pre-}'));
results2.get('ul > li', { index: [1, 4] }).insertAfter(new Domo('li {Inserted After}'));
results2.get('ul > li', { index: [2, 6] }).insertBefore(new Domo('li {Inserted Before}'));
results2.get('ul > li', { index: 3 }).addClass(['blue', 'green', 'yellow']);
results2.get('ul > li', { index: 4 }).addClass('red').addClass('blue');
results2.get('ul > li', { index: 4 }).removeClass('red');
results2.get('ul > li', { index: 3 }).removeClass(['green', 'yellow']);
results2.get('ul > li', { index: 0 }).toggleClass('foo');
results2.get('ul > li', { index: 1 }).toggleClass(['foo', 'bar']).toggleClass('foo');
results2.get('ul > li', { index: 3 }).toggleClass(['blue', 'green']);
results2.get('ul > li', { index: 3 }).setStyle({ color: 'blue' }).setAttr({ id: 'foo' });
results2.get('ul > li', { index: 4 }).setAttr({ id: 'bar' }).setStyle({ color: 'red' });

console.log(results1.html);
console.log(results1.id);
console.log(results1.getAttr('id'));
console.log(results1.classes);
console.log(results1.get('ul > li').html);
console.log(results1.get('ul > li').id);
console.log(results1.get('ul > li').classes);

console.log(
results1.append('div#inputfoo > input * 5')
  .setAttr({ type: 'checkbox' }, 'input', { index: [0, 2, 4] })
  .setAttr({ checked: true }, '', { index: [0, 2] })
  .setAttr({ disabled: true }, '', { index: 0 })
);

results2.append('div > input * 5')
  .setAttr({ type: 'checkbox' }, 'input', { index: [0, 2, 4] })
  .get('', { index: [0, 2] }).checked = [true, false];

results2.get('div > input', { index: [0, 1, 2] }).disabled = [true, false, true];

results2.append('div#miscinput > input * 6').get('input').value = ['hello', 'world', 'this', 'is', 'a', 'test'];

results2.append('div > input * 5').get('input').value = 'foo';

results2.append('input * 3').value = 'bar';

console.log(
  results2.get('#miscinput > input').map(function (d) { return d.value })
);

console.log(
  results2.get('#miscinput > input', { index: 1 }).map(function (d) { return d.value })
);

console.log(
  results2.get('#miscinput > input', { index: [0, 2] }).map(function (d) { return d.value })
);

console.log(
  results2.map(function (d) { return d.value }, '#miscinput > input', { index: [0, 2] })
);

console.log(
  results2.map(function (d) { return d.html }, '#miscinput > input', { index: 2 })
);

console.log('Should be true');
console.log(Domo.isValid(results1));
console.log('Should be false');
console.log(Domo.isValid(null));
console.log(Domo.cast('div'));
