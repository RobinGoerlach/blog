-- Drop the foreign key constraints first (required to drop tables in PostgreSQL)
ALTER TABLE Posts DROP CONSTRAINT IF EXISTS fk_user;

-- Drop the tables
DROP TABLE IF EXISTS Posts;
DROP TABLE IF EXISTS Users;

-- Disconnect from the database (necessary to drop the database itself)
\c postgres; -- Switch back to the default 'postgres' database

-- Drop the database
DROP DATABASE IF EXISTS BlogDB;
