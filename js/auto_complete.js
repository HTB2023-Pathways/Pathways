const dotenv = require("dotenv")
dotenv.config()

const key = process.env.SECRET_KEY;

console.log(key);