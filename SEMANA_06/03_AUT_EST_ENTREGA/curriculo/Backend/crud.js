const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'curriculo.db'; //nome do banco de dados

app.use(express.json());
//get, post, put, delete methods


//CREATE
app.post('/registrarperfil_pessoal', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO perfil_pessoal ( nome, email, telefone) VALUES ('" + req.body.nome + "', '" + req.body.email + "', '" + req.body.telefone + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>MEIOS DE perfil_pessoal INSERIDOS COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});


//READ
app.get("/readperfil_pessoal", (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBSOURCE); // Abre o banco
    var sql = 'SELECT * FROM perfil_pessoal ORDER BY telefone COLLATE NOCASE';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});


// UPDATE
app.get('/atualizaperfil_pessoal', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM perfil_pessoal WHERE cod_perfil_pessoal="+ req.query.cod_perfil_pessoal;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// UPDATE
app.post('/atualizaperfil_pessoal', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE perfil_pessoal SET nome='" + req.body.nome + "', email = '" + req.body.email + "' , telefone='" + req.body.telefone + "' WHERE cod_perfil_pessoal='" + req.body.cod_perfil_pessoal +  "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>MEIOS DE perfil_pessoal ATUALIZADOS COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});

//DELETE
app.post("/deleteperfil_pessoal", urlencodedParser, (req, res) => { //Deleta uma obra do banco de dados
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    sql = "DELETE FROM perfil_pessoal WHERE cod_perfil_pessoal'" + req.body.cod_perfil_pessoal + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBSOURCE); // Abre o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.write('<p>MEIOS DE perfil_pessoal DELETADOS COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end();
    });
    db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
  });