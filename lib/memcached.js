"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client = require("memcached");
class Memcached {
    constructor(location, options) {
        this.client = new Client(location, options);
    }
    get(key) {
        return new Promise((resolve, reject) => {
            this.client.get(key, (e, data) => e ? reject(e) : resolve(data));
        });
    }
    del(key) {
        return new Promise((resolve, reject) => {
            this.client.del(key, (e, data) => e ? reject(e) : resolve(data));
        });
    }
    set(key, value, lifetime) {
        return new Promise((resolve, reject) => {
            this.client.set(key, value, lifetime, (e, data) => e ? reject(e) : resolve(data));
        });
    }
}
exports.default = Memcached;
