import { getBinaryExpressionType } from './binary-expression-type';
export const getSidesParamsAndType = (path, t) => {
  const binaryExpressionPath = path.parentPath.parentPath;
  const getCallArgs = (side, path) => path.node[side].arguments;
  const getOne = (side, path) => [path.node[side]];
  const getSide = (sideType) => (sideType === 'One' ? getOne : getCallArgs);
  const toSide = (side, fun) => fun(side, binaryExpressionPath);
  const type = getBinaryExpressionType(binaryExpressionPath, t);

  const getOutput = (leftType, rightType) => [
    toSide('left', getSide(leftType)),
    toSide('right', getSide(rightType)),
    [leftType, rightType].join(''),
  ];
  return getOutput(...type);
};
