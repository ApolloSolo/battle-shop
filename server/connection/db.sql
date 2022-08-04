CREATE TABLE users(
    id SERIAL,
    username VARCHAR(28) PRIMARY KEY,
    email VARCHAR(28) NOT NULL UNIQUE,
    passhash VARCHAR NOT NULL
);

CREATE TABLE bag(
    id Serial PRIMARY KEY,
    spaces INT DEFAULT 10,
    username VARCHAR(28),
    FOREIGN KEY (username) REFERENCES users (username)
);

INSERT INTO
    users (username, email, passhash)
VALUES
($1, $2);

INSERT INTO
    bag(username, spaces)
VALUES
('AppSolo', 10);