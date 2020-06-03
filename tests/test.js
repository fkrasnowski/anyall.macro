"use strict";

var _ava = _interopRequireDefault(require("ava"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _ava["default"])('all all true comparisons', function (t) {
  t["true"](function (_alls1, _alls2) {
    return _alls1.every(function (_all1) {
      return _alls2.every(function (_all2) {
        return _all1 === _all2;
      });
    });
  }([5, 5, 5], [5, 5]));
  t["true"](function (_alls1, _alls2) {
    return _alls1.every(function (_all1) {
      return _alls2.every(function (_all2) {
        return _all1 >= _all2;
      });
    });
  }([10, 11, 12], [5, 5, 10]));
  t["true"](function (_alls1, _alls2) {
    return _alls1.every(function (_all1) {
      return _alls2.every(function (_all2) {
        return _all1 < _all2;
      });
    });
  }([1, 2], [3, 4]));
  t["true"](function (_alls1, _alls2) {
    return _alls1.every(function (_all1) {
      return _alls2.every(function (_all2) {
        return _all1 > _all2;
      });
    });
  }([2, 10], [0, 1]));
  t["true"](function (_alls1, _alls2) {
    return _alls1.every(function (_all1) {
      return _alls2.every(function (_all2) {
        return _all1 !== _all2;
      });
    });
  }([10, 1, 5], [11, 13, 0]));
});
(0, _ava["default"])('all all false comparisons', function (t) {
  t["false"](function (_alls1, _alls2) {
    return _alls1.every(function (_all1) {
      return _alls2.every(function (_all2) {
        return _all1 === _all2;
      });
    });
  }([5, 5, 5], [1, 5]));
  t["false"](function (_alls1, _alls2) {
    return _alls1.every(function (_all1) {
      return _alls2.every(function (_all2) {
        return _all1 > _all2;
      });
    });
  }([10, 11, 12], [5, 5, 10]));
  t["false"](function (_alls1, _alls2) {
    return _alls1.every(function (_all1) {
      return _alls2.every(function (_all2) {
        return _all1 <= _all2;
      });
    });
  }([1, 5], [3, 4]));
  t["false"](function (_alls1, _alls2) {
    return _alls1.every(function (_all1) {
      return _alls2.every(function (_all2) {
        return _all1 < _all2;
      });
    });
  }([2, 10], [0, 1]));
  t["false"](function (_alls1, _alls2) {
    return _alls1.every(function (_all1) {
      return _alls2.every(function (_all2) {
        return _all1 !== _all2;
      });
    });
  }([10, 5], [10, 2]));
});
(0, _ava["default"])('all one true comparisons', function (t) {
  t["true"](function (_alls, _anys) {
    return _alls.every(function (_all1) {
      return _anys.find(function (_all2) {
        return _all1 === _all2;
      }) !== undefined;
    });
  }([5, 5, 5], [5]));
  t["true"](function (_alls, _anys) {
    return _alls.every(function (_all1) {
      return _anys.find(function (_all2) {
        return _all1 > _all2;
      }) !== undefined;
    });
  }([10, 11, 12], [9]));
  t["true"](function (_anys, _alls) {
    return _anys.find(function (_any) {
      return _alls.every(function (_all) {
        return _any <= _all;
      });
    }) !== undefined;
  }([3], [3, 4]));
  t["true"](function (_anys, _alls) {
    return _anys.find(function (_any) {
      return _alls.every(function (_all) {
        return _any < _all;
      });
    }) !== undefined;
  }([-1], [0, 1]));
  t["true"](function (_alls, _anys) {
    return _alls.every(function (_all1) {
      return _anys.find(function (_all2) {
        return _all1 !== _all2;
      }) !== undefined;
    });
  }([10, 5], [6]));
});
(0, _ava["default"])('all one false comparisons', function (t) {
  t["false"](function (_alls, _anys) {
    return _alls.every(function (_all1) {
      return _anys.find(function (_all2) {
        return _all1 === _all2;
      }) !== undefined;
    });
  }([5, 5, 5], [7]));
  t["false"](function (_alls, _anys) {
    return _alls.every(function (_all1) {
      return _anys.find(function (_all2) {
        return _all1 > _all2;
      }) !== undefined;
    });
  }([10, 11, 12], [10]));
  t["false"](function (_anys, _alls) {
    return _anys.find(function (_any) {
      return _alls.every(function (_all) {
        return _any <= _all;
      });
    }) !== undefined;
  }([3], [3, 2]));
  t["false"](function (_anys, _alls) {
    return _anys.find(function (_any) {
      return _alls.every(function (_all) {
        return _any < _all;
      });
    }) !== undefined;
  }([10], [0, 1]));
  t["false"](function (_alls, _anys) {
    return _alls.every(function (_all1) {
      return _anys.find(function (_all2) {
        return _all1 !== _all2;
      }) !== undefined;
    });
  }([10, 5], [10]));
});
(0, _ava["default"])('any any true comparisons', function (t) {
  t["true"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 === _any2;
      });
    }) !== undefined;
  }([5, 4, 3], [5, 0]));
  t["true"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 >= _any2;
      });
    }) !== undefined;
  }([10, 1, 2], [5, 5, 10]));
  t["true"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 < _any2;
      });
    }) !== undefined;
  }([7, 2], [3, 1]));
  t["true"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 > _any2;
      });
    }) !== undefined;
  }([2, 1], [10, 1]));
  t["true"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 !== _any2;
      });
    }) !== undefined;
  }([10, 10], [1, 10, 10]));
});
(0, _ava["default"])('any any false comparisons', function (t) {
  t["false"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 === _any2;
      });
    }) !== undefined;
  }([5, 4, 3], [15, 0]));
  t["false"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 >= _any2;
      });
    }) !== undefined;
  }([1, 2, 1], [5, 5, 10]));
  t["false"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 < _any2;
      });
    }) !== undefined;
  }([7, 3], [3, 1]));
  t["false"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 > _any2;
      });
    }) !== undefined;
  }([2, 1], [10, 2]));
  t["false"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 !== _any2;
      });
    }) !== undefined;
  }([10, 10], [10, 10, 10]));
});
(0, _ava["default"])('any one false comparisons', function (t) {
  t["false"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 === _any2;
      });
    }) !== undefined;
  }([5, 5, 5], [7]));
  t["false"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 > _any2;
      });
    }) !== undefined;
  }([10, 1, 8], [10]));
  t["false"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 <= _any2;
      });
    }) !== undefined;
  }([3], [1, 2]));
  t["false"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 < _any2;
      });
    }) !== undefined;
  }([10], [0, 1]));
  t["false"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 !== _any2;
      });
    }) !== undefined;
  }([7, 7], [7]));
});
(0, _ava["default"])('any one true comparisons', function (t) {
  t["true"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 === _any2;
      });
    }) !== undefined;
  }([5, 10, 7], [7]));
  t["true"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 > _any2;
      });
    }) !== undefined;
  }([10, 11, 12], [10]));
  t["true"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 <= _any2;
      });
    }) !== undefined;
  }([3], [1, 3]));
  t["true"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 < _any2;
      });
    }) !== undefined;
  }([10], [0, 11]));
  t["true"](function (_anys1, _anys2) {
    return _anys1.find(function (_any1) {
      return _anys2.find(function (_any2) {
        return _any1 !== _any2;
      });
    }) !== undefined;
  }([10, 5], [7]));
});