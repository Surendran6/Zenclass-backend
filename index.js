const mentorRouter = require('./Routers/MentorRouter')
const studentRouter = require('./Routers/StudentRouter')
const mongoose = require('mongoose')
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());  /* To avoid cross origin error */

app.use(express.json());  

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URL;

 mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
},err=>{
    if(err) console.log(`Error in DB connection ${err}`)
    console.log('mongoDb connectin succeeded')
})

app.get('/',(req,res) => res.send(`
<div>
<p> In Home Page </p>

</div>
`))

app.use('/Mentors',mentorRouter);
app.use('/Students',studentRouter);

app.listen(PORT, () => console.log(`Server started in the port `))
