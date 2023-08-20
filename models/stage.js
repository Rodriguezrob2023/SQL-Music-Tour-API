'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage.init({
    stage_id:  DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    capacity: DataTypes.INTEGER,
    manager: DataTypes.STRING,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};