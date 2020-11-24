const {check} = require('express-validator');

module.exports = [
    check('name')
        .isString()
        .matches(/^[A-Za-z ]+$/i)
        .isLength({min:3,max:100})
        .withMessage('Please Enter Valid Name( only alphabet can be used)'),
    check('email')
        .isEmail()
        .withMessage('Please enter a valid Email')
        .normalizeEmail(),
    check('mobile')
        .isString()
        .isNumeric()
        .isLength({min:10,max:10})
        .withMessage('Please Enter 10 digit mobile number'),
    check('addressLine1')
        .isString()
        .isLength({min:3,max:100})
        .withMessage('Please Enter Valid Address'),
    check('addressLine2')
        .isString()
        .isLength({min:3,max:100})
        .withMessage('Please Enter Valid Address'),
    check('city')
        .isString()
        .isAlphanumeric()
        .isLength({min:3,max:100})
        .withMessage('Please Enter Valid City'),
    check('state')
        .isString()
        .isAlpha()
        .isLength({min:3,max:100})
        .withMessage('Please Enter Valid State.'),
    check('pincode')
        .isString()
        .isNumeric()
        .isLength({min:6,max:6})
        .withMessage('Please Enter 6 digit Pincode')
];