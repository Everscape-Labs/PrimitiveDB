'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileExists = exports.readFile = exports.writeFile = exports.mkdir = undefined;

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mkdir = exports.mkdir = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new Promise(function (resolve, reject) {
              (0, _mkdirp2.default)(path, function (error) {
                if (error) {
                  return reject(error);
                }

                return resolve(true);
              });
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function mkdir(_x) {
    return _ref.apply(this, arguments);
  };
}();

var writeFile = exports.writeFile = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(path, content) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', new Promise(function (resolve, reject) {
              _fs2.default.writeFile(path, content, function (error) {
                if (error) {
                  reject(error);
                }

                resolve(true);
              });
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function writeFile(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var readFile = exports.readFile = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(path) {
    var objectMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', new Promise(function (resolve, reject) {
              _fs2.default.readFile(path, 'utf-8', function (error, content) {
                if (error) {
                  return reject(error);
                }

                if (objectMode === true) {
                  return resolve(JSON.parse(content));
                }

                return resolve(content);
              });
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function readFile(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

var fileExists = exports.fileExists = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(path) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', new Promise(function (resolve, reject) {
              _fs2.default.readFile(path, 'utf-8', function (error, content) {
                if (error) {
                  return reject(error);
                }

                if (objectMode === true) {
                  return resolve(JSON.parse(content));
                }

                return resolve(content);
              });
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function fileExists(_x6) {
    return _ref4.apply(this, arguments);
  };
}();