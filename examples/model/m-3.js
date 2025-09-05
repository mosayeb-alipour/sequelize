const {Model,DataTypes} = require("@sequelize/core");
const {sequelize} = require("../../configs/db.config");
const Blog = sequelize.define('blog', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,},
        slug:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:"slug_idex"
        },
        content:{
            type:DataTypes.TEXT,
            allowNull:true,
            defaultValue:"no content"
        },
        
        author:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        image:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        like:{
            type:DataTypes.INTEGER,
            defaultValue:0,
        },
        show:{
            type:DataTypes.BOOLEAN,
            defaultValue:false,
        }
},{
    timestamps:false,
    freezeTableName:true
});
async function main(){
    await Blog.sync({force:true})
    const blog = await Blog.create({
        title: 'first blog',
        slug: 'first-blog',
        content: 'this is my first blog',
        author: 'mosayeb alipour',
        image: 'https://mysite/image.jpg',
        like: 10,
        show: true
        
    });
    blog.show = false;
    blog.save();
    console.log(blog.dataValues);
    await blog.reload();//جهت جلوگیری از باگ عدم بارگزاری فیلد تغییر داده شده استفاده می کنم 
}
main();