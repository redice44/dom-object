/*
  This code is meant to be run in a browser. Compatability table to come. 
*/
import DOMOSingle from './single';
import DOMOArray from './array';

function DOMObject (dom) {
  if (!dom) {
    this.__domo__ = null;
  } else {
    this.__isArray__ = dom instanceof Array;
    if (this.__isArray__) {
      this.__domo__ = new DOMOArray(dom);
    } else {
      this.__domo__ = new DOMOSingle(dom);
    }
  }
}

Object.defineProperty(DOMObject.prototype, 'id', {
  get: function() {
    if (this.__isEmpty__()) {
      return null;
    }

    return this.__domo__.id;
  }
});

Object.defineProperty(DOMObject.prototype, 'html', {
  get: function() {
    if (this.__isEmpty__()) {
      return null;
    }

    return this.__domo__.html;
  }
});

Object.defineProperty(DOMObject.prototype, 'classes', {
  get: function() {
    if (this.__isEmpty__()) {
      return null;
    }

    return this.__domo__.classes;
  }
});

Object.defineProperty(DOMObject.prototype, 'checked', {
  get: function() {
    if (this.__isEmpty__()) {
      return null;
    }

    return this.__domo__.checked;
  },
  set: function(value) {
    if (!this.__isEmpty__()) {
      this.__domo__.checked = value;
    }
  }
});

Object.defineProperty(DOMObject.prototype, 'disabled', {
  get: function() {
    if (this.__isEmpty__()) {
      return null;
    }

    return this.__domo__.disabled;
  },
  set: function(value) {
    if (!this.__isEmpty__()) {
      this.__domo__.disabled = value;
    }
  }
});

Object.defineProperty(DOMObject.prototype, 'value', {
  get: function() {
    if (this.__isEmpty__()) {
      return null;
    }

    return this.__domo__.value;
  },
  set: function(value) {
    if (!this.__isEmpty__()) {
      this.__domo__.value = value;
    }
  }
});

Object.defineProperty(DOMObject.prototype, 'isEmpty', {
  get: function() {
    return this.__isEmpty__();
  }
});

DOMObject.prototype.filter = function (fn, query, options) {
  if (this.__isEmpty__()) {
    return [];
  }

  var result = this.__domo__.filter(fn, query, options);

  if (!(result instanceof Array)) {
    result = [result];
  } else {
    result = result.filter(function (d) {
      return d;
    });
  }

  return result;
};

DOMObject.prototype.forEach = function (fn, query, options) {
  if (this.__isEmpty__()) {
    return null;
  }

  this.__domo__.forEach(fn, query, options);
};

DOMObject.prototype.map = function (fn, query, options) {
  if (this.__isEmpty__()) {
    return [];
  }

  var result = this.__domo__.map(fn, query, options);

  if (!(result instanceof Array)) {
    result = [result];
  }

  return result;
};

DOMObject.prototype.setStyle = function (styles, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  return new DOMObject(this.__domo__.setStyle(styles, query, options));
};

/**
  @param {String[] | String} attrs - Array of attributes to return.
*/
DOMObject.prototype.getAttr = function (attrs, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  return this.__domo__.getAttr(attrs, query, options);
};

/**
  @param {Object} attrs - Object of attributes to set.
*/
DOMObject.prototype.setAttr = function (attrs, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  return new DOMObject(this.__domo__.setAttr(attrs, query, options));
};

DOMObject.prototype.toggleClasses = function (classes, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  return this.toggleClass(classes, query, options);
};

DOMObject.prototype.toggleClass = function (classes, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  return new DOMObject(this.__domo__.toggleClass(classes, query, options));
};

DOMObject.prototype.removeClasses = function (classes, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  return this.removeClass(classes, query, options);
};

DOMObject.prototype.removeClass = function (classes, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  return new DOMObject(this.__domo__.removeClass(classes, query, options));
};

DOMObject.prototype.addClasses = function (classes, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  return this.addClass(classes, query, options);
};

DOMObject.prototype.addClass = function (classes, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  return new DOMObject(this.__domo__.addClass(classes, query, options));
};

DOMObject.prototype.insertBefore = function (child, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  child = this.__preprocessChild__(child);

  return new DOMObject(this.__domo__.insertBefore(child, query, options));
};

DOMObject.prototype.insertAfter = function (child, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  child = this.__preprocessChild__(child);

  return new DOMObject(this.__domo__.insertAfter(child, query, options));
};

DOMObject.prototype.remove = function (query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  return new DOMObject(this.__domo__.remove(query, options));
};

DOMObject.prototype.append = function (child, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  child = this.__preprocessChild__(child);

  return new DOMObject(this.__domo__.append(child, query, options));
};


DOMObject.prototype.prepend = function (child, query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

  child = this.__preprocessChild__(child);

  return new DOMObject(this.__domo__.prepend(child, query, options));
};

DOMObject.prototype.get = function (query, options) {
  if (this.__isEmpty__()) {
    return new DOMObject();
  }

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

DOMObject.prototype.__isEmpty__ = function () {
  return !this.__domo__;
};

/* Static Methods */

DOMObject.isA = function(domo) {
  return domo instanceof DOMObject;
};

DOMObject.cast = function (domo) {
  if (domo instanceof DOMObject) {
    return domo;
  }

  return new DOMObject(domo);
};

export default DOMObject;
