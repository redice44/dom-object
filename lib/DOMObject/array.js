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

DOMOArray.prototype.insertBefore = function (target, query, options) {
  return this.html().map(function (d) {
    return this.__insertBefore__(d, target.cloneNode(true), query, options);
  }, this);
};

DOMOArray.prototype.insertAfter = function (target, query, options) {
  return this.html().map(function (d) {
    return this.__insertAfter__(d, target.cloneNode(true), query, options);
  }, this);
};

DOMOArray.prototype.append = function (child, query, options) {
  return this.html().map(function (d) {
    return this.__append__(d, child.cloneNode(true), query, options);
  }, this);
};

DOMOArray.prototype.prepend = function (child, query, options) {
  return this.html().map(function (d) {
    return this.__prepend__(d, child.cloneNode(true), query, options);
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
