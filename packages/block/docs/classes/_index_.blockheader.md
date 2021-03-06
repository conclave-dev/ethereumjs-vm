[ethereumjs-block](../README.md) › ["index"](../modules/_index_.md) › [BlockHeader](_index_.blockheader.md)

# Class: BlockHeader

An object that represents the block header

## Hierarchy

- **BlockHeader**

## Index

### Constructors

- [constructor](_index_.blockheader.md#constructor)

### Properties

- [bloom](_index_.blockheader.md#bloom)
- [coinbase](_index_.blockheader.md#coinbase)
- [difficulty](_index_.blockheader.md#difficulty)
- [extraData](_index_.blockheader.md#extradata)
- [gasLimit](_index_.blockheader.md#gaslimit)
- [gasUsed](_index_.blockheader.md#gasused)
- [mixHash](_index_.blockheader.md#mixhash)
- [nonce](_index_.blockheader.md#nonce)
- [number](_index_.blockheader.md#number)
- [parentHash](_index_.blockheader.md#parenthash)
- [raw](_index_.blockheader.md#raw)
- [receiptTrie](_index_.blockheader.md#receipttrie)
- [stateRoot](_index_.blockheader.md#stateroot)
- [timestamp](_index_.blockheader.md#timestamp)
- [transactionsTrie](_index_.blockheader.md#transactionstrie)
- [uncleHash](_index_.blockheader.md#unclehash)

### Methods

- [canonicalDifficulty](_index_.blockheader.md#canonicaldifficulty)
- [hash](_index_.blockheader.md#hash)
- [isGenesis](_index_.blockheader.md#isgenesis)
- [serialize](_index_.blockheader.md#serialize)
- [setGenesisParams](_index_.blockheader.md#setgenesisparams)
- [toJSON](_index_.blockheader.md#tojson)
- [validate](_index_.blockheader.md#validate)
- [validateDifficulty](_index_.blockheader.md#validatedifficulty)
- [validateGasLimit](_index_.blockheader.md#validategaslimit)

## Constructors

### constructor

\+ **new BlockHeader**(`data`: Buffer | [PrefixedHexString](../modules/_index_.md#prefixedhexstring) | [BufferLike](../modules/_index_.md#bufferlike)[] | [BlockHeaderData](../interfaces/_index_.blockheaderdata.md), `opts`: [ChainOptions](../interfaces/_index_.chainoptions.md)): _[BlockHeader](\_index_.blockheader.md)\_

_Defined in [header.ts:29](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L29)_

Creates a new block header.

**Parameters:**

| Name   | Type                                                                                                                                                                                                  | Default | Description                                                                |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------- |
| `data` | Buffer &#124; [PrefixedHexString](../modules/_index_.md#prefixedhexstring) &#124; [BufferLike](../modules/_index_.md#bufferlike)[] &#124; [BlockHeaderData](../interfaces/_index_.blockheaderdata.md) | {}      | The data of the block header.                                              |
| `opts` | [ChainOptions](../interfaces/_index_.chainoptions.md)                                                                                                                                                 | {}      | The network options for this block, and its header, uncle headers and txs. |

**Returns:** _[BlockHeader](\_index_.blockheader.md)\_

## Properties

### bloom

• **bloom**: _Buffer_

_Defined in [header.ts:19](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L19)_

---

### coinbase

• **coinbase**: _Buffer_

_Defined in [header.ts:15](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L15)_

---

### difficulty

• **difficulty**: _Buffer_

_Defined in [header.ts:20](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L20)_

---

### extraData

• **extraData**: _Buffer_

_Defined in [header.ts:25](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L25)_

---

### gasLimit

• **gasLimit**: _Buffer_

_Defined in [header.ts:22](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L22)_

---

### gasUsed

• **gasUsed**: _Buffer_

_Defined in [header.ts:23](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L23)_

---

### mixHash

• **mixHash**: _Buffer_

_Defined in [header.ts:26](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L26)_

---

### nonce

• **nonce**: _Buffer_

_Defined in [header.ts:27](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L27)_

---

### number

• **number**: _Buffer_

_Defined in [header.ts:21](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L21)_

---

### parentHash

• **parentHash**: _Buffer_

_Defined in [header.ts:13](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L13)_

---

### raw

• **raw**: _Buffer[]_

_Defined in [header.ts:12](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L12)_

---

### receiptTrie

• **receiptTrie**: _Buffer_

_Defined in [header.ts:18](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L18)_

---

### stateRoot

• **stateRoot**: _Buffer_

_Defined in [header.ts:16](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L16)_

---

### timestamp

• **timestamp**: _Buffer_

_Defined in [header.ts:24](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L24)_

---

### transactionsTrie

• **transactionsTrie**: _Buffer_

_Defined in [header.ts:17](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L17)_

---

### uncleHash

• **uncleHash**: _Buffer_

_Defined in [header.ts:14](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L14)_

## Methods

### canonicalDifficulty

▸ **canonicalDifficulty**(`parentBlock`: [Block](_block_.block.md)): _BN_

_Defined in [header.ts:134](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L134)_

Returns the canonical difficulty for this block.

**Parameters:**

| Name          | Type                      | Description                       |
| ------------- | ------------------------- | --------------------------------- |
| `parentBlock` | [Block](_block_.block.md) | the parent `Block` of this header |

**Returns:** _BN_

---

### hash

▸ **hash**(): _Buffer_

_Defined in [header.ts:303](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L303)_

Returns the hash of the block header.

**Returns:** _Buffer_

---

### isGenesis

▸ **isGenesis**(): _boolean_

_Defined in [header.ts:310](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L310)_

Checks if the block header is a genesis header.

**Returns:** _boolean_

---

### serialize

▸ **serialize**(): _Buffer_

_Defined in [header.ts:330](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L330)_

Returns the rlp encoding of the block header

**Returns:** _Buffer_

---

### setGenesisParams

▸ **setGenesisParams**(): _void_

_Defined in [header.ts:317](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L317)_

Turns the header into the canonical genesis block header.

**Returns:** _void_

---

### toJSON

▸ **toJSON**(`_labels`: boolean): _object | string[]_

_Defined in [header.ts:340](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L340)_

Returns the block header in JSON format

**`see`** [ethereumjs-util](https://github.com/ethereumjs/ethereumjs-util/blob/master/docs/index.md#defineproperties)

**Parameters:**

| Name      | Type    | Default |
| --------- | ------- | ------- |
| `_labels` | boolean | false   |

**Returns:** _object | string[]_

---

### validate

▸ **validate**(`blockchain`: [Blockchain](../interfaces/_index_.blockchain.md), `height?`: BN): _Promise‹void›_

_Defined in [header.ts:255](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L255)_

Validates the entire block header, throwing if invalid.

**Parameters:**

| Name         | Type                                              | Description                                                                      |
| ------------ | ------------------------------------------------- | -------------------------------------------------------------------------------- |
| `blockchain` | [Blockchain](../interfaces/_index_.blockchain.md) | the blockchain that this block is validating against                             |
| `height?`    | BN                                                | If this is an uncle header, this is the height of the block that is including it |

**Returns:** _Promise‹void›_

---

### validateDifficulty

▸ **validateDifficulty**(`parentBlock`: [Block](_block_.block.md)): _boolean_

_Defined in [header.ts:221](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L221)_

Checks that the block's `difficulty` matches the canonical difficulty.

**Parameters:**

| Name          | Type                      | Description         |
| ------------- | ------------------------- | ------------------- |
| `parentBlock` | [Block](_block_.block.md) | this block's parent |

**Returns:** _boolean_

---

### validateGasLimit

▸ **validateGasLimit**(`parentBlock`: [Block](_block_.block.md)): _boolean_

_Defined in [header.ts:231](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/header.ts#L231)_

Validates the gasLimit.

**Parameters:**

| Name          | Type                      | Description         |
| ------------- | ------------------------- | ------------------- |
| `parentBlock` | [Block](_block_.block.md) | this block's parent |

**Returns:** _boolean_
