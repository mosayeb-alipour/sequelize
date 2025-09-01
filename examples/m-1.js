const {Model,DataTypes} = require("@sequelize/core");
const {sequelize} = require("../configs/db.config");
class User extends Model {}
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE // <-- اینجا را اصلاح کنید
},{
    sequelize,
    modelName: 'user'
});
async function main(){
    await User.sync({force:true})
    const user = await User.create({
        username: 'mosayeb',
        birthday: new Date(1995, 11, 17) // <-- و اینجا را
    });
    console.log(user.dataValues);
}
main();