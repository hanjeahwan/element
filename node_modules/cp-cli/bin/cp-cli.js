#!/usr/bin/env node
'use strict';

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = _yargs2.default.usage('Usage: $0 [-L] source target').demand(2, 2).boolean('d').alias('d', 'dereference').describe('d', 'Dereference symlinks').argv;

var source = argv._[0];
var target = argv._[1];
var options = {
  clobber: true,
  dereference: argv.dereference
};

_fsExtra2.default.copy(source, target, options, function (error) {
  if (error) {
    console.error(error);
  }
});