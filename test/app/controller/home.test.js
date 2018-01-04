'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should GET /', () => {
    const pkg = require('../../../package.json');
    return app.httpRequest()
      .get('/')
      .expect({ name: pkg.name, version: pkg.version })
      .expect(200);
  });
});
