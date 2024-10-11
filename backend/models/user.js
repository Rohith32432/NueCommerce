const sequelize=require('../config/db')
const { Model, DataTypes } = require('sequelize');
class user extends Model {}


 user.init({
  name:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'customer', // 'admin' or 'customer'
  },
},{
  sequelize, modelName:'User'
})




module.exports=user
