# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
(modification: no type change headlines) and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2019-02-06

**Petersburg** (aka `constantinopleFix`) as well as **Goerli**
support/readiness by updating to a supporting `ethereumjs-common` version
[v1.1.0](https://github.com/ethereumjs/ethereumjs-common/releases/tag/v1.1.0),
PR [#64](https://github.com/ethereumjs/ethereumjs-block/pull/64)

**Other Changes:**

- Fixed package size issue by excluding tests and docs from being included in
  the package, PR [#66](https://github.com/ethereumjs/ethereumjs-block/pull/66)
- Error message fixes in `index.js`,
  PR [#62](https://github.com/ethereumjs/ethereumjs-block/pull/62)
- Replace uses of deprecated `new Buffer` with `Buffer.from`,
  PR [#60](https://github.com/ethereumjs/ethereumjs-block/pull/60)
- Remove `ethereumjs-testing` dependency (much smaller dev dependencies),
  PR [#61](https://github.com/ethereumjs/ethereumjs-block/pull/61)

[2.2.0]: https://github.com/ethereumjs/ethereumjs-vm/compare/%40ethereumjs%2Fvm%402.1.0...%40ethereumjs%2Fvm%402.2.0

## [2.1.0] - 2018-10-19

- **Constantinople** support, added difficulty bomb delay (EIP-1234), PR [#54](https://github.com/ethereumjs/ethereumjs-block/pull/54)
- Updated test data, added Constantinople tests, PR [#56](https://github.com/ethereumjs/ethereumjs-block/pull/56), [#57](https://github.com/ethereumjs/ethereumjs-block/pull/57)
- Added `timestamp` field to `setGenesisParams()`, PR [#52](https://github.com/ethereumjs/ethereumjs-block/pull/52)

[2.1.0]: https://github.com/ethereumjs/ethereumjs-vm/compare/%40ethereumjs%2Fvm%402.0.1...%40ethereumjs%2Fvm%402.1.0

## [2.0.1] - 2018-08-08

- Fixes `BlockHeader.prototype.validate()` bug, see PR [#49](https://github.com/ethereumjs/ethereumjs-block/pull/49)

[2.0.1]: https://github.com/ethereumjs/ethereumjs-vm/compare/%40ethereumjs%2Fvm%402.0.0...%40ethereumjs%2Fvm%402.0.1

## [2.0.0] - 2018-06-25

This release introduces both support for different `chains` (`mainnet`, `ropsten`, ...)
and `hardforks` up to the latest applied HF (`byzantium`). Parameters and genesis values
are provided by the new [ethereumjs-common](https://github.com/ethereumjs/ethereumjs-common)
library which also defines the set of supported chains and forks.

Changes in detail:

- New initialization parameters `opts.chain` (default: `mainnet`) and `opts.hardfork`
  (default: `null`, block number-based behaviour), PR [#44](https://github.com/ethereumjs/ethereumjs-block/pull/44)
- Alternatively a `Common` class object can be provided directly with the `opts.common` parameter,
  see [API](https://github.com/ethereumjs/ethereumjs-block/blob/master/docs/index.md) docs
- Correct block validation for all know hardforks, PR
  [#47](https://github.com/ethereumjs/ethereumjs-block/pull/47), if no hardfork is set validation logic
  is determined by block number in combination with the `chain` set
- Genesis block initialization depending on the `chain` set (see `ethereumjs-common` for supported chains)
- Extensive test additions to cover the newly introduced capabilities and changes
- Fix default value for `nonce` (empty buffer -> `<Buffer 00 00 00 00 00 00 00 00>`), PR [#42](https://github.com/ethereumjs/ethereumjs-block/pull/42)

[2.0.0]: https://github.com/ethereumjs/ethereumjs-vm/compare/%40ethereumjs%2Fvm%401.7.1...%40ethereumjs%2Fvm%402.0.0

## [1.7.1] - 2018-02-15

- Fix `browserify` issue blocking updates for packages depending on `ethereumjs-block`
  library, PR [#40](https://github.com/ethereumjs/ethereumjs-block/pull/40)
- Updated `ethereumjs/common` dependency, PR [#38](https://github.com/ethereumjs/ethereumjs-block/pull/38)

[1.7.1]: https://github.com/ethereumjs/ethereumjs-vm/compare/%40ethereumjs%2Fvm%401.7.0...%40ethereumjs%2Fvm%401.7.1

## [1.7.0] - 2017-10-11

- `Metro-Byzantium` compatible
- New difficulty formula (EIP 100)
- Difficulty bomb delay (EIP 649)
- Removed `isHomestead`, `isHomesteadReprice` from API methods

[1.7.0]: https://github.com/ethereumjs/ethereumjs-vm/compare/%40ethereumjs%2Fvm%401.6.0...%40ethereumjs%2Fvm%401.7.0

## [1.6.0] - 2017-07-12

- Breakout header-from-rpc as separate module

[1.6.0]: https://github.com/ethereumjs/ethereumjs-vm/compare/%40ethereumjs%2Fblock%401.5.1...%40ethereumjs%2Fblock%401.6.0

## [1.5.1] - 2017-06-04

- Dev dependency updates
- BN for gas limit

[1.5.1]: https://github.com/ethereumjs/ethereumjs-vm/compare/%40ethereumjs%2Fblock%401.5.0...%40ethereumjs%2Fblock%401.5.1

## Older releases:

- [1.5.0](https://github.com/ethereumjs/ethereumjs-vm/compare/%40ethereumjs%2Fblock%401.4.0...%40ethereumjs%2Fblock%401.5.0) - 2017-01-31
- [1.4.0](https://github.com/ethereumjs/ethereumjs-vm/compare/%40ethereumjs%2Fblock%401.3.1...%40ethereumjs%2Fblock%401.4.0) - 2016-12-15
- [1.3.1](https://github.com/ethereumjs/ethereumjs-vm/compare/%40ethereumjs%2Fblock%401.3.0...%40ethereumjs%2Fblock%401.3.1) - 2016-10-14
- [1.3.0](https://github.com/ethereumjs/ethereumjs-vm/compare/%40ethereumjs%2Fblock%401.2.2...%40ethereumjs%2Fblock%401.3.0) - 2017-10-11
