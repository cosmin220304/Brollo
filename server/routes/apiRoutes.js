const registerController = require('../controllers/registerController')
const loginController = require('../controllers/loginController')
const verifyUserController = require('../controllers/verifyUserController')
module.exports = app => {
    app.post('/api/register', registerController.register)
    app.post('/api/login' , loginController )
    app.get('/api/verifyUser', verifyUserController.checkAuth)
}