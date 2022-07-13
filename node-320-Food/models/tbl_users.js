import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_users extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    username: {
      type: DataTypes.STRING(125),
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
  }
}
