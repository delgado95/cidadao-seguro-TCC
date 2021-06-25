const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const mysql = require('mysql');
  
const connectionLimit = 10;

const pool = mysql.createPool({
	connectionLimit,
	  host: "fiec-tcc.cmykxbpkdfjz.us-east-2.rds.amazonaws.com",
	  user: "admin",
	  password: "F!ec2021",
	  database: "cidadaoseguro"
});


const connectionMiddleware = require('./connection-middleware');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(connectionMiddleware(pool));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/cadastro', (req,res) => {
	req.connection.query("INSERT INTO Usuario (Cod_Usu, Senha, Login, Endereco, Nome, Email, Telefone, RG) values (?,?,?,?,?,?,?,?)", [
		req.body.campocpf, "cidadaoseguro", req.body.campoemail, req.body.campoend, req.body.camponome, req.body.campoemail, req.body.campotel,
		req.body.camporg
	], (err,_) => {
		if(err){
			console.log(err);
			res.status(500).end();
		}
		else res.sendFile(path.join(__dirname, 'public', 'sucesso.html'));
	})
	//res.json(req.body);
})

app.post('/login', (req,res) => {
	res.json(req.body);
});

app.listen(3000, () => console.log('Servidor Ligado'));


