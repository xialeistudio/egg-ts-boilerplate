import Memcached from '../../lib/memcached';

const pkg = require('../../package.json');
const MemcachedSymbol = Symbol('Application#memcached');

export default {
  get version() {
    return pkg.version;
  },
  get name() {
    return pkg.name;
  },
  get memcached() {
    const self: any = this;
    if (!self[MemcachedSymbol]) {
      const { servers, options } = self.config.memcached;
      self[MemcachedSymbol] = new Memcached(servers, options);
      self.logger.debug('memcached initialized');
    }
    return self[MemcachedSymbol];
  },
};
