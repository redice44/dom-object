import DOMOBase from 'DOMObject/base';

function DOMOArray (dom) {
  DOMOBase.call(this);
  
  this.__dom__ = dom.map(function (d) {
    return this.__build__(d);
  }, this);

  if (process.env.NODE_ENV !== 'production') {
    console.log('DOMO Array');
  }
}

DOMOArray.prototype = Object.create(DOMOBase.prototype);
DOMOArray.prototype.constructor = DOMOArray;

DOMOArray.prototype.insertAfter = function (child, query, options) {
  return this.html().map(function (d) {
    return this.__insertAfter__(d, child, query, options);
  }, this);
};

DOMOArray.prototype.html = function () {
  return this.__dom__;
};

DOMOArray.prototype.get = function (query, options) {
  return this.html().map(function (d) {
    return this.__get__(d, query, options);
  }, this);
};

export default DOMOArray;
