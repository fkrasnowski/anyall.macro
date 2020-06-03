"use strict";

var _require = require('babel-plugin-macros'),
    createMacro = _require.createMacro;

var _require2 = require('./binary-expression-type'),
    getBinaryExpressionType = _require2.getBinaryExpressionType;

var _require3 = require('./do-replacement'),
    doExpressionReplacement = _require3.doExpressionReplacement;

module.exports = createMacro(macro);

function macro(_ref) {
  var references = _ref.references,
      babel = _ref.babel;
  var t = babel.types; // all expression references without any

  var isPureAll = function isPureAll(path) {
    return ['AllAll', 'AllOne', 'OneAll'].includes(getBinaryExpressionType(path, t).join(''));
  };

  var pureAllReferences = references.all.filter(function (path) {
    return isPureAll(path.parentPath.parentPath);
  });
  var skip = false;
  references.any.forEach(function (path) {
    if (!skip) {
      skip = doExpressionReplacement(path, t, babel.parse);
    } else skip = false;
  });
  skip = false;
  pureAllReferences.forEach(function (path) {
    if (!skip) {
      skip = doExpressionReplacement(path, t, babel.parse);
    } else skip = false;
  });
}