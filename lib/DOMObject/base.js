import EmmetParser from 'emmet-parser';

function DOMOBase () {
  this.__document__ = document;
  this.__parser__ = new DOMParser();
}

DOMOBase.prototype.__remove__ = function (dom, query, options) {
  if (!query) {

    return this.__removeMe__(dom);
  }

  var target = this.__get__(dom, query, options);

  if (!target) {
    return null;
  }

  if (target instanceof Array) {
    return target.map(function (d) {
      return this.__removeMe__(d);
    });
  }

  return this.__removeMe__(target);
};

DOMOBase.prototype.__removeMe__ = function (element) {
  if (!element.parentElement) {
    throw new Error ('Cannot remove root node.');
  }

  var removed = element.cloneNode(true);
  element.remove();
  return removed;
};

DOMOBase.prototype.__insertBefore__ = function (sibling, target, query, options) {
  return this.__pend__(this.__insertMeBefore__, sibling, target, query, options);
};

DOMOBase.prototype.__insertMeBefore__ = function (sibling, target) {
  if (!sibling.parentElement) {
    throw new Error (`Sibling requires a parent node.`);
  }

  sibling.parentElement.insertBefore(target, sibling.previousSibling);

  return sibling;
};

DOMOBase.prototype.__insertAfter__ = function (sibling, target, query, options) {
  return this.__pend__(this.__insertMeAfter__, sibling, target, query, options);
};

DOMOBase.prototype.__insertMeAfter__ = function (sibling, target) {
  if (!sibling.parentElement) {
    throw new Error (`Sibling requires a parent node.`);
  }

  sibling.parentElement.insertBefore(target, sibling.nextSibling);

  return sibling;
};

/**
  @param {DOM Node} child - The child to insert
  @param {String} query - The CSS Selector query string
  @param {Object} options - Optional options are as follows
    {Integer|Integer[]} index - The index(es) of the child(ren) to return when the query returns an array of children.

  @returns {DOM Node} - The updated DOM Node.
*/
DOMOBase.prototype.__append__ = function (parent, child, query, options) {
  return this.__pend__(this.__appendUs__, parent, child, query, options);
};

DOMOBase.prototype.__appendUs__ = function (parent, child) {
  parent.appendChild(child);

  return parent;
};

/**
  @param {DOM Node} child - The child to insert
  @param {String} query - The CSS Selector query string
  @param {Object} options - Optional options are as follows
    {Integer|Integer[]} index - The index(es) of the child(ren) to return when the query returns an array of children.

  @returns {DOM Node} - The updated DOM Node.
*/
DOMOBase.prototype.__prepend__ = function (parent, child, query, options) {
  return this.__pend__(this.__prependUs__, parent, child, query, options);
};

DOMOBase.prototype.__prependUs__ = function (parent, child) {
  parent.insertBefore(child, parent.firstChild);

  return parent;
};

DOMOBase.prototype.__pend__ = function (action, parent, child, query, options) {
  if (!query) {
    return action(parent, child);
  }

  var target = this.__get__(parent, query, options);

  if (process.env.DEBUG) {
    console.log('Append Query Target: ', target);
  }

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
