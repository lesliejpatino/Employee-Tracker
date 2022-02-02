// require dependencies
const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'management_db'
    },
    console.log(`Connected to the management_db database.`)
  );


inquirer.prompt([
    {
        type: "list",
        message: "What would you like to do next?",
        name: "nextAction",
        choices: [
            "View All Departments",
            "Add Department",
            "View All Roles",
            "Add Role",
            "View All Employees", 
            "Add Employee",
            "Update Employee Role",
            "Quit"
        ]
    }
]).then()
;



// DEPARTMENTS
// (1, "Engineering"),
// (2, "Employee Wellness"),
// (3, "Finance"),
// (4, "Creative Solutions"),
// (5, "Consumer Products");


// USER MUST BE PRESENTED WITH THE FOLLOWING OPTIONS: 

// VIEW ALL DEPTS - displays formatted table showing department names and department ids

// VIEW ALL ROLES - displays job title, role id, the department that role belongs to, and the salary for that role

// VIEW ALL EMPLOYEES - displays formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// ADD DEPT - prompted to enter the name of the department and that department is added to the database

// ADD ROLE - prompted to enter the name, salary, and department for the role and that role is added to the database

// ADD EMPLOYEE - prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// UPDATE EMPLOYEE ROLE - prompted to select an employee to update and their new role and this information is updated in the database

