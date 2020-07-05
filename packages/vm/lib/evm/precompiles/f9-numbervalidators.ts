import BN = require('bn.js')
import rlp = require('rlp')
import { PrecompileInput } from './types'
import { OOGResult, ExecResult } from '../evm'
import { VmError, ERROR } from '../../exceptions'
import { toChecksumAddress } from 'ethereumjs-util'
const assert = require('assert')

const ISTANBUL_EXTRA_VANITY_BYTES = 32

const getValidatorsFromBlock = (buffer: Buffer): any[] => {
  const decode: any = rlp.decode('0x' + buffer.slice(ISTANBUL_EXTRA_VANITY_BYTES).toString('hex'))
  return decode[0].map((addr: Buffer) => toChecksumAddress(addr.toString('hex')))
}

export default function(opts: PrecompileInput): ExecResult {
  assert(opts.data)

  // @TODO: Remove comments with links
  // https://github.com/celo-org/celo-blockchain/blob/rc1/core/vm/contracts.go#L895
  // https://github.com/celo-org/celo-blockchain/blob/rc1/params/protocol_params.go#L139
  const gasUsed = new BN(opts._common.param('gasPrices', 'getValidator'))
  if (opts.gasLimit.lt(gasUsed)) {
    return {
      returnValue: Buffer.alloc(0),
      gasUsed: opts.gasLimit,
      exceptionError: new VmError(ERROR.OUT_OF_GAS),
    }
  }

  // Validate length of input (a 32-byte integer representing the block number to access)
  const blockNumberInputLength = 32

  // https://github.com/celo-org/celo-blockchain/blob/rc1/core/vm/contracts.go#L895
  // @Q: In the blockchain repo, an error is returned if the input length is *less than* 32,
  // but shouldn't anything other than 32 be invalid? Since blockNumber is a 32-byte integer
  if (opts.data.length < blockNumberInputLength) {
    return {
      returnValue: Buffer.alloc(0),
      gasUsed: opts.gasLimit,
      exceptionError: new VmError(ERROR.REVERT),
    }
  }

  // Check if input block number is genesis
  // https://github.com/celo-org/celo-blockchain/blob/rc1/core/vm/contracts.go#L901
  const blockNumberInput = new BN(opts.data.slice(0, 32))

  if (blockNumberInput.eq(new BN(0))) {
    return {
      returnValue: Buffer.alloc(32),
      gasUsed,
    }
  }

  // Check if input block number is out of bounds
  // https://github.com/celo-org/celo-blockchain/blob/rc1/core/vm/contracts.go#L906
  const currentBlockNumber = new BN(opts._block.header.number)

  if (blockNumberInput.gt(currentBlockNumber)) {
    return {
      returnValue: Buffer.alloc(0),
      gasUsed,
      exceptionError: new VmError(ERROR.OUT_OF_RANGE),
    }
  }

  // TODO: Properly parse validators data from the block's extraData
  // const validators: any[] = getValidatorsFromBlock(opts._block.header.extraData)

  // Placeholder return to avoid the compilation errors due to the lack of default return statement
  return {
    returnValue: Buffer.alloc(0),
    gasUsed: new BN(100),
  }
}
