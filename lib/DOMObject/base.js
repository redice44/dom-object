import EmmetParser from 'emmet-parser';

function DOMOBase () {
  this.__document__ = document;
  this.__parser__ = new DOMParser();
}

DOMOBase.prototype.__removeClass__ = function (dom, classes, query, options) {
  var apply = function (dom, classes) {
    if (classes instanceof Array) {
      classes.forEach(function (c) {
        if (dom.classList && dom.classList.add) {
          dom.classList.remove(c);
        }
      });
    } else {
      if (dom.classList && dom.classList.add) {
        dom.classList.remove(classes);
      }
    }
    
    return dom;
  };

  return this.__getApply__(apply, dom, classes, query, options);
};

DOMOBase.prototype.__addClass__ = function (dom, classes, query, options) {
  var apply = function (dom, classes) {
    if (classes instanceof Array) {
      classes.forEach(function (c) {
        if (dom.classList && dom.classList.add) {
          dom.classList.add(c);
        }
      });
    } else {
      if (dom.classList && dom.classList.add) {
        dom.classList.add(classes);
      }
    }
    
    return dom;
  };

  return this.__getApply__(apply, dom, classes, query, options);
};

DOMOBase.prototype.__remove__ = function (dom, query, options) {
  var apply = function (element) {
    if (!element.parentElement) {
      throw new Error ('Cannot remove root node.');
    }

    var removed = element.cloneNode(true);
    element.remove();
    return removed;
  };

  return this.__getApply__(apply, sibling, null, query, options);
};


DOMOBase.prototype.__insertBefore__ = function (sibling, target, query, options) {
  var apply = function (sibling, target) {
    if (!sibling.parentElement) {
      throw new Error (`Sibling requires a parent node.`);
    }

    sibling.parentElement.insertBefore(target, sibling.previousSibling);

    return target;
  };

  return this.__getApply__(apply, sibling, target, query, options);
};


DOMOBase.prototype.__insertAfter__ = function (sibling, target, query, options) {
  var apply = function (sibling, target) {
    if (!sibling.parentElement) {
      throw new Error (`Sibling requires a parent node.`);
    }

    sibling.parentElement.insertBefore(target, sibling.nextSibling);

    return target;
  };

  return this.__getApply__(apply, sibling, target, query, options);
};

DOMOBase.prototype.__append__ = function (parent, child, query, options) {
  var apply = function (parent, child) {
    parent.appendChild(child);

    return child;
  };
  
  return this.__getApply__(apply, parent, child, query, options);
};

DOMOBase.prototype.__prepend__ = function (parent, child, query, options) {
  var apply = function (parent, child) {
    parent.insertBefore(child, parent.firstChild);

    return child;
  };

  return this.__getApply__(apply, parent, child, query, options);
};

DOMOBase.prototype.__getApply__ = function (action, parent, child, query, options) {
  if (!query) {
    return action(parent, child);
  }

  var target = this.__get__(parent, query, options);

  if (!target) {
    return null;
  }

  if (target instanceof Array) {
    return target.map(function (d) {
      return action(d, child.cloneNode(true));
    }, this);
  }

  return action(target, child);
};

/**
  Query the DOMObject for the node.
  
  @param {String} query - The CSS Selector query string
  @param {Object} options - Optional options are as follows
    {Integer|Integer[]} index - The index(es) of the child(ren) to return when the query returns an array of children.

  @returns {DOM Node} - Found DOM Node. Null if not found.
*/
DOMOBase.prototype.__get__ = function (dom, query, options) {
  if (!query) {
    return dom;
  }

  var children = dom.querySelectorAll(query);

  if (children.length > 1) {
    children = this.__toArray__(children);
    if (options) {
      // Array of indexes to return
      if (options.index && options.index instanceof Array) {
        return children.filter(function (c, index) {
          return options.index.includes(index);
        });
      } else if (!Number.isNaN(parseInt(options.index))) {
        // Single index to return
        return children[options.index];        
      }

      throw new Error (`Invalid options index. Expected Int[] or Int.`);
    }

    // All children
    return children;
  } else if (children.length === 1) {
    // Single Child Found
    return children[0];
  } else {
    // Nothing Found
    return null;
  }
};

DOMOBase.prototype.__build__ = function (dom) {
  if (typeof dom === 'string') {
    dom = EmmetParser(dom);
  } 

  return dom;
};

DOMOBase.prototype.__toArray__ = function (nodeList) {
  var foo = [];
  var i = 0;

  for (; i < nodeList.length; i++) {
    foo.push(nodeList[i]);
  }

  return foo;
};

export default DOMOBase;
