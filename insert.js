const model=require('./models');

const task= async ()=>{
    try{
        await model.db.sync();
        for(let i=0;i<10;++i)
        await model.student.create(
            {
                name:['Samarpan','arnav','harshit','rishabh','rohan','neha','garima','thomas','tom','dick'][parseInt(Math.random()*10)],
                age:10+parseInt(Math.random()*10)
            }
        )
    }
    catch(e){
        console.error(e);
    }
}
task();