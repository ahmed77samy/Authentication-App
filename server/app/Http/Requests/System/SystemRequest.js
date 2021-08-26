const { body, validationResult } = require('express-validator');

class SystemRequest
{
    static roles () {
        return [
            body('Sname')
            .isLength({ min: 5 }).withMessage('must be at least 5 chars long')
        ]
    }
}

module.exports = SystemRequest.roles()


