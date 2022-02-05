INSERT INTO department (id, name)
VALUES  (1, "Engineering"),
        (2, "Employee Wellness"),
        (3, "Finance"),
        (4, "Creative Solutions"),
        (5, "Consumer Products");

INSERT INTO role (id, title, salary, department_id)
VALUES  (1, "Web Developer", 110000, 1),
        (2, "UI/UX Designer", 100000, 1),
        (3, "Engineering Manager", 150000, 1),
        (4, "Chief Happiness Officer", 80000, 2),
        (5, "People and Culture Officer", 80000, 2),
        (6, "Employee Wellness Manager", 100000, 2),
        (7, "Budget Analyst", 80000, 3),
        (8, "Finance Advisor", 90000, 3),
        (9, "Finance Manager", 140000, 3),
        (10, "Marketing Specialist", 60000, 4),
        (11, "Brand Strategist", 60000, 4),
        (12, "Creative Solutions Manager",80000, 4),
        (13, "Buyer", 60000, 5),
        (14, "Production Specialist", 50000, 5),
        (15, "Consumer Products Manager", 70000, 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Mila","Ross", 1),
        ("Rick","Morty", 2),
        ("Drew","Lee", 3),
        ("Tamara","Robbins", 4),
        ("Bella","Roberts", 5),
        ("Oscar","Gomez", 6),
        ("Ramon","DeLuca", 7),
        ("Nicole","Ramos", 8),
        ("Jinn","Charles", 9),
        ("Asher","Mortensen", 10),
        ("Todd","Sharp", 11),
        ("Emma","Walton", 12),
        ("Francesca","Stine", 13),
        ("Rose","Edwards", 14),
        ("Tony","Peck", 15);