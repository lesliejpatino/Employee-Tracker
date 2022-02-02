DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;

USE DATABASE management_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30) 
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT, -- will hold reference to dept role
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT, -- will hold reference to employee role
    manager_id INT -- will hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
);