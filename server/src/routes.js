const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AutenticationControllerPolicy')
const AdControllerPolicy = require('./policies/AdControllerPolicy')
const AdController = require('./controllers/AdController')

module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)

    app.post('/login', AuthenticationController.login)

    app.post('/createAd', AdControllerPolicy.create , AdController.post)

    app.get('/allAds', AdController.index)
    
    app.post('/userAds', AdController.deleteAd)
    
    app.patch('/editAd', AdController.editAd)
}