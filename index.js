/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[18:25:56]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.2.4
 * @since 0.1.0
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

        const {
            ignoreError,
            isSilent
        } = this.options;

        return new Promise((resolve, reject) => {
            contentstamp(content, filename, (err, result) => {
                if (err) {
                    if (ignoreError) {
                        if (!isSilent) {
                            panto.log.warn(`StampTransform warnning in ${filename}: ${err.message}`);
                        }
                        resolve(file);
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(panto._.extend(file, {
                        stamp: result.filename
                    }));
                }
            });
        });
    }
}

module.exports = StampTransformer;