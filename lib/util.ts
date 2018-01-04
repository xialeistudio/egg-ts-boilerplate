import * as crypto from 'crypto';

export function md5(data: Buffer | string): string {
  const m = crypto.createHash('md5');
  m.update(data);
  return m.digest('hex');
}

export function randomString(len: number) {
  const chars = '1234567890-=qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  const s = [];
  for (let i = 0; i < len; i++) {
    s.push(chars[Math.floor(Math.random() * chars.length)]);
  }
  return s.join('');
}

export function isPhone(phone: string) {
  return /^1[3-9]\d{9}$/.test(phone);
}

export function makeSign(params: any, securityKey: string) {
  const keys = Object.keys(params).sort();
  const p = [];
  for (const key of keys) {
    p.push(`${key}=${params[key]}`);
  }
  return md5(p.join('&') + securityKey);
}
