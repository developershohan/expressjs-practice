import express from "express"
import dotenv from "dotenv"
import userRouter from "./Routers/users.js"

// environment var

dotenv.config()
const PORT = process.env.PORT || 6060

// express init
const app = express()

// use express middleware

app.use(express.json())
app.use(express.urlencoded({extended: false }))

// static folder
app.use(express.static("public"))


app.use(userRouter)



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})