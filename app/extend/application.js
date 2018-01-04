"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memcached_1 = require("../../lib/memcached");
const pkg = require('../../package.json');
const MemcachedSymbol = Symbol('Application#memcached');
exports.default = {
    get version() {
        return pkg.version;
    },
    get name() {
        return pkg.name;
    },
    get memcached() {
        const self = this;
        if (!self[MemcachedSymbol]) {
            const { servers, options } = self.config.memcached;
            self[MemcachedSymbol] = new memcached_1.default(servers, options);
            self.logger.debug('memcached initialized');
        }
        return self[MemcachedSymbol];
    },
};
