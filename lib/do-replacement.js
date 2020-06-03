"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doExpressionReplacement = doExpressionReplacement;

var _sidesParams = require("./sides-params");

var _replacement = require("./replacement");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function doExpressionReplacement(path, t, parse) {
  var parentPath = path.parentPath;
  var binaryExpressionPath = parentPath.parentPath;

  var _getSidesParamsAndTyp = (0, _sidesParams.getSidesParamsAndType)(path, t),
      _getSidesParamsAndTyp2 = _slicedToArray(_getSidesParamsAndTyp, 3),
      left = _getSidesParamsAndTyp2[0],
      right = _getSidesParamsAndTyp2[1],
      type = _getSidesParamsAndTyp2[2];

  var operator = binaryExpressionPath.node.operator || 'dupa';

  var addArgs = function addArgs(exp, left, right) {
    var args = [t.arrayExpression(left), t.arrayExpression(right)];
    exp.expression.arguments = args;
    return exp;
  };

  var _parse$program$body = _slicedToArray(parse((0, _replacement.getReplacementFunction)(type)(operator)).program.body, 1),
      expression = _parse$program$body[0];

  binaryExpressionPath.replaceWith(addArgs(expression, left, right)); //skip next reference if true

  return ['AnyAny', 'AllAll'].includes(type);
}