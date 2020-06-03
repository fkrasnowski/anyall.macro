const anyAny = (operator) => `((_anys1, _anys2) =>
  _anys1.find(_any1 =>
    _anys2.find(_any2 => _any1 ${operator} _any2)
  ) !== undefined)();`;

const allAll = (operator) => `((_alls1, _alls2) =>
_alls1.every(_all1 => _alls2.every(_all2 => _all1 ${operator} _all2)) )();`;

const anyAll = (operator) => `((_anys, _alls) =>
  _anys.find(_any =>
    _alls.every(_all => _any ${operator} _all))
   !== undefined)();`;

const allAny = (operator) => `((_alls, _anys) =>
_alls.every(_all1 => _anys.find(_all2 => _all1 ${operator} _all2) !== undefined) )();`;

export const getReplacementFunction = (type) => {
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
