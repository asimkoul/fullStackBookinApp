const Sequilize=require('sequelize');
const sequelize= new Sequilize ('node-complete','root','Asim@1234567',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;