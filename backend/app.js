const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(bodyParser.json());

app.post('/serverdata', (req, res) => {
    const myArray = req.body;
    console.log(myArray);
    res.json({ message: 'Array received' });
  try {

    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        },
        tls:{
            rejectUnauthorized: false,  
            ciphers: "SSLv3" 
        } 
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: "maheshbabu09.amb@gmail.com",
        subject: "Sending Email With React And Nodejs",
        html: '<h1>Congratulation</h1> <h1> You successfully sent Email </h2>'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error" + error)
        } else {
            console.log("Email sent:" + info.response);
            res.status(201).json({status:201,info})
        }
    })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});

app.get('/',(req,res)=>{
    res.send("Running");
});
app.listen(5000, ()=>{
    console.log("Server is listening");
});