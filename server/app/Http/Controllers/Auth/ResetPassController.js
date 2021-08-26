const ResetPassword = require("../../../Models/ResetPassword");
const User = require("../../../Models/User");
const ResetPassObserver = require("../../../Observers/ResetPassObserver");
const ResponseServiceProvider = require("../../../Providers/ResponseServiceProvider");


class ResetPassController
{
    /**
     * Handling some operation before reset password 
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async preResetPassword (req, res)  
    {
        try {
            
            // Make sure this email is valid
            let user = await User.getByEmail(req.body.email) 

            if (!isNaN(user[0]))
                return ResponseServiceProvider.notFoundResource(res)
    
            // Create Pincode 
            let pincode = Math.floor(Math.random() * 999999) + 100000;
    
            ResetPassword.create({user_id : user[0][0].id, pincode})

            // Inject Observer 
            ResetPassObserver.preResetPassword({user:user[0][0], pincode})

            return res.status(200).json({
                success : true,
                payload : "Check Your Email"
            })

        } catch (error) {
            return ResponseServiceProvider.serverError(res, error)
        }
    }

    /**
     * Make sure pincode is correct 
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async confirmPincode (req, res)
    {
        try {

            // Make sure this pincode is valid
            let resetpassRow = await ResetPassword.getByPincode(req.body.pincode)

            if (!isNaN(resetpassRow[0])) 
                return ResponseServiceProvider.notFoundResource(res)

            return res.status(200).json({
                success : true,
                payload : "Proceed to the next process"
            })

        } catch (error) {
            return ResponseServiceProvider.serverError(res, error)
        }
    }

    /**
     * Reset Password 
     * Make sure pincode is correct 
     * update password
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async resetPassword (req, res)
    {
        try {

            // Check Pincode 
            let resetpassRow = await ResetPassword.getByPincode(req.body.pincode)

            if (!isNaN(resetpassRow[0])) 
                return ResponseServiceProvider.notFoundResource(res)

            // Change password 
            User.updatePassword(resetpassRow[0][0].user_id, req.body)

            // Inject Observer 
            ResetPassObserver.resetPassword(resetpassRow[0][0].user_id)

            return res.status(200).json({success : true})

        } catch (error) {
            return ResponseServiceProvider.serverError(res, error)
        }
    }
}

module.exports = new ResetPassController