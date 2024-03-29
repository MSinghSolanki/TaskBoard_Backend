module.exports = (sequelize, DataTypes) => {
  const task_list = sequelize.define("task_list", {
    listing_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    is_deleted: {
      type: DataTypes.INTEGER,
    }
  });

  return task_list;
};
