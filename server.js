const express = require('express');
const mongoose = require('mongoose');
const AppError = require('./util/appErrors');
const appRoute = require('./routes/routeFile');
const {globalErrorController} = require('./util/errors');
require('dotenv').config();


//setting up Express App 
const app=express();

app.use(express.json());

//this line must be included afer response header
app.use('/api',appRoute);


//if wrong url is passed then this will be executed
app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
app.use(globalErrorController);


//database Connection and App starting
mongoose.connect(process.env.DATABASE_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    app.listen(process.env.PORT);
    console.log('connected at port '+process.env.PORT);
}).catch(err=>{console.log(err)});