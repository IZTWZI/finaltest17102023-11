const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

const ShortController = require('./controllers/ShortController')

module.exports = (app) => {
    /* RESFUL Api for users management */
    // get all user
    //app.get('/users',isAuthenController,UserController.index),
    app.get('/users',UserController.index),

    // create user
    app.post('/user',UserController.create),

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)

    // delete user
    app.delete('/user/:userId',UserController.remove)

    // get user by id
    app.get('/user/:userId',UserController.show)

    app.post('/login',UserAuthenController.login)



    app.get('/shorts',ShortController.index),

    app.post('/short',ShortController.create),

    app.put('/short/:shortId', ShortController.put)

    app.delete('/short/:shortId',ShortController.remove)

    app.get('/short/:shortId',ShortController.show)

}