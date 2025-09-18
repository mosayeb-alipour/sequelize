const {DataTypes, Op, where} = require("@sequelize/core");
const {sequelize} = require("../../configs/db.config");
const e = require("express");
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
    firstname: 'alia',
    lastname: 'namiar',
    username: 'ali0',
    bio: 'hel boy world',
    age: 23,
    birthday: new Date("2005-04-04")
},
{
    firstname: 'akr',
    lastname: 'ali',
    username: 'akbapki09',
    bio: 'kiayuh njju',
    age: 40,
    birthday: new Date("1999-04-04")
},
{
    firstname: 'akar',
    lastname: 'alipour',
    username: 'akbakklkr',
    bio: 'hello world',
    age: 28,
    birthday: new Date("1995-04-04")
}
,{
    firstname: 'akr',
    lastname: 'mizour',
    username: 'aramoar',
    bio: 'hello jomk',
    age: 40,
    birthday: new Date("1998-04-04")
},{
    firstname: 'hjjk',
    lastname: 'hgh',
    username: 'ahjur',
    bio: 'hello world',
    age: 33,
    birthday: new Date("1997-04-04")
},{
    firstname: 'kjkj',
    lastname: 'aligiugkpour',
    username: 'jyiutv',
    bio: 'hello poipoiobnjlij kjnhjl',
    age: 25,
    birthday: new Date("2000-04-04")
},{
    firstname: 'jkjjkyiurt',
    lastname: 'hiuhkh',
    username: 'hghjkg99',
    bio: 'hello whggdt  jyuiiyug orld',
    age: 22,
    birthday: new Date("2001-04-04")
},{
    firstname: 'akbar',
    lastname: 'alipour',
    username: 'akbkklljpar',
    bio: 'hello world',
    age: 28,
    birthday: new Date("1995-04-04")
},{
    firstname: 'uoijj',
    lastname: 'kjhojh',
    username: 'khggkhj77',
    bio: 'kjbkjnnd  jnfljfhlwef  world',
    age: 20,
    birthday: new Date("1995-04-04")
},{
    firstname: 'hjljdsflwfm',
    lastname: 'juyeiojrij',
    username: 'jkhkjqenjdbiew44',
    bio: 'kjkjnkjnkljnsakjdhaed  world',
    age: 33,
    birthday: new Date("1995-04-04")
},{
    firstname: 'akjhkjhbar',
    lastname: 'alidccjgvyupour',
    username: 'akbhjgughar',
    bio: 'hello jfuyghbyigi',
    age: 28,
    birthday: new Date("1995-04-04")
},{
    firstname: 'akbhhkar',
    lastname: 'alipour',
    username: 'akbkhhjar',
    bio: 'hello kjhkj',
    age: 20,
    birthday: new Date("1995-04-04")
},{
    firstname: 'akhgeebar',
    lastname: 'alipsfgyhyour',
    username: 'akb67gg6ar',
    bio: 'hello hjkjkb',
    age: 30,
    birthday: new Date("1995-04-04")
},{
    firstname: 'akjhghbhjbar',
    lastname: 'alipour',
    username: 'akhjju8bar',
    bio: 'hello whggkggorld',
    age: 48,
    birthday: new Date("1995-04-04")
},{
    firstname: 'akbhuyar',
    lastname: 'alipouuhkryrir',
    username: 'akbyu886ar',
    bio: 'hello world',
    age: 22,
    birthday: new Date("1995-04-04")
},{
    firstname: 'akbahgkjhr',
    lastname: 'alipojhjkhur',
    username: 'akbahgjkhj7788r',
    bio: 'hello wjgkjhorld',
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
// const users = await User.findAll({
//     where:{age:{
        // [Op.gt]:38//----------------فیلتر سن بزرگتر از 38
        // [Op.between]:[30,40]//----------------فیلتر سن بین 30 تا 40
        // [Op.in]:[28,32]//----------------فیلتر سن 28 یا 32
        // [Op.like]:'%a%'//----------------فیلتر نام کاربری شامل حرف a
        // [Op.and]:[{age:{[Op.gte]:30}},{age:{[Op.lte]:40}}]//----------------فیلتر سن بزرگتر مساوی 30 و کوچکتر مساوی 40
        // [Op.or]:[{age:{[Op.gte]:30}},{age:{[Op.lte]:28}}]//----------------فیلتر سن بزرگتر مساوی 30 یا کوچکتر مساوی 28
        // [Op.not]:38//----------------فیلتر سن غیر از 38
        // [Op.get]:30//----------------فیلتر سن بزرگتر مساوی 30
//     }},
//     limit:1,//-----------------------------محدود کردن تعداد رکوردهای بازگشتی
//     offset:1,//-----------------------------رد شدن از روی چند رکورد اول
//      raw: true });//----------------------------دریافت رکوردها به صورت آبجکت خام
// console.log(users);
//-----نمایش دیتا با pagination
// const users = await User.findAll({
//     limit:5,//-----------------تعداد رکورد در هر صفحه
//     offset:(2-1)*5,//-----------------صفحه 2
//     raw:true//----------------------------دریافت رکوردها به صورت آبجکت خام`
// });
// console.log(users);
// const user = await User.findOne({//----------------------------یافتن یک رکورد
//     where:{//----------------------------یافتن یک رکورد با شرط
//     username:'akbkhhjar'
// },raw:true
//     });
//     if(!user){
//         console.log("user not found");
        
//     }else{
//         console.log(user);
//     }
// const user = await User.findByPk(5,{raw:true});//----------------------------یافتن یک رکورد با استفاده از کلید اصلی
// if(!user){
//     console.log("user not found");
// }else{
//     console.log(user);
// }
// const {rows, count} = await User.findAndCountAll({//----------------------------یافتن و شمردن رکوردها
//     where:{
//         age:{
//             [Op.gte]:30//----------------فیلتر سن بزرگتر مساوی 30
//         }
//     },
//     limit:5,//-----------------تعداد رکورد در هر صفحه`
//     offset:0,//-----------------صفحه 1
//     raw:true//----------------------------دریافت رکوردها به صورت آبجکت خام`
// });
// console.log("count:",count);//----------------------------تعداد کل رکوردهای پیدا شده
// console.log("rows:",rows);//----------------------------رکوردهای صفحه جاری
// const count = await User.count({//----------------------------شمردن رکوردها
//     where:{
//         age:{
//             [Op.gte]:20//----------------فیلتر سن بزرگتر مساوی 30
//         }
//     }
// });
// console.log("count age > 39:",count);//----------------------------تعداد کل رکوردهای پیدا شده
// const min = await User.min('age',{
//     where:{
//         age:{
//             [Op.gte]:22//----------------فیلتر سن بزرگتر مساوی 30
//         }
//     }
// });//----------------------------کمترین سن
// console.log("min all data for age:",min);
// const max = await User.max('age');//----------------------------بیشترین سن
// console.log("max all data for age:",max);
// const sum = await User.sum('age');//----------------------------جمع سنین
// console.log("sum all age users:",sum);
const users = await User.findAll({
    attributes:['age',[sequelize.fn('COUNT',sequelize.col('age')),'age_count']],//----------------------------شمارش تعداد کاربران بر اساس سن
    group:['age'],//----------------------------گروه بندی بر اساس سن
    raw:true
});
console.log(users);
const userExclude = await User.findAll({
    attributes:{exclude:['bio','birthday']},//----------------------------حذف ستون های بیو و تاریخ تولد از نتایج
    raw:true    
}
);
console.log(userExclude);
}

main();//----------------------------اجرای تابع اصلی