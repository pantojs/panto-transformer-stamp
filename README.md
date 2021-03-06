# panto-transformer-stamp
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

Timestamp transformer for panto.

```js
panto.loadTransformer('stamp');

panto.pick('**/*.js').read().stamp({
    ignoreError: true,
    isSilent: true
});
```

## options
 - ignoreError: boolean, if fail when error
 - isSilent: boolean, if log warnning message

[npm-url]: https://npmjs.org/package/panto-transformer-stamp
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-stamp.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-stamp.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-stamp
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-stamp.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-stamp
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-stamp.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-stamp#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-stamp/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-stamp/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-stamp?branch=master
