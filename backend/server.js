
require('dotenv/config')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 4000;
const app = express();
const goodRoutes = express.Router();


let GoodH = require('./model');

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)




app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Good_health',{useNewUrlParser:true,useUnifiedTopology: true});
     const connection = mongoose.connection;
     connection.once('open',()=>{
     console.log('MongoDb database connection establised successfully');
    });


    goodRoutes.route('/').get((req,res)=>{
        GoodH.find((err,goods)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.json(goods);
            }
        });
    });


    app.get('/login', (req,res) => {
        if (req.query.phonenumber) {
           client
           .verify
           .services(process.env.SERVICE_ID)
           .verifications
           .create({
               to: `+${req.query.phonenumber}`,
               channel:'sms' 
           })
           .then( console.log(`${req.query.phonenumber}`)
           ).catch(err=>console.log(err))
        } else {
           res.status(400).send({
               message: "Wrong phone number :(",
               phonenumber: req.query.phonenumber,
               data
           })
        }
   })

    goodRoutes.route('/add').post((req,res)=>{
        let good = new GoodH(req.body);
        good.save()
        .then(good=>{
            res.status(200).json({'good': 'User added successfully'});
        })
        .catch(err=>{
            res.status(400).send('adding new user failed');
        });
    });

    app.use('/good',goodRoutes);

app.listen(PORT,()=>{
    console.log("Server is running on PORT: " + PORT);
})
