import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_iolist extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    io_seq: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    io_date: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    io_time: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    io_pname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    io_dname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    io_dceo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    io_inout: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    io_qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    io_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_iolist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "io_seq" },
        ]
      },
    ]
  });
  }
}
