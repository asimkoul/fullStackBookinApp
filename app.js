const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')

const app=express()

const sequelize=require('./util/database')
const routes=require('./routes/admin')

app.use(bodyParser.json());

app.use(cors())
app.use('/',routes)

sequelize.sync()
.then(result=>{
    app.listen(3000,()=>{
        console.log('server started')
    })
})
.catch(err=> console.log(err))