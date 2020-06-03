const { createMacro } = require('babel-plugin-macros');
const { getBinaryExpressionType } = require('./binary-expression-type');
const { doExpressionReplacement } = require('./do-replacement');
module.exports = createMacro(macro);

function macro({ references, babel }) {
  const { types: t } = babel;
  // all expression references without any
  const isPureAll = (path) =>
    ['AllAll', 'AllOne', 'OneAll'].includes(
      getBinaryExpressionType(path, t).join('')
    );
  const pureAllReferences = references.all.filter((path) =>
    isPureAll(path.parentPath.parentPath)
  );

  let skip = false;
  references.any.forEach((path) => {
    if (!skip) {
      skip = doExpressionReplacement(path, t, babel.parse);
    } else skip = false;
  });
  skip = false;
  pureAllReferences.forEach((path) => {
    if (!skip) {
      skip = doExpressionReplacement(path, t, babel.parse);
    } else skip = false;
  });
}
