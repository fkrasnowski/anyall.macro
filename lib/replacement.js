"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReplacementFunction = void 0;

var anyAny = function anyAny(operator) {
  return "((_anys1, _anys2) =>\n  _anys1.find(_any1 =>\n    _anys2.find(_any2 => _any1 ".concat(operator, " _any2)\n  ) !== undefined)();");
};

var allAll = function allAll(operator) {
  return "((_alls1, _alls2) =>\n_alls1.every(_all1 => _alls2.every(_all2 => _all1 ".concat(operator, " _all2)) )();");
};

var anyAll = function anyAll(operator) {
  return "((_anys, _alls) =>\n  _anys.find(_any =>\n    _alls.every(_all => _any ".concat(operator, " _all))\n   !== undefined)();");
};

var allAny = function allAny(operator) {
  return "((_alls, _anys) =>\n_alls.every(_all1 => _anys.find(_all2 => _all1 ".concat(operator, " _all2) !== undefined) )();");
};

var getReplacementFunction = function getReplacementFunction(type) {
  switch (type) {
    case 'AnyOne':
      return anyAny;

    case 'AllOne':
      return allAny;

    case 'OneAny':
      return anyAny;

    case 'OneAll':
      return anyAll;

    case 'AnyAny':
      return anyAny;

    case 'AnyAll':
      return anyAll;

    case 'AllAny':
      return allAny;

    case 'AllAll':
      return allAll;

    default:
      return null;
  }
};

exports.getReplacementFunction = getReplacementFunction;