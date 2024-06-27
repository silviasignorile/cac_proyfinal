require("dotenv").config ();

const express= require("express");
const app = express();


app.get('/',(req, res)  => {
    res.send("Hola desde Express")
});

const PORT = process.env.PORT||3001;

app.listen(PORT,()=> console.log ('http.localhost:${PORT}'));

