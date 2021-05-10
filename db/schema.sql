CREATE DATABASE IF NOT EXISTS newts_db;
USE newts_db;

DROP TABLE IF EXISTS newts;

CREATE TABLE newts (
    id int NOT NULL AUTO_INCREMENT,
    newt_name varchar(255) NOT NULL,
    newt_role varchar(255) NOT NULL,
    newt_age int NOT NULL,
    newt_xp int NOT NULL,
    newb BOOL DEFAULT true,
    PRIMARY KEY (id)
);