const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

const ShortController = require('./controllers/ShortController')

const RestaurantController = require('./controllers/RestaurantController')

module.exports = (app) => {
    /* RESFUL Api for users management */
    // get all user
    //app.get('/users',isAuthenController,UserController.index),
    app.get('/users',isAuthenController,UserController.index),

    // create user
    app.post('/user',UserController.create),

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)

    // delete user
    app.delete('/user/:userId',UserController.remove)

    // get user by id
    app.get('/user/:userId',UserController.show)

    app.post('/login',UserAuthenController.login)

    app.post('/singup',UserAuthenController.singup)


    // get all Restaurant
    app.get('/restaurants',isAuthenController,RestaurantController.index),

    // create Restaurant
    app.post('/restaurant',RestaurantController.create),

    // edit Restaurant
    app.put('/restaurant/:restaurantId', RestaurantController.put)

    // delete Restaurant
    app.delete('/restaurant/:restaurantId',RestaurantController.remove)
    
    // get Restaurant by id
    app.get('/restaurant/:restaurantId',RestaurantController.show)



    // get all short
    app.get('/shorts',ShortController.index),

    // create short
    app.post('/short',ShortController.create),

    // edit short
    app.put('/short/:shortId', ShortController.put)

    // delete short
    app.delete('/short/:shortId',ShortController.remove)
    
    // get shorts by id
    app.get('/short/:shortId',ShortController.show)


    
}