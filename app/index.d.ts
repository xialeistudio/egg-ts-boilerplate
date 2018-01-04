import Memcached from '../lib/memcached';
import Model from './model';

declare module 'egg' {
  export interface EggAppConfig {
    params: {
      user: { defaultNickname: string; defaultAvatar: string };
      http: { prefix: string; schema: string };
    };
  }

  export interface Application {
    model: Model;
    name: string;
    version: string;
    memcached: Memcached;
  }

  export interface Context {
    model: Model;
  }
}
