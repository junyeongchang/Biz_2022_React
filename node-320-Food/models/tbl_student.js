import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_student extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ST_NUM: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    ST_NAME: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ST_DEPT: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ST_GRADE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ST_TEL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ST_ADDR: {
      type: DataTypes.STRING(125),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_student',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ST_NUM" },
        ]
      },
    ]
  });
  }
}
