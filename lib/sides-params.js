"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSidesParamsAndType = void 0;

var _binaryExpressionType = require("./binary-expression-type");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getSidesParamsAndType = function getSidesParamsAndType(path, t) {
  var binaryExpressionPath = path.parentPath.parentPath;

  var getCallArgs = function getCallArgs(side, path) {
    return path.node[side].arguments;
  };

  var getOne = function getOne(side, path) {
    return [path.node[side]];
  };

  var getSide = function getSide(sideType) {
    return sideType === 'One' ? getOne : getCallArgs;
  };

  var toSide = function toSide(side, fun) {
    return fun(side, binaryExpressionPath);
  };

  var type = (0, _binaryExpressionType.getBinaryExpressionType)(binaryExpressionPath, t);

  var getOutput = function getOutput(leftType, rightType) {
    return [toSide('left', getSide(leftType)), toSide('right', getSide(rightType)), [leftType, rightType].join('')];
  };

  return getOutput.apply(void 0, _toConsumableArray(type));
};

exports.getSidesParamsAndType = getSidesParamsAndType;