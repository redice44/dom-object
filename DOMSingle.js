import DOMObject from '/index.js';

function DOMSingle (dom) {
  DOMObject.call(this);
  this.__dom__ = this.__build__(dom);
}

DOMSingle.prototype = Object.create(DOMObject.prototype);
DOMSingle.prototype.constructor = DOMSingle;

export default DOMSingle;

