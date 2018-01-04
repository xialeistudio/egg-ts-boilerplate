"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.default = (app) => {
    return app.model.define('App', {
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
