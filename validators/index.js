const {body, validationResult } = require('express-validator');

function validator(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const message = Array.from(new Set(errors.array().map(err => `${err.msg}`))).join(', ');
        const error = new Error(message);
        error.status = 400;
        return next(error);
    }
    return next();
}
  

module.exports.adminRegisterValidator = [
    body('firstname').notEmpty().withMessage('firstname field is required'), 
    body('lastname').notEmpty().withMessage('lastfirst field is required'), 
    body('email').notEmpty().withMessage('email field is required'), 
    body('password').notEmpty().withMessage('password field is required'),  
    validator,
];
  
module.exports.loginValidator = [
    body('username').notEmpty().withMessage('username is required'), 
    body('password').notEmpty().withMessage('password is required'),  
    validator,
];
  