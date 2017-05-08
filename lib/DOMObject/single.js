import DOMOInterface from 'DOMObject/interface';

function DOMOSingle (dom) {
  DOMOInterface.call(this);
  this.__dom__ = this.__build__(dom);
}

DOMOSingle.prototype = Object.create(DOMOInterface.prototype);
DOMOSingle.prototype.constructor = DOMOSingle;

DOMOSingle.prototype.get = function (query, options) {
  return this.__get__(d, query, options);
};

export default DOMOSingle;
