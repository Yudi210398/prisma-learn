CREATE TABLE sampe (
    id serial not null,
    name varchar(100) not NULL,
    PRIMARY KEY (id)
);



SELECT * from sampe;
SELECT * from customers ORDER by id ASC;

INSERT INTO sampe (name)
VALUES ('hana');


ALTER table customer RENAME to customers;


CREATE table products
(
    id varchar(100) not NULL,
    name varchar(100) not NULL,
    price int  not NULL,
    stock int not null,
    category varchar (100) not null,
    PRIMARY key (id)
);

INSERT INTO products (id, name, price, stock, category)
VALUES ('P001', 'A', 1000, 100, 'K1'),
       ('P002', 'B', 2000, 200, 'K1'),
       ('P003', 'C', 3000, 300, 'K1'),
       ('P004', 'D', 4000, 400, 'K2'),
       ('P005', 'E', 5000, 500, 'K2');

SELECT * from products;


CREATE table categories (
    id serial not null,
    name varchar(100) not null,
    PRIMARY key (id)
);

SELECT * from categories;


CREATE table customers
(
    id varchar(100) not NULL,
    name varchar(100) not NULL,
    email varchar(100) not NULL,
    phone varchar(100) not NULL,
    PRIMARY key (id),
    CONSTRAINT customer_email_unik UNIQUE (email),
    CONSTRAINT customer_phone_unik UNIQUE (phone)
);


CREATE table wallet (
    id varchar(100) not null,
    balance int not NULL,
    customer_id varchar(100) not NULL,
    PRIMARY key (id),
    CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT wallet_customer_id_unik UNIQUE (customer_id)
);

SELECT * from wallet;
SELECT * from customers ORDER by id ASC;

CREATE table classes (
    id serial PRIMARY KEY,
    name_class varchar(100) not NULL
); 


SELECT * from classes;
SELECT * from students;

CREATE table students (
    id serial PRIMARY KEY,
    nama_murid varchar(100) not NULL,
    class_id int,
    CONSTRAINT classes_student FOREIGN KEY (class_id) REFERENCES classes (id)
);
