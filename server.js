const express = require('express')
require('dotenv').config()
const app = express()



app.get("/",async(req, res)=>{
    res.send("Username")

})
 

const port=process.env.PORT 
app.listen(port,async()=>{
    try {
        console.log(`app is running on http://localhost:${port}`)
        
    } catch (error) {
        console.log(error)
    }
}) 
 



