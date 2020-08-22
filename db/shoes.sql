-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT Shelfie
        FROM sys.databases
        WHERE name = N'Shelfie'
)
CREATE DATABASE shelfie
GO



-- Create a new table called 'TableName' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.TableName', 'U') IS NOT NULL
DROP TABLE SchemaName.TableName
GO
-- Create the table in the specified schema
CREATE TABLE SchemaName.TableName
(
    TableNameId INT NOT NULL PRIMARY KEY, -- primary key column
    Column1 [NVARCHAR](50) NOT NULL,
    Column2 [NVARCHAR](50) NOT NULL
    -- specify more columns here
);
GO

CREATE TABLE bin1 (
    shoe_id INTEGER, 
)

-- SQL Planning:

--   Database: 'Shelfie'
--   Tables: 
        -- bin1
        -- bin2
        -- bin3
        -- bin4

    -- Table functionality: 
    


-- PluralSight Notes
-- Create Database: CREATE DATABASE name
-- 