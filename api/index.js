const express=require('express')
const app=express()
const authRoute=require('./routes/auth')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const tokenAuth=require('./tokenAuth')
const cors=require("cors")


const port=process.env.PORT||5000
dotenv.config()

app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoute)

// connection to database
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Connected to db'))
.catch((err)=>console.log(err));

// handling cors errors
// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});
// ************************************

app.get('/',(req,res)=>{
    res.send("Its working")
})

// authentication endpoint   (just add the token auth  )
app.get('/auth-endpoint',tokenAuth,(req,res)=>{
    res.json({message:"You are authorised to access me"})
}) 

app.listen(port,()=>{
    console.log(`App is listening at http://localhost:${port}`)

})
    