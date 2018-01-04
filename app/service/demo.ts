import { Service } from 'egg';

export default class DemoService extends Service {
  public memcached() {
    return this.app.memcached.get('demo');
  }

  public model() {
    return this.app.model.Demo.create({
      name: 'test',
    });
  }
}
