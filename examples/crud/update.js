const {DataTypes, Op, where, sql} = require("@sequelize/core");
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
    firstname: 'namiar',
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
    firstname: 'hiuhkh',
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
    await User.sync({ force: true }).then(()=>{
        console.log("The table for the User model was just (re)created!");
    });
    await User.bulkCreate(userList);
    // const user1 = await User.findOne({where:{id:1}});//----------------------------یافتن یک کاربر با شناسه 1
    // user1.firstname = "Lawyer Mosayeb";//----------------------------ویرایش نام کوچک کاربر
    // user1.lastname = "Alipour";//----------------------------ویرایش نام خانوادگی کاربر
    // user1.age = 39;//----------------------------ویرایش سن کاربر
    // await user1.save();//----------------------------ذخیره تغییرات در دیتابیس
    // await user1.reload();//----------------------------بارگذاری مجدد کاربر از دیتابیس
    // console.log("User 1 updated:", user1.toJSON());//----------------------------نمایش کاربر ویرایش شده
    //----------**********************//----------------------------روش دوم ویرایش کاربر
    const user2 = await User.findOne({where:{id:2}});//----------------------------یافتن یک کاربر با شناسه 2
    await user2.update({
        firstname: "Engineer Ali",//----------------------------ویرایش نام کوچک کاربر
        lastname: "Alipour",//----------------------------ویرایش نام خانوادگی کاربر
        age: 36//----------------------------ویرایش سن کاربر
    });
    await user2.reload();//----------------------------بارگذاری مجدد کاربر از دیتابیس
    console.log("User 2 updated:", user2.toJSON());//----------------------------نمایش کاربر ویرایش شده
    //----------**********************//----------------------------روش سوم ویرایش کاربر
    await User.update(
        {bio: "Hello World, I am new user"},//----------------------------مقدار جدید برای فیلد بایو
        {where: {
            age:{[Op.lt]:30}//----------------------------ویرایش بایو برای کاربرانی که سن آنها کمتر از 30 سال است
        }}
    );
    const list = await User.findAll({where:{age:{[Op.lt]:30}},raw:true});//----------------------------یافتن تمام کاربران با سن کمتر از 30 سال
    // console.log("Users with age less than 30:", list.map(u=>u.toJSON()));//----------------------------نمایش کاربران ویرایش شده   
    console.log(list);
}

main();//----------------------------اجرای تابع اصلی