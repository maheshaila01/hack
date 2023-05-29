const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const app = express();
const mongoose = require("mongoose");
const Data = require('./models/data');

require("dotenv").config();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}


const dbURI='mongodb+srv://mahesh:mahesh12345@cluster0.vazgqqb.mongodb.net/';

mongoose.connect(dbURI,{useNewUrlParser: true,useUnifiedTopology: true})
 .then((result)=> console.log("DB connected"))
 .catch((err)=> console.log("error in connecting to database"));



app.use(cors(corsOptions))
app.use(bodyParser.json());

app.post('/serverdata',(req,res)=>{
    const data = new Data(req.body);
    console.log(req.body);
    data.save()
        .then(result => {
          console.log("Data added in database");
        })
        .catch(err => {
            console.log(err);
        });
});
app.get('/data',(req,res)=>{
    Data.find().sort({ createdAt: -1 })
    .then(result => {
      return res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});
app.get('/',(req,res)=>{
    res.send("Running");
});
app.listen(5000, ()=>{
    console.log("Server is listening");
});





// app.post('/serverdata', (req, res) => {
//     const data = req.body;
//     console.log(data);
//     res.json({ message: 'Array received' });
//   try {

//     const transporter = nodemailer.createTransport({
//         service: "hotmail",
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASS
//         },
//         tls:{
//             rejectUnauthorized: false,  
//             ciphers: "SSLv3" 
//         } 
//     });

//     let html = '<h2>Servers Data which are down, Hurry Up and fix them !:</h2><ul>';

//     data.forEach(element => {
//     html += `<li>Name: ${element.Name}`;
//     });

//     html += '</ul>';
//     const mailOptions = {
//         from: process.env.EMAIL,
//         to: "maheshbabu09.amb@gmail.com",
//         subject: "Sending Email With React And Nodejs",
//         html: html
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log("Error" + error)
//         } else {
//             console.log("Email sent:" + info.response);
//             res.status(201).json({status:201,info})
//         }
//     })

//     } catch (error) {
//         console.log("Error" + error);
//         res.status(401).json({status:401,error})
//     }
// });