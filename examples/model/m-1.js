const {Model,DataTypes} = require("@sequelize/core");
const {sequelize} = require("../../configs/db.config");
class User extends Model {}
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE // <-- اینجا را اصلاح کنید
},{
    sequelize,//وقتی از سکیولایز استفاده می کنم updateAt و createAt به صورت خودکار اضافه می شود
    timestamps: true, // اینجا را اضافه کنید تا تاریخ ایجاد و بروزرسانی خودکار شود
    modelName: 'user',
    updatedAt: "update_date",//تغییر نام ستون updateAtبه نام دلخواه
    createdAt: false,//جهت عدم ایجاد ستون زمان ایجاد
});
async function main(){
    await User.sync({force:true})
    const user = await User.create({
        username: 'mosayeb alipour',
        birthday: new Date("1986-04-04") // <-- و اینجا را        
    });
    console.log(user.dataValues);
}
main();