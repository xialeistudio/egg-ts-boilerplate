"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class DemoService extends egg_1.Service {
    memcached() {
        return this.app.memcached.get('demo');
    }
    model() {
        return this.app.model.Demo.create({
            name: 'test',
        });
    }
}
exports.default = DemoService;
