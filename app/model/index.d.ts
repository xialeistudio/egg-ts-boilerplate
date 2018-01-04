import * as Sequelize from 'sequelize';
import { DemoAttributes, DemoInstance } from './demo';

export default interface Model extends Sequelize.Sequelize {
  Demo: Sequelize.Model<DemoInstance, DemoAttributes>;
}
