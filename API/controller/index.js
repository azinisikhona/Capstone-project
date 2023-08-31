const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const path = require('path')

//Import all model's objects
const {users} = require('../models')


//======= User's router =======//
routes.get('/users', (req, res) => {
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res) => {
    users.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(), (req, res) => {
    users.register(req, res)
})

// routes.put('/user/:id', bodyParser.json(), (req, res) => {
//     users.updateUser(req, res)
// })

routes.patch('/user/:id', bodyParser.json(), (req, res) =>{
    users.updateUsers(req, res)
})
routes.delete('/user/:id', (req, res) => {
    users.deleteUser(req, res)
})

module.exports = {
    express, routes
}