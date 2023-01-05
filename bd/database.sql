CREATE DATABASE IF NOT EXISTS  companybd;
use companybd;

CREATE table employee (
    id int (11) NOT null AUTO_INCREMENT,
    name varchar (50) DEFAULT null, 
    salary int(5) DEFAULT NULL,
    PRIMARY KEY(id)
);

describe employee;

use companybd;
insert into employee (name, salary) values ('carlos', '2003000');
insert into employee (name, salary) values ('roberto', '2060000'); 
insert into employee (name, salary) values ('gilberto', '2600000'); 
insert into employee (name, salary) values ('terruca', '15000000');


