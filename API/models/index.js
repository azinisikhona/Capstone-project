const Users = require('./Users')
const Showroom = require('./Showroom')
const Suppliers = require('./Suppliers')
const Orders = require('./Orders')

module.exports = {
    users: new Users,
    showroom: new Showroom,
    suppliers: new Suppliers,
    orders: new Orders
}