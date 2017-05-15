/*
  This code is meant to be run in a browser. Compatability table to come. 
*/
import DOMOSingle from './single';
import DOMOArray from './array';

function DOMObject (dom) {
  this.__isArray__ = dom instanceof Array;
  if (this.__isArray__) {
    this.__domo__ = new DOMOArray(dom);
  } else {
    this.__domo__ = new DOMOSingle(dom);
  }
}

Object.defineProperty(DOMObject.prototype, 'id', {
  get: function() {
    return this.__domo__.id;
  }
});

Object.defineProperty(DOMObject.prototype, 'html', {
  get: function() {
    return this.__domo__.html;
  }
});

Object.defineProperty(DOMObject.prototype, 'classes', {
  get: function() {
    return this.__domo__.classes;
  }
});

Object.defineProperty(DOMObject.prototype, 'checked', {
  get: function() {
    return this.__domo__.checked;
  },
  set: function(value) {
    this.__domo__.checked = value;
  }
});

Object.defineProperty(DOMObject.prototype, 'disabled', {
  get: function() {
    return this.__domo__.disabled;
  },
  set: function(value) {
    this.__domo__.disabled = value;
  }
});

Object.defineProperty(DOMObject.prototype, 'value', {
  get: function() {
    return this.__domo__.value;
  },
  set: function(value) {
    this.__domo__.value = value;
  }
});

DOMObject.prototype.setStyle = function (styles, query, options) {
  return new DOMObject(this.__domo__.setStyle(styles, query, options));
};

/**
  @param {String[] | String} attrs - Array of attributes to return.
*/
DOMObject.prototype.getAttr = function (attrs, query, options) {
  return this.__domo__.getAttr(attrs, query, options);
};

/**
  @param {Object} attrs - Object of attributes to set.
*/
DOMObject.prototype.setAttr = function (attrs, query, options) {
  return new DOMObject(this.__domo__.setAttr(attrs, query, options));
};

DOMObject.prototype.toggleClasses = function (classes, query, options) {
  return this.toggleClass(classes, query, options);
};

DOMObject.prototype.toggleClass = function (classes, query, options) {
  return new DOMObject(this.__domo__.toggleClass(classes, query, options));
};

DOMObject.prototype.removeClasses = function (classes, query, options) {
  return this.removeClass(classes, query, options);
};

DOMObject.prototype.removeClass = function (classes, query, options) {
  return new DOMObject(this.__domo__.removeClass(classes, query, options));
};

DOMObject.prototype.addClasses = function (classes, query, options) {
  return this.addClass(classes, query, options);
};

DOMObject.prototype.addClass = function (classes, query, options) {
  return new DOMObject(this.__domo__.addClass(classes, query, options));
};

DOMObject.prototype.insertBefore = function (child, query, options) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Inserting Before ${query}.`);
  }

  child = this.__preprocessChild__(child);

  return new DOMObject(this.__domo__.insertBefore(child, query, options));
};

DOMObject.prototype.insertAfter = function (child, query, options) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Inserting After ${query}.`);
  }

  child = this.__preprocessChild__(child);

  return new DOMObject(this.__domo__.insertAfter(child, query, options));
};

DOMObject.prototype.remove = function (query, options) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Deleting ${query}.`);
  }

  return new DOMObject(this.__domo__.remove(query, options));
};

DOMObject.prototype.append = function (child, query, options) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Appending: ${query}.`);
  }

  child = this.__preprocessChild__(child);

  return new DOMObject(this.__domo__.append(child, query, options));
};


DOMObject.prototype.prepend = function (child, query, options) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Prepending: ${query}.`);
  }

  child = this.__preprocessChild__(child);

  return new DOMObject(this.__domo__.prepend(child, query, options));
};

DOMObject.prototype.get = function (query, options) {
  return new DOMObject(this.__domo__.get(query, options));
};

DOMObject.prototype.__preprocessChild__ = function (child) {
  if (child instanceof DOMObject) {
    child = child.html;
  } else if (typeof child === 'string') {
    return new DOMObject(child).html;
  }

  return child;
};

export default DOMObject;
