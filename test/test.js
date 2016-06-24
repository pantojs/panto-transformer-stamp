/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-06-24[12:56:09]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const StampTransformer = require('../');

describe('panto-transformer-stamp', () => {
    describe('#transform', () => {
        it('should stamp', done => {
            const file = {
                filename: 'a.js',
                content: 'This content will be stamped'
            };
            new StampTransformer().transform(file).then(tfile => {
                assert.deepEqual(tfile.stamp, '1ylz5kw.js');
                done();
            }).catch(console.error.bind(console));
        });
    });
});