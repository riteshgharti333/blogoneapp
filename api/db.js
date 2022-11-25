import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"****",
    database:"blog"
})

db.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Connected to db");
    }
})
