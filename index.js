/*
  This code is meant to be run in a browser. Compatability table to come. 
*/
import DOMArray from './DOMArray';
import EmmetParser from './emmetParser';

function DOMObject () {
  this.__dom__ = null;
  this.__document__ = document;
  this.__parser__ = new DOMParser();
}

/**
  
*/
DOMObject.prototype.__build__ = function (dom) {
  if (typeof dom === 'string') {
    dom = EmmetParser(dom);
  } 

  return dom;
};


/**
  Query the DOMObject for the node.
  
  @param {String} query - The CSS Selector query string
  @param {Object} options - Optional options are as follows
    {Integer|Integer[]} index - The index(es) of the child(ren) to return when the query returns an array of children.

  @returns {DOMObject} - A chainable DOMObject. Null if not found.
*/

DOMObject.prototype.get = function (query, options) {
  return this.__get__(this.__dom__, query, options);
};

/*
  
*/
DOMObject.prototype.__get__ = function (dom, query, options) {
  var children = dom.querySelectorAll(query);

  if (children.length > 1) {
    children = this.__toArray__(children);

  } else if (children.length === 1) {
    return new DOMObject(children[0]);
  } else {
    return null;
  }
};


/*
  Some way to append children 
*/

DOMObject.prototype.insertAfter = function () {
  
};

DOMObject.prototype.insertBefore = function () {

};

DOMObject.prototype.__toArray__ = function (nodeList) {
  var foo = [];
  var i = 0;

  for (; i < nodeList.length; i++) {
    foo.push(nodeList[i]);
  }

  return foo;
};


export default DOMObject;
