CREATE DATABASE whistle;

USE whistle;

CREATE TABLE contacts (
	id INTEGER NOT NULL AUTO_INCREMENT,
	your_name VARCHAR (255) NOT NULL,
	EmergencyContact_name_one VARCHAR (255) NOT NULL,
	EmergencyContact_email_one VARCHAR (320),
	EmergencyContact_name_two VARCHAR (255) NOT NULL,
	EmergencyContact_email_two VARCHAR (320),
	date TIMESTAMP,
	PRIMARY KEY (id)
);