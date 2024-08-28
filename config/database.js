import Sequelize  from "sequelize";

const db = new Sequelize('travelagency','root','15042004',{
    host: '127.0.0.1',
    port:  '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool:{
        max: 5,
        min:1,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
})

export default db