/*
  This code is meant to be run in a browser. Compatability table to come. 
*/

import EmmetParser from 'emmet-parser';

import DOMOSingle from 'DOMObject/single';
import DOMOArray from 'DOMObject/array';

function DOMObject (dom) {
  if (dom instanceof Array) {
    this.__domo__ = new DOMOArray(dom);
  } else {
    this.__domo__ = new DOMOSingle(dom);
  }
}



DOMObject.prototype.get = function (query, options) {
  return this.__domo__.get(query, options);
};












/*
  Some way to append children 
*/

DOMObject.prototype.insertAfter = function () {
  
};

DOMObject.prototype.insertBefore = function () {

};



export default DOMObject;
