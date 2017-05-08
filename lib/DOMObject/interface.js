import EmmetParser from 'emmet-parser';

import DOMObject from 'DOMObject';

function DOMOInterface () {
  this.__document__ = document;
  this.__parser__ = new DOMParser();
}

/**
  Query the DOMObject for the node.
  
  @param {String} query - The CSS Selector query string
  @param {Object} options - Optional options are as follows
    {Integer|Integer[]} index - The index(es) of the child(ren) to return when the query returns an array of children.

  @returns {DOMObject} - A chainable DOMObject. Null if not found.
*/
DOMOInterface.prototype.__get__ = function (dom, query, options) {
  var children = dom.querySelectorAll(query);

  if (children.length > 1) {
    children = this.__toArray__(children);
    if (options.index) {
      // Array of indexes to return
      if (options.index instanceof Array) {
        return new DOMObject(children.filter(function (c, index) {
          return options.index.includes(index);
        }));
      }

      // Single index to return
      return new DOMObject(children[options.index]);
    }

    // All children
    return new DOMObject(children);
  } else if (children.length === 1) {
    // Single Child Found
    return new DOMObject(children[0]);
  } else {
    // Nothing Found
    return null;
  }
};

DOMOInterface.prototype.__build__ = function (dom) {
  if (typeof dom === 'string') {
    dom = EmmetParser(dom);
  } 

  return dom;
};

DOMOInterface.prototype.__toArray__ = function (nodeList) {
  var foo = [];
  var i = 0;

  for (; i < nodeList.length; i++) {
    foo.push(nodeList[i]);
  }

  return foo;
};

export default DOMOInterface;
