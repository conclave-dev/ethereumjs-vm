import BN = require('bn.js')
import Common from 'ethereumjs-common'
import Blockchain from 'ethereumjs-blockchain'
import { ExecResult } from '../evm'
import PStateManager from '../../state/promisified'

const Block = require('ethereumjs-block')

export interface PrecompileFunc {
  (opts: PrecompileInput): Promise<ExecResult>
}

export interface PrecompileInput {
  data: Buffer
  gasLimit: BN
  _common: Common
  _state: PStateManager
  _block: any
  _blockchain: Blockchain
}
