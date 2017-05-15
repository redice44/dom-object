import DOMOBase from './base';

function DOMOSingle (dom) {
  DOMOBase.call(this);
  this.__dom__ = this.__build__(dom);

  if (process.env.NODE_ENV !== 'production') {
    console.log('DOMO Single');
  }
}

DOMOSingle.prototype = Object.create(DOMOBase.prototype);
DOMOSingle.prototype.constructor = DOMOSingle;

Object.defineProperty(DOMOSingle.prototype, 'id', {
  get: function() {
    return this.html.id;
  }
});

Object.defineProperty(DOMOSingle.prototype, 'html', {
  get: function() {
    return this.__dom__;
  }
});

Object.defineProperty(DOMOSingle.prototype, 'classes', {
  get: function() {
    return this.html.getAttribute('class');
  }
});

DOMOSingle.prototype.setStyle = function (styles, query, options) {
  return this.__setStyle__(this.html, styles, query, options);
};

DOMOSingle.prototype.getAttr = function (attrs, query, options) {
  return this.__getAttr__(this.html, attrs, query, options);
};

DOMOSingle.prototype.setAttr = function (attrs, query, options) {
  return this.__setAttr__(this.html, attrs, query, options);
};

DOMOSingle.prototype.toggleClass = function (classes, query, options) {
  return this.__toggleClass__(this.html, classes, query, options);
};

DOMOSingle.prototype.removeClass = function (classes, query, options) {
  return this.__removeClass__(this.html, classes, query, options);
};

DOMOSingle.prototype.addClass = function (classes, query, options) {
  return this.__addClass__(this.html, classes, query, options);
};

DOMOSingle.prototype.insertBefore = function (target, query, options) {
  return this.__insertBefore__(this.html, target, query, options);
};

DOMOSingle.prototype.insertAfter = function (target, query, options) {
  return this.__insertAfter__(this.html, target, query, options);
};

DOMOSingle.prototype.remove = function (query, options) {
  return this.__remove__(this.html, query, options);
};

DOMOSingle.prototype.append = function (child, query, options) {
  return this.__append__(this.html, child, query, options);
};

DOMOSingle.prototype.prepend = function (child, query, options) {
  return this.__prepend__(this.html, child, query, options);
};

DOMOSingle.prototype.get = function (query, options) {
  return this.__get__(this.html, query, options);
};

export default DOMOSingle;
