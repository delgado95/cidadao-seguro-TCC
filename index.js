const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');

const connectionLimit = 10;

const con = mysql.createPool({
	  connectionLimit,
	  host: "fiec-tcc.cmykxbpkdfjz.us-east-2.rds.amazonaws.com",
	  user: "",
	  password: "",
	  database: "cidadaoseguro"
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/cadastro', (req,res) => {
	res.json(req.body);
})

app.post('/login', (req,res) => {
	res.json(req.body);
});

app.listen(3000, () => console.log('Servidor Ligado'));


