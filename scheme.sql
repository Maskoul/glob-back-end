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

CREATE TABLE articles(
    pid SERIAL PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    sub_title VARCHAR(255) NOT NULL,
    article VARCHAR,
    user_id INT REFERENCES users(uid),
    author VARCHAR (255) NOT NULL,
    date_created TIMESTAMP
);