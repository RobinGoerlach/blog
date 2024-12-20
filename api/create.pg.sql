-- Create the database
CREATE DATABASE BlogDB;
\c BlogDB; -- Connect to the newly created database

-- Create the Users table
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

-- Create the Posts table
CREATE TABLE Posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

-- Add constraints outside the table creation
-- Ensure email is unique
ALTER TABLE Users ADD CONSTRAINT unique_email UNIQUE (email);

-- Add foreign key for Posts (user_id references Users)
ALTER TABLE Posts ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES Users (id) ON DELETE CASCADE;

-- Add example data
-- Insert sample users
INSERT INTO Users (first_name, last_name, email)
VALUES 
('John', 'Doe', 'john.doe@example.com'),
('Jane', 'Smith', 'jane.smith@example.com');

-- Insert sample posts
INSERT INTO Posts (title, content, user_id)
VALUES 
('First Post', 'This is the content of the first post', 1),
('Second Post', 'This is the content of the second post', 2);

-- Query to test the setup
SELECT * FROM Users;
SELECT * FROM Posts;
