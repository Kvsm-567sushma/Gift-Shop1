const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Sushma:567sushma@in-aws.ulgcr.mongodb.net/gift-shop?retryWrites=true&w=majority&appName=In-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')