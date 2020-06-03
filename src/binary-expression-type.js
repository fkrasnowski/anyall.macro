export const getBinaryExpressionType = (path, t) => {
  const isNameCall = (name) => (node) =>
    t.isCallExpression(node) && node.callee.name === name;
  const isAnyCall = isNameCall('any');
  const isAllCall = isNameCall('all');
  const type = ((biPath) =>
    [biPath.node.left, biPath.node.right].map((node) =>
      isAnyCall(node) ? 'Any' : isAllCall(node) ? 'All' : 'One'
    ))(path);
  return type;
};
