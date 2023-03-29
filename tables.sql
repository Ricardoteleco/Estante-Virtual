-- Active: 1676582098331@@35.226.146.116@3306@jbl-4416547-ricardo-morais
CREATE TABLE Competition (
    id_competition VARCHAR(255) PRIMARY KEY,
    competition_name VARCHAR(255) NOT NULL UNIQUE,
    start_date VARCHAR(255) NOT NULL,
    end_date VARCHAR(255) NOT NULL
);

#
SELECT * FROM `Competition`;


CREATE TABLE Competition (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    start VARCHAR(255) NOT NULL,
    end VARCHAR(255) NOT NULL
);

#
DROP TABLE `Competition`;