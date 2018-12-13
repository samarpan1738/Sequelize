const {db,student}=require('./models');
const task=async()=>
{
    await db.sync()



    const students=await student.findAll();
    students.forEach(s=>console.log(
        `name: ${s.dataValues.name} \t age:-${s.dataValues.age}
        `
    ))
}
task();