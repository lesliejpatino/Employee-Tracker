DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;

USE DATABASE management_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30) 
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),

);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);