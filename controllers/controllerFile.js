const  user = require('../model/user.model');
const {validationResult} = require('express-validator');
const AppError = require('../util/appErrors');

//function for registering new user
exports.registerUser = async(req,res,next)=>{
    const error = validationResult(req).errors;
    if(error[0]==null)    
    { let findUser = await user.findOne({email:`${req.body.email}`});
        if(findUser) return next(new AppError("Already Registered",401)); 
        const newUser = new user({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            addressLine1:req.body.addressLine1,
            addressLine2:req.body.addressLine2,
            city:req.body.city,
            state:req.body.state,
            pincode:req.body.pincode
        });
    await newUser.save().then(()=>{
        return res.status(200).send({message:'User Registered'});
    }).catch(err=>{
        return next(new AppError(err,401));
    })
    }
    else{
        return res.send({message:'Their Are Some Error In Request',error});
    }  
}


//function for getting list all registered users
exports.listUsers = (req,res)=>{
    user.find().then(result=>{
        return res.status(200).send({message:'List of Members',result});
    }).catch(err=>{
        return next(new AppError(err,401));
    })
}

