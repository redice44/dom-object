import DOMOBase from './base';

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

Object.defineProperty(DOMOArray.prototype, 'id', {
  get: function() {
    return this.html.map(function (dom) {
      return dom.id;
    });
  }
});

Object.defineProperty(DOMOArray.prototype, 'html', {
  get: function() {
    return this.__dom__;
  }
});

Object.defineProperty(DOMOArray.prototype, 'classes', {
  get: function() {
    return this.html.map(function (dom) {
      return dom.getAttribute('class');
    });
  }
});

Object.defineProperty(DOMOArray.prototype, 'checked', {
  get: function() {
    return this.html.map(function (dom) {
      return dom.checked;
    });
  },
  set: function(value) {
    if (value instanceof Array) {
      value.forEach(function (v, i) {
        this.html[i].checked = !!v;
      }, this);
    } else {
      value = !!value;

      this.html.forEach(function (dom) {
        dom.checked = value;
      });
    }
  }
});

Object.defineProperty(DOMOArray.prototype, 'disabled', {
  get: function() {
    return this.html.map(function (dom) {
      return dom.disabled;
    });
  },
  set: function(value) {
    if (value instanceof Array) {
      value.forEach(function (v, i) {
        this.html[i].disabled = !!v;
      }, this);
    } else {
      value = !!value;

      this.html.forEach(function (dom) {
        dom.disabled = value;
      });
    }
  }
});

Object.defineProperty(DOMOArray.prototype, 'value', {
  get: function() {
    return this.html.map(function (dom) {
      return dom.value;
    });
  },
  set: function(value) {
    if (value instanceof Array) {
      value.forEach(function (v, i) {
        this.html[i].value = v;
      }, this);
    } else {
      this.html.forEach(function (dom) {
        dom.value = value;
      });
    }
  }
});

DOMOArray.prototype.map = function (fn, query, options) {
  if (!query && options) {
    return this.__map__(this.html, fn, query, options);
  }
  
  return this.html.map(function (d) {
    return this.__map__(d, fn, query, options);
  }, this);
};

DOMOArray.prototype.setStyle = function (styles, query, options) {
  if (!query && options) {
    return this.__setStyle__(this.html, styles, query, options);
  }

  return this.html.map(function (d) {
    return this.__setStyle__(d, styles, query, options);
  }, this);
};

DOMOArray.prototype.getAttr = function (attrs, query, options) {
  if (!query && options) {
    return this.__getAttr__(this.html, attrs, query, options);
  }

  return this.html.map(function (d) {
    return this.__getAttr__(d, attrs, query, options);
  }, this);
};

DOMOArray.prototype.setAttr = function (attrs, query, options) {
  if (!query && options) {
    return this.__setAttr__(this.html, attrs, query, options);
  }

  return this.html.map(function (d) {
    return this.__setAttr__(d, attrs, query, options);
  }, this);
};

DOMOArray.prototype.toggleClass = function (classes, query, options) {
  if (!query && options) {
    return this.__toggleClass__(this.html, classes, query, options);
  }

  return this.html.map(function (d) {
    return this.__toggleClass__(d, classes, query, options);
  }, this);
};

DOMOArray.prototype.removeClass = function (classes, query, options) {
  if (!query && options) {
    return this.__removeClass__(this.html, classes, query, options);
  }

  return this.html.map(function (d) {
    return this.__removeClass__(d, classes, query, options);
  }, this);
};

DOMOArray.prototype.addClass = function (classes, query, options) {
  if (!query && options) {
    return this.__addClass__(this.html, classes, query, options);
  }

  return this.html.map(function (d) {
    return this.__addClass__(d, classes, query, options);
  }, this);
};

DOMOArray.prototype.insertBefore = function (target, query, options) {
  if (!query && options) {
    return this.__insertBefore__(this.html, target, query, options);
  }

  return this.html.map(function (d) {
    return this.__insertBefore__(d, target.cloneNode(true), query, options);
  }, this);
};

DOMOArray.prototype.insertAfter = function (target, query, options) {
  if (!query && options) {
    return this.__insertAfter__(this.html, target, query, options);
  }

  return this.html.map(function (d) {
    return this.__insertAfter__(d, target.cloneNode(true), query, options);
  }, this);
};

DOMOArray.prototype.append = function (child, query, options) {
  if (!query && options) {
    return this.__append__(this.html, child, query, options);
  }

  return this.html.map(function (d) {
    return this.__append__(d, child.cloneNode(true), query, options);
  }, this);
};

DOMOArray.prototype.prepend = function (child, query, options) {
  if (!query && options) {
    return this.__prepend__(this.html, child, query, options);
  }

  return this.html.map(function (d) {
    return this.__prepend__(d, child.cloneNode(true), query, options);
  }, this);
};

DOMOArray.prototype.get = function (query, options) {
  if (!query && options) {
    return this.__get__(this.html, query, options);
  }

  return this.html.map(function (d) {
    return this.__get__(d, query, options);
  }, this);
};

export default DOMOArray;
