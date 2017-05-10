import DOMOBase from 'DOMObject/base';

function DOMOSingle (dom) {
  DOMOBase.call(this);
  this.__dom__ = this.__build__(dom);

  if (process.env.NODE_ENV !== 'production') {
    console.log('DOMO Single');
  }
}

DOMOSingle.prototype = Object.create(DOMOBase.prototype);
DOMOSingle.prototype.constructor = DOMOSingle;

DOMOSingle.prototype.remove = function (query, options) {
  return this.__remove__(this.html(), query, options);
};

DOMOSingle.prototype.append = function (child, query, options) {
  return this.__append__(this.html(), child, query, options);
};

DOMOSingle.prototype.prepend = function (child, query, options) {
  return this.__prepend__(this.html(), child, query, options);
};

DOMOSingle.prototype.html = function () {
  return this.__dom__;
};

DOMOSingle.prototype.get = function (query, options) {
  return this.__get__(this.html(), query, options);
};

export default DOMOSingle;
