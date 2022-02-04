// require dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
const { printTable } = require('console-table-printer');


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'management_db'
    },
    console.log(`Connected to the management_db database.`)
);

// A function that holds all of the options the user has to pick from
const viewChoices = function() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like view next?",
            name: "viewAll",
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
    ]).then(answers => {
        if (answers.viewAll === "View All Departments") {
            allDeps();
        } else if (answers.viewAll === "Add Department") {

        }
        else if (answers.viewAll === "View All Roles") {
            allRoles();
        }
        else if (answers.viewAll === "Add Role") {

        }
        else if (answers.viewAll === "View All Employees") {
            allEmployees();
        }
        else if (answers.viewAll === "Add Employee") {

        }
        else if (answers.viewAll === "Update Employee Role") {

        }
        else {
            console.log('Goodbye! Hit Ctrl+C to exit');
        }
    })
};

viewChoices();

// THE FOLLOWING FUNCTIONS WILL RUN WHENEVER THE USER SELECTS AN OPTION THAT STARTS WITH "VIEW ALL"

// If user selects "View All Departments"
const allDeps = (viewChoices) => {
    db.query('SELECT * FROM department', function (err, results) {
        console.log('___________________________');
        console.log('                           ');
        console.log('        DEPARTMENTS');
        console.log('___________________________');
        printTable((results));
        whatNow();
    })
};

// If user selects "View All Roles"
const allRoles = (viewChoices) => {
    db.query('SELECT * FROM role', function (err, results) {
        console.log('                 ___________________________ ');
        console.log('                                             ');
        console.log('                  ROLES WITHIN THE COMPANY   ');
        console.log('                 ___________________________ ');
        printTable((results));
        whatNow();
    })
};

// If user selects "View All Employees"
const allEmployees = (viewChoices) => {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log('              ___________________________');
        console.log('                                         ');
        console.log('                       EMPLOYEES');
        console.log('              ___________________________');
        printTable((results));
        whatNow();
    })
};












// This will appear at the end of every response displayed to the user
const whatNow = function() {inquirer.prompt([
    {
        type: "list",
        message: "How would you like to proceed?",
        name: "moreOrQuit",
        choices: [ 
            "SEE MORE",
            "QUIT"
        ]
    }
]).then (answers => {
    if (answers.moreOrQuit === "SEE MORE") {
        viewChoices();
    }
    else {
        console.log('Goodbye! Hit Ctrl+C to exit');
    }
})
}



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

