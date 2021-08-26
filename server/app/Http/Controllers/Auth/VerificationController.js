const User = require("../../../Models/User")
const ResponseServiceProvider = require("../../../Providers/ResponseServiceProvider")

class VerificationController 
{
    /**
     * Email Verification 
     * Find user by verification_code
     * - - - Not Found if Not Exist
     * Make sure That he hasn't been verified before
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async emailVerification (req, res) 
    {
        try {

            let user = await User.getByVerificationCode(req.params.verification_code)

            if (!isNaN(user[0])) 
                return ResponseServiceProvider.notFoundResource(res)
            
            if (user[0][0].email_verified_at != null) {
                
                return res.status(200).json({
                    success : true,
                    payload : 'Your email has already been verified before'
                })
            }

            let activate = await User.activateEmailVerification(user[0][0].id)

            return res.status(200).json({
                success : true,
                payload : "Your account has been verified"
            })

        } catch (error) {
            return ResponseServiceProvider.serverError(res, error)
        }
    }
}

module.exports = new VerificationController