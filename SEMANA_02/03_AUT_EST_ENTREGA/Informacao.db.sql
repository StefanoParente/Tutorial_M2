BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "formacao" (
	"cod_perfil"	INTEGER,
	"curso"	TEXT,
	"instituicao"	TEXT,
	"data_inicio"	INTEGER,
	"data_fim"	INTEGER,
	"situacao"	TEXT,
	PRIMARY KEY("cod_perfil" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "perfil_pessoal" (
	"nome"	TEXT,
	"email"	TEXT,
	"telefone"	INTEGER,
	"resumo"	TEXT
);
CREATE TABLE IF NOT EXISTS "habilidades" (
	"h1"	TEXT,
	"h2"	TEXT,
	"h3"	TEXT,
	"cod_perfil"	INTEGER,
	PRIMARY KEY("cod_perfil" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "idiomas" (
	"idioma1"	TEXT,
	"situacao1"	TEXT,
	"idioma2"	TEXT,
	"situacao2"	INTEGER,
	"Field5"	INTEGER
);
CREATE TABLE IF NOT EXISTS "experiencias" (
	"empresa"	TEXT,
	"data_inicio"	INTEGER,
	"data_fim"	INTEGER,
	"resumo"	INTEGER,
	"cod_perfil"	INTEGER,
	PRIMARY KEY("cod_perfil" AUTOINCREMENT)
);
COMMIT;
