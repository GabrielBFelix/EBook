CREATE DATABASE Ebook;

CREATE TABLE usuario(
	codUsuario integer PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	senha VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	dataDeNascimento Date NOT NULL,
	cpf VARCHAR(255) NOT NULL,
	sexo char NOT NULL,
	codEndereco integer
);