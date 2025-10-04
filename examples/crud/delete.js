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
    let user1  = await User.findByPk(1);
    await user1.destroy();//-----روش اول  جهت حذف کردن دیتا
    user1 = await User.findByPk(1);//----------------------------یافتن یک کاربر با شناسه 1
    if(!user1){
        console.log("delete user with id 1 successfully");
    }else{
        console.log("delete user with id 1 failed");
    }
    //--------روش دوم حذف کردن دیتا
    await User.destroy({
        where: {
            id: 2
        }
    });
    user1 = await User.findByPk(2);//----------------------------یافتن یک کاربر با شناسه 2
    if(!user1){
        console.log("delete user with id 2 successfully");
    }else{
        console.log("delete user with id 2 failed");
    }
    //--------روش سوم حذف کردن دیتا
    await User.destroy({
        where: {
            username: 'akbapki09'
        }
    });
    user1 = await User.findOne({where:{username:'akbapki09'}});//----------------------------یافتن یک کاربر با نام کاربری akbapki09
    if(!user1){
        console.log("delete user with username akbapki09 successfully");
    }else{
        console.log("delete user with username akbapki09 failed");
    }
    //--------روش چهارم حذف کردن دیتا
    await User.destroy({
        where: {
            age: {
                [Op.lt]: 30//----------------------------حذف کاربرانی که سن آنها کمتر از 30 سال است
            }
        }
    });
    user1 = await User.findAll({where:{age:{[Op.lt]:30}}});//----------------------------یافتن همه کاربران با سن کمتر از 30 سال
    if(user1.length === 0){
        console.log("delete users with age less than 30 successfully");
    }else{
        console.log("delete users with age less than 30 failed");
    }
    //--------روش پنجم حذف کردن دیتا
    await User.destroy({
        where: {
            age: {
                [Op.gt]: 30//----------------------------حذف کاربرانی که سن آنها بیشتر از 30 سال است
            }
        }
    });
    user1 = await User.findAll({where:{age:{[Op.gt]:30}}});//----------------------------یافتن همه کاربران با سن بیشتر از 30 سال
    if(user1.length === 0){
        console.log("delete users with age greater than 30 successfully");
    }else{
        console.log("delete users with age greater than 30 failed");
    }
    //--------روش ششم حذف کردن دیتا
    await User.destroy({
        where: {
            age: {
                [Op.between]: [20, 30]//----------------------------حذف کاربرانی که سن آنها بین 20 تا 30 سال است
            }
        }
    });
    user1 = await User.findAll({where:{age:{[Op.between]:[20,30]}}});//----------------------------یافتن همه کاربران با سن بین 20 تا 30 سال
    if(user1.length === 0){
        console.log("delete users with age between 20 and 30 successfully");
    }else{
        console.log("delete users with age between 20 and 30 failed");
    }
    //--------روش هفتم حذف کردن دیتا
    await User.destroy({
        where: {
            age: {
                [Op.or]: [{[Op.lt]: 20}, {[Op.gt]: 30}]//----------------------------حذف کاربرانی که سن آنها کمتر از 20 یا بیشتر از 30 سال است
            }
        }
    });
    user1 = await User.findAll({where:{age:{[Op.or]:[{[Op.lt]:20}, {[Op.gt]:30}]}}});//----------------------------یافتن همه کاربران با سن کمتر از 20 یا بیشتر از 30 سال
    if(user1.length === 0){
        console.log("delete users with age less than 20 or greater than 30 successfully");
    }else{
        console.log("delete users with age less than 20 or greater than 30 failed");
    }
    //--------روش هشتم حذف کردن دیتا
    await User.destroy({
        where: {
            age: {
                [Op.not]: 30//----------------------------حذف کاربرانی که سن آنها برابر با 30 سال نیست
            }
        }
    });
    user1 = await User.findAll({where:{age:{[Op.not]:30}}});//----------------------------یافتن همه کاربران با سن برابر با 30 سال
    if(user1.length === 0){
        console.log("delete users with age not equal to 30 successfully");
    }else{
        console.log("delete users with age not equal to 30 failed");
    }
    //--------روش نهم حذف کردن دیتا
    await User.destroy({
        where: {
            age: {
                [Op.in]: [20, 30, 40]//----------------------------حذف کاربرانی که سن آنها برابر با 20 یا 30 یا 40 سال است
            }
        }
    });
    user1 = await User.findAll({where:{age:{[Op.in]:[20,30,40]}}});//----------------------------یافتن همه کاربران با سن برابر با 20 یا 30 یا 40 سال
    if(user1.length === 0){
        console.log("delete users with age in [20, 30, 40] successfully");
    }else{
        console.log("delete users with age in [20, 30, 40] failed");
    }
    //--------روش دهم حذف کردن دیتا
    await User.destroy({
        where: {
            age: {
                [Op.notIn]: [20, 30, 40]//----------------------------حذف کاربرانی که سن آنها برابر با 20 یا 30 یا 40 سال نیست
            }
        }
    });
    user1 = await User.findAll({where:{age:{[Op.notIn]:[20,30,40]}}});//----------------------------یافتن همه کاربران با سن برابر با 20 یا 30 یا 40 سال نیست
    if(user1.length === 0){
        console.log("delete users with age not in [20, 30, 40] successfully");
    }else{
        console.log("delete users with age not in [20, 30, 40] failed");
    }
    //--------روش یازدهم حذف کردن دیتا
    await User.truncate()
    await User.create({
        firstname: 'mosayeb',
        lastname: 'alipour',
        username: 'mosayeb',
        bio: 'hello world',
        age: 39,
        birthday: new Date("1986-04-04")
    });//----------------------------حذف تمام کاربران و ایجاد یک کاربر جدید
    user1 = await User.findAll();//----------------------------یافتن همه کاربران
    if(user1.length === 1){//----------------------------اگر تعداد کاربران برابر با 1 باشد یعنی فقط یک کاربر وجود دارد
        console.log("truncate users successfully");
    }else{
        console.log("truncate users failed");
    }
}

main();//----------------------------اجرای تابع اصلی