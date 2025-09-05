const {Model,DataTypes} = require("@sequelize/core");
const {sequelize} = require("../configs/db.config");
const User = sequelize.define('order', {
    username: DataTypes.STRING,
    product: DataTypes.STRING ,
    price:  DataTypes.FLOAT,
    number: DataTypes.INTEGER // <-- اضافه کردن فیلد سن
},{
    sequelize,//وقتی از سکیولایز استفاده می کنم updateAt و createAt به صورت خودکار اضافه می شود
    timestamps: true, // اینجا را اضافه کنید تا تاریخ ایجاد و بروزرسانی خودکار شود
    modelName: 'order',
    updatedAt: "update_date",//تغییر نام ستون updateAtبه نام دلخواه
    createdAt: false,//جهت عدم ایجاد ستون زمان ایجاد
    freezeTableName:true,
    tableName:"order-book"
});
async function main(){
    await User.sync({force:true})
    const user = await User.create({
        username: 'mosayeb alipour',
        product: 'book nodjs',
        price: 100,
        number: 2
        
    });
    console.log(user.dataValues);
}
main();