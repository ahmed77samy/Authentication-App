const DB_CONNECTION = require('../../config/database.js');

class ResetPassword
{
    /**
     * Create a new recored 
     * 
     * @param {*} data 
     * @returns 
     */
    static create = data => 
    {
        const {user_id , pincode} = data;

        return DB_CONNECTION.execute( 
            'INSERT INTO reset_passwords (user_id, pincode) VALUES (?,?)',
            [user_id, pincode])
    }

    /**
     * Find reset password row by pincode
     * 
     * @param {*} pincode 
     * @returns 
     */
    static getByPincode = pincode => 
    {
        return DB_CONNECTION.execute( 
            'SELECT * FROM reset_passwords WHERE pincode = ?',
            [pincode])
    }
    
    /**
     * Delete all pincode of spacific user 
     * 
     * @param {*} user_id 
     * @returns 
     */
    static delete = user_id => 
    {
        return DB_CONNECTION.execute( 
            'DELETE FROM reset_passwords WHERE user_id = ?',
            [user_id])
    }
}

module.exports = ResetPassword