'use strict';

const utils = require('ethereumjs-util');
const BN = utils.BN;
const error = require('../../exceptions.js').ERROR;
const assert = require('assert');

module.exports = function (opts) {
  assert(opts.data);

  const results = {};

  // @TODO: Remove comments with links
  // https://github.com/celo-org/celo-blockchain/blob/rc1/core/vm/contracts.go#L895
  // https://github.com/celo-org/celo-blockchain/blob/rc1/params/protocol_params.go#L139
  results.gasUsed = new BN(opts._common.param('gasPrices', 'getValidator'));
  if (opts.gasLimit.lt(results.gasUsed)) {
    results.return = Buffer.alloc(0);
    results.gasUsed = opts.gasLimit;
    results.exceptionError = error.OUT_OF_GAS;
    results.exception = 0;
    return results;
  }

  // Validate length of input (a 32-byte integer representing the block number to access)
  const blockNumberInputLength = 32;

  // https://github.com/celo-org/celo-blockchain/blob/rc1/core/vm/contracts.go#L895
  // @Q: In the blockchain repo, an error is returned if the input length is *less than* 32,
  // but shouldn't anything other than 32 be invalid? Since blockNumber is a 32-byte integer
  if (opts.data.length < blockNumberInputLength) {
    results.return = Buffer.alloc(0);
    results.exceptionError = error.INPUT_LENGTH;
    results.exception = 10;
    return results;
  }

  // Check if input block number is genesis
  // https://github.com/celo-org/celo-blockchain/blob/rc1/core/vm/contracts.go#L901
  const blockNumberInput = new BN(opts.data.slice(0, 32));

  if (blockNumberInput.eq(0)) {
    results.return = Buffer.alloc(32);
    return results;
  }

  // Check if input block number is out of bounds
  // https://github.com/celo-org/celo-blockchain/blob/rc1/core/vm/contracts.go#L906
  const currentBlockNumber = new BN(opts.block.header.number);

  if (blockNumberInput.gt(currentBlockNumber)) {
    results.return = Buffer.alloc(0);
    results.exceptionError = error.BLOCK_NUMBER_OUT_OF_BOUNDS;
    results.exception = 9;
    return results;
  }
};
