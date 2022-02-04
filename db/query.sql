-- SELECT * 
-- FROM employee
-- JOIN role ON employee.role_id = role.id

-- SELECT * 
-- FROM role
-- JOIN employee ON employee.role_id = role.id


-- SELECT * 
-- FROM role
-- JOIN department ON role.department_id = department.id

-- SELECT * 
-- FROM department
-- JOIN role ON role.department_id = department.id


SELECT department.id
FROM department
INNER JOIN role ON role.department_id = department.id;


SELECT role.id
FROM role
INNER JOIN employee ON employee.role_id = role.id;

SELECT 
    first_name,
    last_name,
    manager_id

FROM 
    employee

WHERE 
    role_id = 1;

UPDATE 
    employee

SET 
    manager_id = 3

WHERE
    role_id = 1;


