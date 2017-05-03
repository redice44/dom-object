import DOMObject from '/index.js';

function DOMArray (dom) {
  DOMObject.call(this);
  this.__dom__ = dom.map(function (d) {
    this.__build__(dom);
  }, this);
}

DOMArray.prototype = Object.create(DOMObject.prototype);
DOMArray.prototype.constructor = DOMArray;

DOMArray.prototype.get = function (query, options) {
  return this.__dom__.map(function (d) {
    return this.__get__(d, query, options);
  }, this);
};

export default DOMArray;
