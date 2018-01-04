"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class HomeController extends egg_1.Controller {
    index() {
        this.ctx.body = {
            name: this.app.name,
            version: this.app.version,
        };
    }
}
exports.default = HomeController;
