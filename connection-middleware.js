const mysql = require('mysql');

const connectionLimit = 10;

const con = mysql.createPool({
	connectionLimit,
	  host: "fiec-tcc.cmykxbpkdfjz.us-east-2.rds.amazonaws.com",
	  user: "admin",
	  password: "F!ec2021",
	  database: "cidadaoseguro"
});

// connection-middleware.js
module.exports = pool => (req, res, next) => { pool.getConnection((err, connection) => {
	if(err) return next(err);
        // adicionou a conexão na requisição
        req.connection = connection;
        // passa a requisição o próximo middleware
        next();
        // devolve a conexão para o pool no final da resposta
        res.on('finish', () => req.connection.release());
    });
}
