const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DBpassword = process.env.MONGODB_PASSWORD;

const Connect = mongoose.connect(
//  `mongodb+srv://Sumit0309:${DBpassword}@cluster0.puuiszq.mongodb.net/Estate?retryWrites=true&w=majority&appName=Cluster0`
`mongodb+srv://admin:${DBpassword}@cluster0.yg4aa.mongodb.net/todo-app-database`
);

module.exports = Connect;
 