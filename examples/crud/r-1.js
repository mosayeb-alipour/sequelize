const {DataTypes, Op} = require("@sequelize/core");
const {sequelize} = require("../../configs/db.config");
const userList = [{
    firstname: 'mosayeb',
    lastname: 'alipour',
    username: 'mosayeb',
    bio: 'hello world',
    age: 39,
    birthday: new Date("1986-04-04")
},
{
    firstname: 'ali',
    lastname: 'alipour',
    username: 'ali',
    bio: 'hello world',
    age: 35,
    birthday: new Date("1988-04-04")
},
{
    firstname: 'ahmad',
    lastname: 'alipour',
    username: 'ahmad',
    bio: 'hello world',
    age: 32,
    birthday: new Date("1991-04-04")
},
{
    firstname: 'akbar',
    lastname: 'alipour',
    username: 'akbar',
    bio: 'hello world',
    age: 28,
    birthday: new Date("1995-04-04")
}];//----------------------------لیست کاربران
const User = sequelize.define('user-list', {
    firstname: DataTypes.STRING(50),
    lastname: DataTypes.STRING(50),
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    bio: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    birthday: DataTypes.DATE
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
});//----------------------------تعریف مدل کاربر
async function main() {
    await User.sync({ force: true });
    const result = await User.bulkCreate(userList);
// const users = await User.findAll();
// for (const user of users) {
//     console.log(user.dataValues); 
// }
const users = await User.findAll({
    where:{age:{
        // [Op.gt]:38//----------------فیلتر سن بزرگتر از 38
        [Op.between]:[30,40]//----------------فیلتر سن بین 30 تا 40
        // [Op.in]:[28,32]//----------------فیلتر سن 28 یا 32
        // [Op.like]:'%a%'//----------------فیلتر نام کاربری شامل حرف a
        // [Op.and]:[{age:{[Op.gte]:30}},{age:{[Op.lte]:40}}]//----------------فیلتر سن بزرگتر مساوی 30 و کوچکتر مساوی 40
        // [Op.or]:[{age:{[Op.gte]:30}},{age:{[Op.lte]:28}}]//----------------فیلتر سن بزرگتر مساوی 30 یا کوچکتر مساوی 28
        // [Op.not]:38//----------------فیلتر سن غیر از 38
        // [Op.get]:30//----------------فیلتر سن بزرگتر مساوی 30
    }},
    limit:1,//-----------------------------محدود کردن تعداد رکوردهای بازگشتی
    offset:1,//-----------------------------رد شدن از روی چند رکورد اول
     raw: true });//----------------------------دریافت رکوردها به صورت آبجکت خام
console.log(users);

}//----------------------------ایجاد چندین رکورد
main();//----------------------------اجرای تابع اصلی