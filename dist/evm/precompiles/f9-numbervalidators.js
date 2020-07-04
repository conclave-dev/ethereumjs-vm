'use strict';

var utils = require('ethereumjs-util');
var BN = utils.BN;
var error = require('../../exceptions.js').ERROR;
var assert = require('assert');

module.exports = function (opts) {
  assert(opts.data);

  var results = {};
  results.gasUsed = new BN(opts._common.param('gasPrices', 'getValidator'));
  if (opts.gasLimit.lt(results.gasUsed)) {
    results.return = Buffer.alloc(0);
    results.gasUsed = opts.gasLimit;
    results.exceptionError = error.OUT_OF_GAS;
    results.exception = 0;
    return results;
  }

  // Validate length of input (a 32-byte integer representing the block number to access)
  const expectedDataByteLength = 32;

  // @Q: In the blockchain repo, an error is returned if the input length is *less than* 32,
  // but shouldn't anything other than 32 be invalid? Since blockNumber is a 32-byte integer
  if (opts.data.length < expectedDataByteLength) {
    results.return = Buffer.alloc(0);
    results.exception = 0;
    results.exceptionError = error.INPUT_LENGTH;
    return results;
  }
};
