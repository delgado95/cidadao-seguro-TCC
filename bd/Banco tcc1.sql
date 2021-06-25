-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Usuario (
Cod_Usu Int PRIMARY KEY,
Senha varchar(30),
Login varchar(30),
Endereco varchar(80),
Nome varchar(40),
Email varchar(35),
Telefone char(11),
RG varchar(12)
);

CREATE TABLE Administrador (
Cod_Adm Int PRIMARY KEY,
Login varchar(30),
Senha varchar(30),
Nome varchar(40),
RG char(7),
CPF char(11),
Telefone char(11)
);

CREATE TABLE Agente (
Cod_Age Int PRIMARY KEY,
Login varchar(30),
Senha varchar(30),
Nome varchar(40),
RG char(7),
CPF char(11),
Telefone char(11)
);

CREATE TABLE Relato (
Cod_relato int not null,
Nome varchar(40),
Localizacao varchar (50),
Data_relato varchar (8),
Ocorrencia text,
Cod_Usu Int,
Cod_Adm Int,
Cod_Age Int,
PRIMARY KEY(Cod_Usu,Cod_Adm,Cod_Age,Cod_emergencia)
);

CREATE TABLE Emergencia (
Cod_emergencia int not null,
Nome varchar(40),
Localizacao varchar (50)
);
 

 
