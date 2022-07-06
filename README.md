# `@nodecfdi/base-converter`

[![Source Code][badge-source]][source]
[![Npm Node Version Support][badge-node-version]][node-version]
[![Discord][badge-discord]][discord]
[![Latest Version][badge-release]][release]
[![Software License][badge-license]][license]
[![Build Status][badge-build]][build]
[![Reliability][badge-reliability]][reliability]
[![Maintainability][badge-maintainability]][maintainability]
[![Code Coverage][badge-coverage]][coverage]
[![Violations][badge-violations]][violations]
[![Total Downloads][badge-downloads]][downloads]

> TS utility for converting an input from any base to another base
the min base this library accepts is 2.

:us: The documentation of this project is in spanish as this is the natural language for intended audience.

:mexico: La documentación del proyecto está en español porque ese es el lenguaje principal de los usuarios.

## Acerca de `@nodecfdi/base-converter`

Librería que convierte un numero entre bases arbitrarias

## Instalación

```shell
npm i @nodecfdi/base-converter --save
```

or

```shell
yarn add @nodecfdi/base-converter
```

## Implementation

El convertidor espera tres parámetros: `converter.convert(input, fromBase, toBase)`

```ts
import { BaseConverter } from '@nodecfdi/utils-internal-baseconverter';
// this is the main reason to exists of BaseConverter class
// since parseInt and toString cannot handle large inputs
const input = '3330303031303030303030333030303233373038';
const converter = BaseConverter.createBase36();
// result will be: 292233162870206001759766198425879490508935868472
const result = converter.convert(input, 16, 10);
```

Alternativamente se puede definir cualquier sequencia y no es sensitivo a mayusculas o minusculas:

```ts
import { BaseConverter, BaseConverterSequence } from '@nodecfdi/utils-internal-baseconverter';
const hexSequence = new BaseConverterSequence('0123456789abCDEF');
const converter = new BaseConverter(hexSequence);
const input = 'FFff';
// resut will be: 1111111111111111
converter.convert(input, 16, 2);
```

## Soporte

Puedes obtener soporte abriendo un ticket en Github.

Adicionalmente, esta librería pertenece a la comunidad [OcelotlStudio](https://ocelotlstudio.com), así que puedes usar los mismos canales de comunicación para obtener ayuda de algún miembro de la comunidad.

## Compatibilidad

Esta librería se mantendrá compatible con al menos la versión con
[soporte activo de Node](https://nodejs.org/es/about/releases/) más reciente.

También utilizamos [Versionado Semántico 2.0.0](https://semver.org/lang/es/) por lo que puedes usar esta librería sin temor a romper tu aplicación.

## Contribuciones

Las contribuciones con bienvenidas. Por favor lee [CONTRIBUTING][] para más detalles y recuerda revisar el archivo [CHANGELOG][].

## Copyright and License

The `@nodecfdi/base-converter` library is copyright © [NodeCfdi](https://github.com/nodecfdi) - [OcelotlStudio](https://ocelotlstudio.com) and licensed for use under the MIT License (MIT). Please see [LICENSE][] for more information.

[contributing]: https://github.com/nodecfdi/base-converter/blob/main/CONTRIBUTING.md
[changelog]: https://github.com/nodecfdi/base-converter/blob/main/CHANGELOG.md

[source]: https://github.com/nodecfdi/base-converter
[node-version]: https://www.npmjs.com/package/@nodecfdi/base-converter
[discord]: https://discord.gg/AsqX8fkW2k
[release]: https://www.npmjs.com/package/@nodecfdi/base-converter
[license]: https://github.com/nodecfdi/base-converter/blob/main/LICENSE
[build]: https://github.com/nodecfdi/base-converter/actions/workflows/build.yml?query=branch:main
[reliability]:https://sonarcloud.io/component_measures?id=nodecfdi_base-converter&metric=Reliability
[maintainability]: https://sonarcloud.io/component_measures?id=nodecfdi_base-converter&metric=Maintainability
[coverage]: https://sonarcloud.io/component_measures?id=nodecfdi_base-converter&metric=Coverage
[violations]: https://sonarcloud.io/project/issues?id=nodecfdi_base-converter&resolved=false
[downloads]: https://www.npmjs.com/package/@nodecfdi/base-converter

[badge-source]: https://img.shields.io/badge/source-nodecfdi/base--converter-blue.svg?logo=github
[badge-node-version]: https://img.shields.io/node/v/@nodecfdi/base-converter.svg?logo=nodedotjs
[badge-discord]: https://img.shields.io/discord/459860554090283019?logo=discord
[badge-release]: https://img.shields.io/npm/v/@nodecfdi/base-converter.svg?logo=npm
[badge-license]: https://img.shields.io/github/license/nodecfdi/base-converter.svg?logo=open-source-initiative
[badge-build]: https://img.shields.io/github/workflow/status/nodecfdi/base-converter/build/main?logo=github-actions
[badge-reliability]: https://sonarcloud.io/api/project_badges/measure?project=nodecfdi_base-converter&metric=reliability_rating
[badge-maintainability]: https://sonarcloud.io/api/project_badges/measure?project=nodecfdi_base-converter&metric=sqale_rating
[badge-coverage]: https://img.shields.io/sonar/coverage/nodecfdi_base-converter/main?logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io
[badge-violations]: https://img.shields.io/sonar/violations/nodecfdi_base-converter/main?format=long&logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io
[badge-downloads]: https://img.shields.io/npm/dm/@nodecfdi/base-converter.svg?logo=npm
