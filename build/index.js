"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./models/User");
var user = new User_1.User({ name: "Joe", age: 20 });
console.log(user.get("name"));
console.log(user.get("age"));
