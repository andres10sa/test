const axios = require("axios");
const fs = require("fs");

let users={}

const getUsers = async()=>{
    const response =  await axios.get("https://randomuser.me/api/?results=10");
    users.users=response.data.results;
    fs.writeFileSync("users.json",JSON.stringify(users));
}
getUsers();


