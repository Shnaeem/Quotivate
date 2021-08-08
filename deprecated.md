# Deprecated - Stuff that need updating

## Initial install

```sh
$ npm i
npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated parcel-bundler@1.12.5: Parcel v1 is no longer maintained. Please migrate to v2, which is published under the 'parcel' package. See https://v2.parceljs.org/getting-started/migration for details.
npm WARN deprecated core-js@2.6.12: core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.
```

`13 vulnerabilities (12 moderate, 1 high)`

## Audit report

```sh
$ npm audit
# npm audit report

browserslist  4.0.0 - 4.16.4
Severity: moderate
Regular Expression Denial of Service - https://npmjs.com/advisories/1747
fix available via `npm audit fix`
node_modules/browserslist

elliptic  <6.5.4
Severity: moderate
Use of a Broken or Risky Cryptographic Algorithm - https://npmjs.com/advisories/1648
fix available via `npm audit fix`
node_modules/elliptic

glob-parent  <5.1.2
Severity: moderate
Regular expression denial of service - https://npmjs.com/advisories/1751
fix available via `npm audit fix --force`
Will install parcel-bundler@1.7.1, which is a breaking change
node_modules/glob-parent
  chokidar  1.0.0-rc1 - 2.1.8
  Depends on vulnerable versions of glob-parent
  node_modules/chokidar
    @parcel/watcher  <=1.12.1
    Depends on vulnerable versions of chokidar
    node_modules/@parcel/watcher
  fast-glob  <=2.2.7
  Depends on vulnerable versions of glob-parent
  node_modules/fast-glob
    parcel-bundler  >=1.8.0
    Depends on vulnerable versions of fast-glob
    Depends on vulnerable versions of postcss
    Depends on vulnerable versions of ws
    node_modules/parcel-bundler

lodash  <4.17.21
Severity: high
Command Injection - https://npmjs.com/advisories/1673
fix available via `npm audit fix`
node_modules/lodash

postcss  7.0.0 - 7.0.35 || 8.0.0 - 8.2.9
Severity: moderate
Regular Expression Denial of Service - https://npmjs.com/advisories/1693
fix available via `npm audit fix --force`
Will install parcel-bundler@1.7.1, which is a breaking change
node_modules/postcss
node_modules/purgecss/node_modules/postcss
  parcel-bundler  >=1.8.0
  Depends on vulnerable versions of fast-glob
  Depends on vulnerable versions of postcss
  Depends on vulnerable versions of ws
  node_modules/parcel-bundler
  purgecss  2.0.1-beta.0 - 3.0.0
  Depends on vulnerable versions of postcss
  node_modules/purgecss
    htmlnano  >=0.2.4
    Depends on vulnerable versions of purgecss
    Depends on vulnerable versions of uncss
    node_modules/htmlnano
  uncss  >=0.17.0
  Depends on vulnerable versions of postcss
  node_modules/uncss

ws  5.0.0 - 5.2.2 || 6.0.0 - 6.2.1 || 7.0.0 - 7.4.5
Severity: moderate
Regular Expression Denial of Service - https://npmjs.com/advisories/1748
fix available via `npm audit fix --force`
Will install parcel-bundler@1.7.1, which is a breaking change
node_modules/jsdom/node_modules/ws
node_modules/ws
  parcel-bundler  >=1.8.0
  Depends on vulnerable versions of fast-glob
  Depends on vulnerable versions of postcss
  Depends on vulnerable versions of ws
  node_modules/parcel-bundler

13 vulnerabilities (12 moderate, 1 high)
```
