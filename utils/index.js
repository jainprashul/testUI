const validate = require('validator');

const validateSignup = (req, res, next) => {
    const { email, password } = req.body;
    const phone = req.body.phone;
    const errors = {};

    if (!email) {
        errors.email = 'Email is required';
    } else if (!validate.isEmail(email)) {
        errors.email = 'Email is invalid';
    }

    if (!password) {
        errors.password = 'Password is required';
    } else if (!validate.isLength(password, { min: 8 })) {
        errors.password = 'Password must be at least 8 characters';
    }

    if (phone){
        if (!validate.isNumeric(phone)) {
            errors.phone = 'Phone number is invalid \n It should be like: 9123456789';
        }
    }

    if (Object.keys(errors).length) {
        res.status(200).render('signup', {
            errors,
            ...req.body
        });
    } else {
        next();
    }
};


module.exports = {
    validateSignup
}
