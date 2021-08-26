const ResetPasswordEmail = require("../Mails/ResetPasswordEmail");
const ResetPassword = require("../Models/ResetPassword");


class ResetPassObserver
{
    preResetPassword (data) 
    {
        let resetPasswordEmail =  new ResetPasswordEmail({user:data.user, pincode: data.pincode})

        resetPasswordEmail.send();
    }

    resetPassword (data) 
    {
        ResetPassword.delete(data)
    }
}

module.exports = new ResetPassObserver