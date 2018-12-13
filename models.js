const sequelize=require('sequelize');
const datatypes=sequelize.DataTypes;
const db=new sequelize('mytestdb','myuser','mypass'
,{
    host:'localhost',
    dialect:'mysql'
});
//Made table==>students in 'mytestdb' with 2 columns name and age
//student is a MODEL
const student=db.define('students',
        {
            name:{
                type:datatypes.STRING(20),
                allowNull:false
            },
        age:{
            type:datatypes.INTEGER(2),
            allowNull:false,
            defaultValue:-1
        }
        }
    )
//{force:true} drops table and then creates new ones
db.sync({alter:true}).then(()=>console.log('database synchronised')).catch(console.error)

exports=module.exports={db,student}