const express = require("express")
const app = express()
var port = process.env.port || 3000

app.listen(port, () =>{
    console.log("App listening to: "+port)
});

app.get("/addition", (req, res) =>{
    var number_1 = parseInt(req.query.number1)
    var number_2 = parseInt(req.query.number2)
    var addition = number_1 + number_2
    console.log("Number 1:" +number_1)
    console.log("Number 2:" +number_2)
    console.log("Addition : " +addition)
    res.status(200).json([{
             "number 1": number_1,
              "number 2" : number_2 ,
              "Addition" : addition,
              "Message" : "success",
              "Status" : 200
            }])
});
