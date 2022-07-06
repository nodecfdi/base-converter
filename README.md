# @nodecfdi/base-converter

[![Source Code][badge-source]][source]
[![Software License][badge-license]][license]
[![Latest Version][badge-release]][release]
[![Discord][badge-discord]][discord]

[source]: https://github.com/nodecfdi/utils-internals-baseconverter
[badge-source]: https://img.shields.io/badge/source-nodecfdi%2Futils--internals--baseconverter-blue?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMTIgMTIgNDAgNDAiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiwxMy40Yy0xMC41LDAtMTksOC41LTE5LDE5YzAsOC40LDUuNSwxNS41LDEzLDE4YzEsMC4yLDEuMy0wLjQsMS4zLTAuOWMwLTAuNSwwLTEuNywwLTMuMiBjLTUuMywxLjEtNi40LTIuNi02LjQtMi42QzIwLDQxLjYsMTguOCw0MSwxOC44LDQxYy0xLjctMS4yLDAuMS0xLjEsMC4xLTEuMWMxLjksMC4xLDIuOSwyLDIuOSwyYzEuNywyLjksNC41LDIuMSw1LjUsMS42IGMwLjItMS4yLDAuNy0yLjEsMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEsMC43LTMuNywyLTUuMWMtMC4yLTAuNS0wLjgtMi40LDAuMi01YzAsMCwxLjYtMC41LDUuMiwyIGMxLjUtMC40LDMuMS0wLjcsNC44LTAuN2MxLjYsMCwzLjMsMC4yLDQuNywwLjdjMy42LTIuNCw1LjItMiw1LjItMmMxLDIuNiwwLjQsNC42LDAuMiw1YzEuMiwxLjMsMiwzLDIsNS4xYzAsNy4zLTQuNSw4LjktOC43LDkuNCBjMC43LDAuNiwxLjMsMS43LDEuMywzLjVjMCwyLjYsMCw0LjYsMCw1LjJjMCwwLjUsMC40LDEuMSwxLjMsMC45YzcuNS0yLjYsMTMtOS43LDEzLTE4LjFDNTEsMjEuOSw0Mi41LDEzLjQsMzIsMTMuNHoiLz48L3N2Zz4%3D
[license]: https://github.com/nodecfdi/utils-internals-baseconverter/blob/master/LICENSE
[badge-license]: https://img.shields.io/github/license/nodecfdi/utils-internals-baseconverter?logo=open-source-initiative&style=flat-square
[badge-release]: https://img.shields.io/npm/v/@nodecfdi/utils-internal-baseconverter
[release]: https://www.npmjs.com/package/@nodecfdi/utils-internal-baseconverter
[badge-discord]: https://img.shields.io/discord/459860554090283019?logo=discord&style=flat-square
[discord]: https://discord.gg/aFGYXvX

> TS utility for converting an input from any base to another base
the min base this library accepts is 2 and max base is 36.

## Main features

- Convert an input from any valid base to another.

## Installation

```shell
npm i @nodecfdi/utils-internal-baseconverter --save
```

or

```shell
yarn add @nodecfdi/utils-internal-baseconverter
```

## Implementation

The converter expects 3 parameters: `converter.convert(input, fromBase, toBase)`

```ts
import { BaseConverter } from '@nodecfdi/utils-internal-baseconverter';
// this is the main reason to exists of BaseConverter class
// since parseInt and toString cannot handle large inputs
const input = '3330303031303030303030333030303233373038';
const converter = BaseConverter.createBase36();
// result will be: 292233162870206001759766198425879490508935868472
const result = converter.convert(input, 16, 10);
```

alternatively you can define your own sequence:

```ts
import { BaseConverter, BaseConverterSequence } from '@nodecfdi/utils-internal-baseconverter';
const hexSequence = new BaseConverterSequence('0123456789ABCDEF');
const converter = new BaseConverter(hexSequence);
const input = 'FFFF';
// resut will be: 1111111111111111
converter.convert(input, 16, 2);
```
