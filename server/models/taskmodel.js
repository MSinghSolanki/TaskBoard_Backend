module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    task_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    is_completed: {
      type: DataTypes.INTEGER,
      defaultValue: false,
    },
   is_deleted:{
    type: DataTypes.INTEGER,
    defaultValue: false,
   },
  //  list_id:{
  //   type: DataTypes.INTEGER,
  //  }
  });

  return Task;
};
