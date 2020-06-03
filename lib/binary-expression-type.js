"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBinaryExpressionType = void 0;

var getBinaryExpressionType = function getBinaryExpressionType(path, t) {
  var isNameCall = function isNameCall(name) {
    return function (node) {
      return t.isCallExpression(node) && node.callee.name === name;
    };
  };

  var isAnyCall = isNameCall('any');
  var isAllCall = isNameCall('all');

  var type = function (biPath) {
    return [biPath.node.left, biPath.node.right].map(function (node) {
      return isAnyCall(node) ? 'Any' : isAllCall(node) ? 'All' : 'One';
    });
  }(path);

  return type;
};

exports.getBinaryExpressionType = getBinaryExpressionType;