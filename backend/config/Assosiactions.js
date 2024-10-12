const User=require('../models/user')
const Product=require('../models/product')
const Cart=require('../models/cart')
const Order =require('../models/order')
const sequelize=require('./db')

const status=process.env.status
console.log(status);

(()=>{

    if(status=='dev'){
        sequelize.sync({
            alter:true
        }) // or { force: true } for recreating tables
      .then(() => console.log('Database synced'))
      .catch(err => console.error('Error syncing database:', err));
    
    }
}

)()


