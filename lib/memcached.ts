import * as Client from 'memcached';

export default class Memcached {
  private client: Client;

  constructor(location: Client.Location, options?: Client.options) {
    this.client = new Client(location, options);
  }

  public get(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.client.get(key, (e, data) => e ? reject(e) : resolve(data));
    });
  }

  public del(key: string) {
    return new Promise((resolve, reject) => {
      this.client.del(key, (e, data) => e ? reject(e) : resolve(data));
    });
  }

  public set(key: string, value: any, lifetime: number) {
    return new Promise((resolve, reject) => {
      this.client.set(key, value, lifetime, (e, data) => e ? reject(e) : resolve(data));
    });
  }
}
