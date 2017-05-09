/*
  This code is meant to be run in a browser. Compatability table to come. 
*/

import EmmetParser from 'emmet-parser';

import DOMOSingle from 'DOMObject/single';
import DOMOArray from 'DOMObject/array';

function DOMObject (dom) {
  this.__isArray__ = dom instanceof Array;
  if (this.__isArray__) {
    this.__domo__ = new DOMOArray(dom);
  } else {
    this.__domo__ = new DOMOSingle(dom);
  }
}

DOMObject.prototype.remove = function (query, options) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Deleting ${query}.`);
  }

  var results = this.__domo__.remove(query, options);
  return new DOMObject(results);
};

DOMObject.prototype.insertAfter = function (child, query, options) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Inserting after ${query}.`);
  }

  if (child instanceof DOMObject) {
    child = child.html();
  }

  var results = this.__domo__.insertAfter(child, query, options);
  return new DOMObject(results);
};

DOMObject.prototype.append = function (child) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Appending');
  }

  if (child instanceof DOMObject) {
    child = child.html();
  }

  var results = this.__domo__.append(child);
  return new DOMObject(results);
};

DOMObject.prototype.get = function (query, options) {
  if (!query) {
    return this;
  }

  var results = this.__domo__.get(query, options);
  return new DOMObject(results);
};

/**
  @return {DOM Node} - The DOM Node of the DOMObject.
*/
DOMObject.prototype.html = function () {
  return this.__domo__.html();
};

export default DOMObject;
