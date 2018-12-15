const sequelize=require('sequelize');
const db=new sequelize('mytestdb','myuser','mypass'
,{
    host:'localhost',
    dialect:'mysql'
});

//db.authenticate().then(()=>console.log("connection made")).catch((err)=>console.error(err));
async function trial()
{
    try
{    console.log(await  db.authenticate());
}
    catch(e)
    {
        console.error(e)
    }
}
trial();