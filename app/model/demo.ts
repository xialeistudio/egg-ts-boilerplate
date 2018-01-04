import { Application } from 'egg';
import * as Sequelize from 'sequelize';

export interface DemoAttributes {
  id?: number;
  name?: string;
  created_at?: Date;
}

export interface DemoInstance extends Sequelize.Instance<DemoAttributes>, DemoAttributes {

}

export default (app: Application) => {
  return app.model.define<DemoInstance, DemoAttributes>('App', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: Sequelize.STRING(20),
    created_at: Sequelize.DATE,
  }, {
    timestamps: false,
    tableName: 'm_demo',
    hooks: {
      beforeCreate(attr) {
        attr.created_at = new Date();
      },
    },
  });
};
