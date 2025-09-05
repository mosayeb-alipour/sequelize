const {Model,DataTypes} = require("@sequelize/core");
const {sequelize} = require("../../configs/db.config");
const Profile = sequelize.define('profile', {
    fullname: DataTypes.STRING(50),
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: DataTypes.STRING(16)
},{
    sequelize,//وقتی از سکیولایز استفاده می کنم updateAt و createAt به صورت خودکار اضافه می شود
    timestamps: true, // اینجا را اضافه کنید تا تاریخ ایجاد و بروزرسانی خودکار شود
    updatedAt: "update_date",//تغییر نام ستون updateAtبه نام دلخواه
    createdAt: false,//جهت عدم ایجاد ستون زمان ایجاد
    freezeTableName:true,
});
async function main(){//--------------------------------------روش اول ایجاد رکورد
    await Profile.sync({force:true})
    const profile1 = await Profile.create({
        fullname: 'mosayeb alipour',
        username: 'mosayeb',
        password: '34jnfe3'
        
    },{
        fields:["fullname","username"]
    });
    console.log(profile1.dataValues);
    //---------------------------------------------------روش دوم ایجاد رکورد
    const profile2 = Profile.build({
        fullname: 'ali alipour',
        username: 'mosayeb1',
        password: '34jnfe3'
    });
    console.log(profile2 instanceof Profile); // true
    await profile2.save().catch(err=>console.log(JSON.stringify(err.errors))); //نحوه نمایش خطا
    console.log(profile2.dataValues);
    //------------------------------روش سوم ایجاد رکورد
    const result = await Profile.bulkCreate([
        { fullname: 'ali alipour', username: 'mosayeb2', password: '34jnfe3' },
        { fullname: 'ahmad alipour', username: 'mosayeb3', password: '34jnfe3' },
        { fullname: 'akbar alipour', username: 'mosayeb4', password: '34jnfe3' }
    ]);
    let profileList = result.map(r=>r.dataValues);
    console.log(profileList);
    //------------------------------روش چهارم ایجاد رکورد
    const [profile3,created] = await Profile.findOrCreate({
        where: {username:'mosayeb5'},
        defaults:{
            fullname: 'ali alipour',
            password: '34jnfe3'
        },
        fields:["fullname","username"] //محدود کردن فیلدهای درج شده
    });
    console.log(profile3.dataValues,created);
}
main();