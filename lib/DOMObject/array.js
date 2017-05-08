import DOMOInterface from 'DOMObject/interface';

function DOMOArray (dom) {
  DOMOInterface.call(this);
  this.__dom__ = dom.map(function (d) {
    this.__build__(dom);
  }, this);
}

DOMOArray.prototype = Object.create(DOMOInterface.prototype);
DOMOArray.prototype.constructor = DOMOArray;

DOMOArray.prototype.get = function (query, options) {
  return this.__dom__.map(function (d) {
    return this.__get__(d, query, options);
  }, this);
};

export default DOMOArray;
