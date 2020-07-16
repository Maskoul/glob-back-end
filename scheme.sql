CREATE TABLE users (
    uid SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255)  NOT NULL UNIQUE,
    hash_password TEXT NOT NULL,
    birth_day TEXT NOT NULL,
    gender VARCHAR(100),
    joined TIMESTAMP
);
