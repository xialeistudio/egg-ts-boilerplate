import { EggAppConfig } from 'egg';

export default (appInfo: EggAppConfig) => {
  return {
    keys: appInfo.name + '_1513755864818_8007',
    middleware: [
      'response',
    ],
    cluster: {
      listen: {
        port: 7001,
        hostname: '0.0.0.0',
        // path: '/var/run/egg.sock',
      },
    },
    // 扩展
    sequelize: {
      dialect: 'mysql',
      database: 'passport',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: 'root',
      operatorsAliases: false,
      pool: { min: 0, max: 20 },
    },
    memcached: {
      servers: ['127.0.0.1:11211'],
      options: { poolSize: 100 },
    },
    security: {
      csrf: {
        ignoreJSON: true,
      },
    },
  };
};
