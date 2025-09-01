const {Sequelize} = require("@sequelize/core")
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    user:'root',
    password: 'alipour65',
    database: 'nodejs',
    logging: false
});
sequelize.authenticate().then(async() => {
    await sequelize.sync({alter:true})
    console.log("Database connected...")
}).catch(err => {
    console.log("Error: " + err)
})
module.exports ={
    sequelize
}