/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[18:25:56]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
const Transformer = require('panto-transformer');

const {contentstamp} = require('antiaris-filestamp');

class StampTransformer extends Transformer {
    _transform(file) {
        let {
            filename,
            content
        } = file;

        let filepath = filename;

        return new Promise(resolve => {
            let {
                filename
            } = contentstamp.sync(content, filepath);

            resolve(panto.util.extend(file, {
                stamped: filename
            }));
        });
    }
}

module.exports = StampTransformer;