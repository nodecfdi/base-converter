# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v3.0.1](https://github.com/nodecfdi/base-converter/compare/v3.0.0...v3.0.1)

### Commits

- refactor: :recycle: update dependencies, build config, and project tooling [`9ff902b`](https://github.com/nodecfdi/base-converter/commit/9ff902b2175e7fd2bca43ba74dc3f9a724d5e95d)
- refactor: :wastebasket: remove generated documentation files [`52305e4`](https://github.com/nodecfdi/base-converter/commit/52305e4e873315f5a62a1a1e2846912b02ef749d)
- docs: :memo: add comprehensive documentation and quick start guide [`2d8d797`](https://github.com/nodecfdi/base-converter/commit/2d8d797a564595c3b3eebf62f79560f1729cef72)
- docs: :memo: update docs and correct generation of changelog [`f8a9904`](https://github.com/nodecfdi/base-converter/commit/f8a99040db084079fe79a4b22a61f8cee03b224a)
- refactor: :recycle: improve base conversion validation, sequence handling, and CI workflows [`d104561`](https://github.com/nodecfdi/base-converter/commit/d1045616d20650a9e201bf3be4aab7b56d00312d)
- test: :recycle: use test.each for invalid sequence tests in base converter sequence test [`0d971bb`](https://github.com/nodecfdi/base-converter/commit/0d971bbf2225577fdafedff76fbfd84324c0c6c6)
- refactor: :recycle: improve code organization and update tsconfig rootDir [`d38bca5`](https://github.com/nodecfdi/base-converter/commit/d38bca5ed9f491e7a7535b95d4a79e7b475152d4)
- ci: :sparkles: add workflow to notify docs on release or manual trigger [`2efcd73`](https://github.com/nodecfdi/base-converter/commit/2efcd73e304ab49f9c43169ed604a4140715220f)
- chore: :construction: configure package entry points, isolated modules, and dual esm/iife builds [`e71d62d`](https://github.com/nodecfdi/base-converter/commit/e71d62dd753f7c44185be8d2ed04e389a68f47c7)
- ci: :green_heart: update GitHub Actions workflow versions in SonarCloud scan [`27087b5`](https://github.com/nodecfdi/base-converter/commit/27087b533164651da25bd5cbc187a4905cadf6d9)
- chore: :green_heart: pin sonarqube-scan-action to specific commit hash [`7e944ed`](https://github.com/nodecfdi/base-converter/commit/7e944ed215738b8beb195d93feea144c9462fb85)
- refactor: :recycle: remove main and module fields from package.json [`d9cef84`](https://github.com/nodecfdi/base-converter/commit/d9cef8417bfbc6db939b27c6dc9d6b5c3f872a5c)
- refactor: :recycle: update commit-msg husky hook to use pnpm commitlint [`6d5b6a8`](https://github.com/nodecfdi/base-converter/commit/6d5b6a8a48e565b6ed502b32d0b60f9a601e66e8)

## [v3.0.0](https://github.com/nodecfdi/base-converter/compare/v2.0.0...v3.0.0) - 2025-09-04

### Commits

- style: :rotating_light: resolve issues reported by latest changes [`c1aca99`](https://github.com/nodecfdi/base-converter/commit/c1aca99aee7bdf4853812e1ee884657f587ed617)
- chore(release): :tada: 3.0.0 [`17ec3ec`](https://github.com/nodecfdi/base-converter/commit/17ec3ecf083f32eba69f99d7295987182d99d41f)
- build: :boom: generate only esm and default config for doc and build dist [`6c4454e`](https://github.com/nodecfdi/base-converter/commit/6c4454e81f4f9441cf0cb0e24c23f65b7cbe196f)
- refactor: :recycle: move config of eslint for better standard code [`757cdf2`](https://github.com/nodecfdi/base-converter/commit/757cdf2b372b0d00a61eb5344fb7664a03c75823)
- chore: :green_heart: update sonarcloud to use latest release runner actions [`81e4dce`](https://github.com/nodecfdi/base-converter/commit/81e4dce3651ed22ccda50fd9bee69d9eae5c36b2)
- docs: :memo: remove english note for only esm, default on nodecfdi org is only esm [`f07886f`](https://github.com/nodecfdi/base-converter/commit/f07886fc5a9bdd09df0ba5d64c3fc23caa4b6d6f)

## [v2.0.0](https://github.com/nodecfdi/base-converter/compare/v1.0.7...v2.0.0) - 2025-06-23

### Commits

- chore(release): :tada: 2.0.0 [`c3a143c`](https://github.com/nodecfdi/base-converter/commit/c3a143c448bcf2ad54942d619e968d0fa3dcd227)
- chore: :arrow_up: update dependencies [`36dcf6d`](https://github.com/nodecfdi/base-converter/commit/36dcf6d4f9aaf0e3946a6faad065859b064fd2c9)
- style: :rotating_light: resolve issues reported by eslitn and prettier [`4ff33cb`](https://github.com/nodecfdi/base-converter/commit/4ff33cb24bf2a222b58d71da8e9f07d81afe3905)
- docs: :memo: update readme with banner of only esm [`a6268f2`](https://github.com/nodecfdi/base-converter/commit/a6268f214c2efaa2b656bbc1431c4d27789bcb97)
- refactor: :recycle: move to usage tsup for generation of library and only esm [`fe08470`](https://github.com/nodecfdi/base-converter/commit/fe0847045f2b605ee317ff174fa3c3b662540ba0)
- chore: :green_heart: update ci with latest changes in org [`b34c5ff`](https://github.com/nodecfdi/base-converter/commit/b34c5ffae95d9507fbee23b36a2f44bab496cfee)
- docs: :memo: update license 2025 [`a0e800a`](https://github.com/nodecfdi/base-converter/commit/a0e800a65547dfefa768a6c5ea99209b191a9305)

## [v1.0.7](https://github.com/nodecfdi/base-converter/compare/v1.0.6...v1.0.7) - 2024-10-04

### Commits

- docs: :wastebasket: remove old generate doc files [`2392a24`](https://github.com/nodecfdi/base-converter/commit/2392a243edf48b3dc1d1e358e1d976f26a73b24b)
- docs: :memo: generate changelog using latest lib autochangelog [`0884ae1`](https://github.com/nodecfdi/base-converter/commit/0884ae158c60caf37e5199a7aa13966fd6f91314)
- refactor: :recycle: usage latest files structure and configuration for org [`53e2e8b`](https://github.com/nodecfdi/base-converter/commit/53e2e8b7bc298a81515bb0f47b660d5ec296d28f)
- chore(release): :tada: 1.0.7 [`e90567c`](https://github.com/nodecfdi/base-converter/commit/e90567cf47faea2f10007ad6283e61f336859a68)
- chore: :arrow_up: update dependencies [`5b82658`](https://github.com/nodecfdi/base-converter/commit/5b82658e792f4348d63c6d63c220d9b1a60c3eb7)

## [v1.0.6](https://github.com/nodecfdi/base-converter/compare/v1.0.5...v1.0.6) - 2024-08-08

### Commits

- chore(release): :tada: 1.0.6 [`9bf3a6f`](https://github.com/nodecfdi/base-converter/commit/9bf3a6f7266674b0668e22e0013a7ca2dc4b5833)
- chore: :arrow_up: update dependencies [`5ef8acb`](https://github.com/nodecfdi/base-converter/commit/5ef8acbb87403ef3de2b9f95341a16c392437948)
- refactor: :recycle: default sequence is prefered in upper case [`55672ba`](https://github.com/nodecfdi/base-converter/commit/55672ba7b10c864aa2c42e7f93f4748ad7e346f2)

## [v1.0.5](https://github.com/nodecfdi/base-converter/compare/v1.0.4...v1.0.5) - 2024-07-12

### Commits

- chore: :hammer: update development script to publish and build manually on local not in ci [`1c0b920`](https://github.com/nodecfdi/base-converter/commit/1c0b920837b7a947507fff1c9e8b594f95784934)
- docs: :memo: generate docs [`895380e`](https://github.com/nodecfdi/base-converter/commit/895380e434264cde1fbae2c30f25faf33a7c6e75)
- chore(release): :tada: 1.0.5 [`858cb9e`](https://github.com/nodecfdi/base-converter/commit/858cb9e467b6fde1f379733cf87da01cd9929597)
- chore: :memo: update readme with documentation link on site nodecfdi [`40187a1`](https://github.com/nodecfdi/base-converter/commit/40187a1ebcfead40f2fce9a1ea19a5be3060aab3)
- build: :construction: remove script for double execution on publish package [`5d9d36d`](https://github.com/nodecfdi/base-converter/commit/5d9d36d4d04ceca42240234fd5fd9e158ed90dcd)

## [v1.0.4](https://github.com/nodecfdi/base-converter/compare/v1.0.3...v1.0.4) - 2024-07-01

### Merged

- v1.0.4 [`#51`](https://github.com/nodecfdi/base-converter/pull/51)

### Commits

- docs: :memo: generate docs [`075997b`](https://github.com/nodecfdi/base-converter/commit/075997b7e0f23aa74bb308db7bd9638172661024)
- chore(deps): :arrow_up: upgrade dependencies and eslint config [`d45ef01`](https://github.com/nodecfdi/base-converter/commit/d45ef01acce3395fb95ea3a82ed9ac8486dc4339)
- chore: :arrow_up: upgrade dependencies and use new theme for latest typedoc release [`821f86d`](https://github.com/nodecfdi/base-converter/commit/821f86d6b4a333c1496046c37fa99a3911dfb6df)
- chore(release): :tada: 1.0.4 [`d6b940b`](https://github.com/nodecfdi/base-converter/commit/d6b940bb328bcccf0b18efae67ff11252bcada87)
- chore: :wrench: update release version message [`10e3e24`](https://github.com/nodecfdi/base-converter/commit/10e3e249acb59acad9debb4629244d15d4fde2e6)
- chore(release): 1.0.4 :tada: [`986c26b`](https://github.com/nodecfdi/base-converter/commit/986c26b973a702da07cfc1b0f356eacdf68e154a)
- chore: :wrench: update target engine node versions [`fe6f3ef`](https://github.com/nodecfdi/base-converter/commit/fe6f3efbd9e93a75e56f1f270bb7e68a48fadfad)

## [v1.0.3](https://github.com/nodecfdi/base-converter/compare/v1.0.2...v1.0.3) - 2024-04-27

### Merged

- chore: version release 1.0.3 [`#50`](https://github.com/nodecfdi/base-converter/pull/50)

### Commits

- refactor: :recycle: remove old config files [`65b03b9`](https://github.com/nodecfdi/base-converter/commit/65b03b91a5440a894f4101c7e0c29a84d1666c54)
- docs: :memo: update license and library api docs [`ae9b4fd`](https://github.com/nodecfdi/base-converter/commit/ae9b4fdf429cbbadaa65050ac5b2c645f14c713c)
- chore: :recycle: update configs with new organization standard [`f9aa8e5`](https://github.com/nodecfdi/base-converter/commit/f9aa8e5e5d7b038dd30c8f7ed84835d2dae141e3)
- chore(deps): pin dependencies [`5165c75`](https://github.com/nodecfdi/base-converter/commit/5165c752f3c25e9c41079ff9dd2cbbde86c2c436)
- chore(deps): update dependency typescript to v5.4.5 [`a794e3e`](https://github.com/nodecfdi/base-converter/commit/a794e3e187a95c023d68c2b617d30cded3e1e98e)
- ci: :green_heart: update workflows sonar and build [`1af2212`](https://github.com/nodecfdi/base-converter/commit/1af22124f1ce8fba3728329d5484bb8b65f7f314)
- chore: :construction: remove old config docs and exports [`871f5f7`](https://github.com/nodecfdi/base-converter/commit/871f5f7a0c85107b291b93f9ab62e570d1bfcfac)
- docs: :memo: generate docs [`51948f1`](https://github.com/nodecfdi/base-converter/commit/51948f1185f69710eb300fa8986be7213b6df619)
- refactor: :fire: update exports and test for latest organization standard [`a450aeb`](https://github.com/nodecfdi/base-converter/commit/a450aeb3137cceb195f44ebfa805e51c198d458e)
- chore(deps): update dependency @types/node to v20.12.7 [`0c15e93`](https://github.com/nodecfdi/base-converter/commit/0c15e9313ccc3005556fadd0280e9f9348b033ec)
- chore(deps): update dependency @types/node to v20.12.5 [`d902551`](https://github.com/nodecfdi/base-converter/commit/d9025518633351e874ccf38118d60259e870573b)
- chore(deps): update dependency typedoc to v0.25.13 [`1abe403`](https://github.com/nodecfdi/base-converter/commit/1abe403841814494b49e44cc2cd030b389624046)
- docs: :memo: update readme [`e741a47`](https://github.com/nodecfdi/base-converter/commit/e741a470e3f31ab8e0f2abacd2d3e9a2400bd500)
- chore(deps): pin dependencies [`eb46343`](https://github.com/nodecfdi/base-converter/commit/eb46343bf8245a7f76bf5f85e49ff28dc955bd0a)
- docs: :memo: update changelog [`34b977f`](https://github.com/nodecfdi/base-converter/commit/34b977f11dedb4a08f10bb309490636388f57bd3)
- chore: :tada: changelog update for release version 1.0.3 [`318065e`](https://github.com/nodecfdi/base-converter/commit/318065e85f010b4cb2ed42fbfb2100251c99c3f2)
- chore(release): 1.0.3 :tada: [`57ba5c8`](https://github.com/nodecfdi/base-converter/commit/57ba5c82a70606d93b3e30d767ad260da0ce7220)

## [v1.0.2](https://github.com/nodecfdi/base-converter/compare/v1.0.1...v1.0.2) - 2024-04-03

### Merged

- chore: 🚀 version bump 1.0.2 [`#43`](https://github.com/nodecfdi/base-converter/pull/43)

### Commits

- chore(deps): :arrow_up: update configs for linting and tools formatter to standard org [`966e4d0`](https://github.com/nodecfdi/base-converter/commit/966e4d0710ac35ed407552186cdc0a337c4bd539)
- docs: :memo: generate docs [`81285b3`](https://github.com/nodecfdi/base-converter/commit/81285b3b44aab172849dad9d1d8c18eff208ece6)
- refactor: :recycle: apply refactor codes for latest rules used in org [`d170c5c`](https://github.com/nodecfdi/base-converter/commit/d170c5cb68b8a492d1998de377a582e552a5bfb2)
- chore: :rocket: version bump 1.0.2 [`39d936a`](https://github.com/nodecfdi/base-converter/commit/39d936a87297ca785faf018572794fb259264cc9)
- ci(deps): :green_heart: disable tests on failed node version 17 [`d170618`](https://github.com/nodecfdi/base-converter/commit/d170618b4385bce000b3b848bec455c01b1426b1)

## [v1.0.1](https://github.com/nodecfdi/base-converter/compare/v1.0.0...v1.0.1) - 2024-02-28

### Merged

- chore: version bump 1.0.1 [`#42`](https://github.com/nodecfdi/base-converter/pull/42)

### Commits

- chore: :arrow_up: update and remove dependencies unused [`79149ee`](https://github.com/nodecfdi/base-converter/commit/79149ee1cf5f885c577952817ceea984ca706d57)
- style: :rotating_light: resolve all problems reported by new suite of rules of eslint and prettier [`cec0d0f`](https://github.com/nodecfdi/base-converter/commit/cec0d0f336234d22a92c7768839c571424790ece)
- docs: generate docs [`d4d6c9e`](https://github.com/nodecfdi/base-converter/commit/d4d6c9e596d4fdf1cc6f91eb9bface8d39fc96d1)
- chore(deps): update dependency vite to v4.5.2 [security] [`0fd0383`](https://github.com/nodecfdi/base-converter/commit/0fd03835410bd8f01da410fb331e46570c99e11b)
- chore: update eslint nodecfi config and apply fixes for reported errors [`83ca747`](https://github.com/nodecfdi/base-converter/commit/83ca74788b30cfebbb9f55dc013ff6bdc2712d36)
- build: :construction: prepare for usage build with vite in lib mode [`f8e6c2e`](https://github.com/nodecfdi/base-converter/commit/f8e6c2ecdfca5f87e0b582cc113c1ec14f4c2f58)
- chore: :wrench: upgrade husky and commitlint to usage latest versions [`eef9e0c`](https://github.com/nodecfdi/base-converter/commit/eef9e0ce01d1a7adf6ec5f93d918eca02af0f4d8)
- chore(deps): update vitest monorepo to ^0.34.0 [`d55cd8f`](https://github.com/nodecfdi/base-converter/commit/d55cd8fd2100f21de43a57e0462666eac8d198c3)
- style: apply more strict rules of shared config [`b7a32c6`](https://github.com/nodecfdi/base-converter/commit/b7a32c611ad1b8896560b635c730bfb6ecdaaa2c)
- ci: :arrow_up: update actions to latest versions and default version node to 20 [`cdafb7f`](https://github.com/nodecfdi/base-converter/commit/cdafb7f4e29a3a5ad499bd269968763ac37c653f)
- chore: :rocket: version bump 1.0.1 [`c992bfb`](https://github.com/nodecfdi/base-converter/commit/c992bfb9a286c9ae9d28bf787af03c55e8cd668b)
- docs(tools): :memo: update library and theme for generate docs for typescript proyect [`1f7a8b1`](https://github.com/nodecfdi/base-converter/commit/1f7a8b10e4366f1033482ff2a375f928a34010de)
- chore(deps): update dependency typedoc to ^0.25.0 [`1fddce8`](https://github.com/nodecfdi/base-converter/commit/1fddce8958ba5d807c34289f8183b3af143cb87d)
- docs(license): :memo: update license to 2024 happy new year [`d69602d`](https://github.com/nodecfdi/base-converter/commit/d69602dbca46948fe40c307f4bb96b34c33f349a)

## [v1.0.0](https://github.com/nodecfdi/base-converter/compare/v0.1.3...v1.0.0) - 2023-07-08

### Merged

- chore: version bump 1.0.0 [`#23`](https://github.com/nodecfdi/base-converter/pull/23)

### Commits

- chore: update dependencies and apply new fixes on suite eslint rules [`47352ff`](https://github.com/nodecfdi/base-converter/commit/47352ff6f1381faba158134da4ed3e842f0d9cdc)
- chore(deps): update vitest monorepo to ^0.31.0 [`27f0304`](https://github.com/nodecfdi/base-converter/commit/27f0304063f9f9d5dcfa9a6924473fb7857fad29)
- docs: generate docs [`3551ea3`](https://github.com/nodecfdi/base-converter/commit/3551ea300cb2ebaf40f9aaeed5f99012e64f5d33)
- chore(deps): update vitest monorepo to ^0.32.0 [`6584ad1`](https://github.com/nodecfdi/base-converter/commit/6584ad11beb7da42462b8a3abdf7de6bd763f586)
- chore(deps): update dependency typedoc to ^0.24.0 [`d8c2ce0`](https://github.com/nodecfdi/base-converter/commit/d8c2ce0cda9e91e32bcbb631dfecdcddc588e730)
- chore(deps): update dependency eslint-config-xo-typescript to ^0.57.0 [`15e7406`](https://github.com/nodecfdi/base-converter/commit/15e740646215397551055d84ca548064d536ba04)
- ci: update workflows with github updates [`2d30a3f`](https://github.com/nodecfdi/base-converter/commit/2d30a3fa50aeaec0641479f418f1df4dd1e2bdd6)
- docs: update readme with fixed imports and latest version release [`89f8869`](https://github.com/nodecfdi/base-converter/commit/89f886973f8ab480c56297b30b8d46d901fbf0cf)
- chore: update changeset schema url [`291468f`](https://github.com/nodecfdi/base-converter/commit/291468f6d416fdd4613ae765a968aa8020c962d6)

## [v0.1.3](https://github.com/nodecfdi/base-converter/compare/v0.1.2...v0.1.3) - 2023-03-30

### Merged

- chore: version bump 0.1.3 [`#14`](https://github.com/nodecfdi/base-converter/pull/14)

### Commits

- chore: update dependencies and fixed exports [`9077ae6`](https://github.com/nodecfdi/base-converter/commit/9077ae6543d425e002701f30026cfbb5099fc2ad)
- fix: update lock to sync with package.json [`eb05389`](https://github.com/nodecfdi/base-converter/commit/eb05389bb339a2c255012da6442cc4d63689d1a7)
- docs: generate docs [`a51d87c`](https://github.com/nodecfdi/base-converter/commit/a51d87c8bc66b767ebdf8118cdb18b17e2004e11)
- chore(deps): update vitest monorepo to ^0.29.0 [`d34d3f2`](https://github.com/nodecfdi/base-converter/commit/d34d3f2311d35a1ce0b99bf74a77207eb3430002)
- ci: fixed errors on matrix node and added prettier check lint [`53d500e`](https://github.com/nodecfdi/base-converter/commit/53d500ea0a21be76dcca6ca40ce5bd247474f2a4)
- refactor: remove unnecessary jsdoc tag [`5073275`](https://github.com/nodecfdi/base-converter/commit/5073275e4008d3b53a440c506a43083010f923c3)

## [v0.1.2](https://github.com/nodecfdi/base-converter/compare/v0.1.1...v0.1.2) - 2023-02-23

### Merged

- chore: version bump with fixed problem with exports and bundlers [`#10`](https://github.com/nodecfdi/base-converter/pull/10)
- chore(deps): update dependency rimraf to v4 [`#7`](https://github.com/nodecfdi/base-converter/pull/7)

### Commits

- docs: generate docs [`7aeba51`](https://github.com/nodecfdi/base-converter/commit/7aeba51a62d5a8635a50a6933273ec6983553f13)
- chore: update dependencies and fixed exports for work with bundlers [`0b0c4a6`](https://github.com/nodecfdi/base-converter/commit/0b0c4a6d88211b403b37a5a48cbf9389929263de)
- chore(deps): update vitest monorepo to ^0.28.0 [`537cbfb`](https://github.com/nodecfdi/base-converter/commit/537cbfb2e6e71c4c0480f678fe2c7248c68f9a90)
- chore: version bump and update docs for installation [`157bf54`](https://github.com/nodecfdi/base-converter/commit/157bf54ad7c7ffba6d3b2a7d296f53e35c8c9754)
- chore(deps): update dependency eslint-config-xo-typescript to ^0.56.0 [`5aaa217`](https://github.com/nodecfdi/base-converter/commit/5aaa2174a303136e071a70c91a21bcb9fa7da401)

## [v0.1.1](https://github.com/nodecfdi/base-converter/compare/v0.1.0...v0.1.1) - 2023-01-10

### Merged

- chore: version bump 0.1.1 [`#6`](https://github.com/nodecfdi/base-converter/pull/6)

### Commits

- chore: added new config files, changed from microbundle to tsup, and added more rules to eslint [`17801fa`](https://github.com/nodecfdi/base-converter/commit/17801facaaca82aebea71203194229d76c48331f)
- docs: generate docs [`e87c548`](https://github.com/nodecfdi/base-converter/commit/e87c5488cc69740c74f3e3fb1758adde93b32ef9)
- chore: apply linter fixes and update from jest to vitest [`734b2b5`](https://github.com/nodecfdi/base-converter/commit/734b2b5e3cbcdf6f42fff960036e3d91f3c1e483)
- ci: update deprecated output variables and fixed pnpm installation [`4144fa8`](https://github.com/nodecfdi/base-converter/commit/4144fa8721d439c0fdc903226efa1f961a2bbaaa)
- refactor: remove old config files [`07848cb`](https://github.com/nodecfdi/base-converter/commit/07848cb89432c2df45b632a0651296153f2c35ac)
- docs: fixed badge for build action [`ec4bea9`](https://github.com/nodecfdi/base-converter/commit/ec4bea9df98b677d3dc9ee16a70fb9c25a622377)
- refactor: remove unused type globals [`7fa6c21`](https://github.com/nodecfdi/base-converter/commit/7fa6c216cc0b96fbb6a04054b29de393032d39a9)
- chore: update license year, happy 2023! [`10ae569`](https://github.com/nodecfdi/base-converter/commit/10ae56989f217afdbcbb67f22323bb8b45d1c9b4)

## v0.1.0 - 2022-07-06

### Commits

- chore: initial commit [`679f620`](https://github.com/nodecfdi/base-converter/commit/679f6204d1327d1c096c60615342ce373e390722)
- chore: initial commit added classes and tests [`2587192`](https://github.com/nodecfdi/base-converter/commit/2587192e89121dd8de1e1eefa700dbbe7345f908)
- ci: added sonarcloud [`7a2b79e`](https://github.com/nodecfdi/base-converter/commit/7a2b79e9c396976054967c8bef37bce6751e915a)
- docs: update readme [`ce2642b`](https://github.com/nodecfdi/base-converter/commit/ce2642b0250892d4735f81285d7b65855b8f0780)
- ci: added build workflow for publicate first release and next automatic [`f820081`](https://github.com/nodecfdi/base-converter/commit/f820081d171b4fd5d7905a365ecbf1d915d41ebe)
- chore: first version bump 0.1.0 [`2754d0b`](https://github.com/nodecfdi/base-converter/commit/2754d0bc70493be26649a0772b97b02570992955)
