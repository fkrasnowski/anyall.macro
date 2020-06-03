import { getSidesParamsAndType } from './sides-params';
import { getReplacementFunction } from './replacement';

export function doExpressionReplacement(path, t, parse) {
  const parentPath = path.parentPath;
  const binaryExpressionPath = parentPath.parentPath;
  const [left, right, type] = getSidesParamsAndType(path, t);
  const operator = binaryExpressionPath.node.operator || 'dupa';

  const addArgs = (exp, left, right) => {
    const args = [t.arrayExpression(left), t.arrayExpression(right)];
    exp.expression.arguments = args;
    return exp;
  };

  const [expression] = parse(
    getReplacementFunction(type)(operator)
  ).program.body;

  binaryExpressionPath.replaceWith(addArgs(expression, left, right));

  //skip next reference if true
  return ['AnyAny', 'AllAll'].includes(type);
}
