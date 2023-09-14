const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const path = require('path')

//Import all model's objects
const {users, showroom, orders, suppliers} = require('../models')


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
routes.post('/login', bodyParser.json(), (req, res) => {
    users.login(req, res)
})

routes.patch('/user/:id', bodyParser.json(), (req, res) =>{
    users.updateUsers(req, res)
})
routes.delete('/user/:id', (req, res) => {
    users.deleteUser(req, res)
})

//======= Showroom's router =======//
routes.get('/showroom', (req, res) =>{
    showroom.fetchShowroom(req, res)
})


routes.get('/car/:id', (req, res) =>{
    showroom.fetchCar(req, res)
})

routes.post('/addcar', bodyParser.json(), (req, res) =>{
    showroom.addCar(req, res)
})


routes.patch('/car/:id', (req, res) => {
    showroom.updateCar(req, res)
})

routes.delete('/car/:id', (req, res) => {
    showroom.deleteCar(req, res)
})

//======= Supplier's router =======//
routes.get('/suppliers', (req, res) =>{
    suppliers.fetchSuppliers(req, res)
})


routes.get('/supplier/:id', (req, res) =>{
    suppliers.fetchSuppliers(req, res)
})

routes.post('/addsupplier', (req, res) =>{
    suppliers.addSupplier(req, res)
})


routes.patch('/supplier/:id', (req, res) => {
    suppliers.updateSupplier(req, res)
})

routes.delete('/supplier/:id', (req, res) => {
    suppliers.deleteSupplier(req, res)
})

//======= Supplier's router =======//
routes.get('/orders', (req, res) =>{
    orders.fetchOrders(req, res)
})


routes.get('/order/:id', (req, res) =>{
    orders.fetchOrder(req, res)
})

routes.post('/addorder', (req, res) =>{
    orders.addOrder(req, res)
})


routes.patch('/order/:id', (req, res) => {
    orders.updateOrder(req, res)
})

routes.delete('/order/:id', (req, res) => {
    orders.deleteOrder(req, res)
})

module.exports = {
    express,
    routes
}
