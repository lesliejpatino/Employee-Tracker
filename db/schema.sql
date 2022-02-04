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
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT, 
    manager_id INT, 
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,

    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);

manager ID: -- will hold reference to another employee that is the manager of the current employee (null if the employee has no manager)