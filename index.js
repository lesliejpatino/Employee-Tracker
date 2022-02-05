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
            message: "What would you like to view next?",
            name: "viewAll",
            choices: [
                "View All Departments",
                "Add Department",
                "View All Roles",
                "Add Role",
                "View All Employees",
                "Add Employee",
                "Update Employee Role",
                "Delete Employee Role",
                "Quit"
            ]
        }
    ]).then(answers => {
        if (answers.viewAll === "View All Departments") {
            allDeps();
        } 
        else if (answers.viewAll === "Add Department") {
            addDepartment();
        }
        else if (answers.viewAll === "View All Roles") {
            allRoles();
        }
        else if (answers.viewAll === "Add Role") {
            addRole();
        }
        else if (answers.viewAll === "View All Employees") {
            allEmployees();
        }
        else if (answers.viewAll === "Add Employee") {

        }
        else if (answers.viewAll === "Update Employee Role") {

        } 
        else if (answers.viewAll === "Delete Employee Role") {
            deleteRole();
        }
        else {
            console.log('Goodbye! Hit Ctrl+C to exit');
        }
    })
};

viewChoices();


// const addDept
// db.query('UPDATE', function (err, results) {

// }


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

// THE FOLLOWING FUNCTIONS WILL RUN WHENEVER THE USER SELECTS AN OPTION THAT STARTS WITH "Add"
// If user selects "Add Role" 
// addRole = () => {
//     inquirer.prompt([
//       {
//         type: 'input', 
//         name: 'role',
//         message: "What role do you want to add?"
//       },
//       {
//         type: 'input', 
//         name: 'salary',
//         message: "What is the salary of this role?"
//       }
//     ])
//       .then(answer => {
//       const params = [answer.role, answer.salary];
  
//       // grab dept from department table
//       const roleSql = `SELECT name, id FROM department`; 
  
//       db.promise().query(roleSql, (err, data) => {
//         if (err) throw err; 
    
//         const dept = data.map(({ name, id }) => ({ name: name, value: id }));
  
//         inquirer.prompt([
//         {
//           type: 'list', 
//           name: 'dept',
//           message: "What department is this role in?",
//           choices: dept
//         }
//         ])
//           .then(deptChoice => {
//           const dept = deptChoice.dept;
//           params.push(dept);
  
//           const sql = `INSERT INTO role (title, salary, department_id)
//                       VALUES (?, ?, ?)`;
  
//           db.query(sql, params, (err, result) => {
//             if (err) throw err;
//             console.log('Added' + answer.role + " to roles!"); 
  
//             allRoles();
//          });
//        });
//      });
//    });
//   };

  
// If user selects "Add a Department"
// addDepartment = () => {
//     inquirer.prompt([
//       {
//         type: 'input', 
//         name: 'addDept',
//         message: "What department would you like to add?"
//       }
//     ])
//       .then(answer => {
//         const sql = `INSERT INTO department (name)
//                     VALUES (?)`;
//         db.query(sql, answer.addDept, (err, result) => {
//           console.log('Added ' + answer.addDept + " to departments!"); 
//           if (err) throw err;
//           allDeps();
//       });
//     });
//   };

// If user selects "Delete a Role"
// deleteRole = () => {
//     const roleSql = `SELECT * FROM role`; 
  
//     db.promise().query(roleSql, (err, data) => {
//       if (err) throw err; 
  
//       const role = data.map(({ title, id }) => ({ name: title, value: id }));
  
//       inquirer.prompt([
//         {
//           type: 'list', 
//           name: 'role',
//           message: "What role do you want to delete?",
//           choices: role
//         }
//       ])
//         .then(roleChoice => {
//         const role = roleChoice.role;
//         const sql = `DELETE FROM role WHERE id = ?`;
  
//         db.query(sql, role, (err, result) => {
//           if (err) throw err;
//           console.log("Successfully deleted!"); 
  
//           allRoles();
//         });
//       });
//     });
//   };






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



// USER MUST BE PRESENTED WITH THE FOLLOWING OPTIONS: 

// ADD DEPT - prompted to enter the name of the department and that department is added to the database

// ADD ROLE - prompted to enter the name, salary, and department for the role and that role is added to the database

// ADD EMPLOYEE - prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// UPDATE EMPLOYEE ROLE - prompted to select an employee to update and their new role and this information is updated in the database

