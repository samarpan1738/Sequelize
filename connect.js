const sequelize=require('sequelize');
const db=new sequelize('mytestdb','myuser','mypass'
,{
    host:'localhost',
    dialect:'mysql'
});

db.authenticate().then(()=>console.log("connection made")).catch((err)=>console.error(err));
