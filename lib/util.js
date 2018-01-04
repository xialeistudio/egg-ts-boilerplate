"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
function md5(data) {
    const m = crypto.createHash('md5');
    m.update(data);
    return m.digest('hex');
}
exports.md5 = md5;
function randomString(len) {
    const chars = '1234567890-=qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    const s = [];
    for (let i = 0; i < len; i++) {
        s.push(chars[Math.floor(Math.random() * chars.length)]);
    }
    return s.join('');
}
exports.randomString = randomString;
function isPhone(phone) {
    return /^1[3-9]\d{9}$/.test(phone);
}
exports.isPhone = isPhone;
function makeSign(params, securityKey) {
    const keys = Object.keys(params).sort();
    const p = [];
    for (const key of keys) {
        p.push(`${key}=${params[key]}`);
    }
    return md5(p.join('&') + securityKey);
}
exports.makeSign = makeSign;
