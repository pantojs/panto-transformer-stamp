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

const {
    contentstamp
} = require('filestamp');

class StampTransformer extends Transformer {
    _transform(file) {
        let {
            filename,
            content
        } = file;

        return new Promise(resolve => {
            contentstamp(content, filename, (err, result) => {
                if (err) {
                    if (this.options.ignoreError) {
                        panto.log.warn(`StampTransform warnning in ${filename}: ${err.message}`);
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(panto.util.extend(file, {
                        stamp: result.filename
                    }));
                }
            });
        });
    }
}

module.exports = StampTransformer;