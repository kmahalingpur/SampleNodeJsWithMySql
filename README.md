# SampleNodeJsWithMySql
It is a sample repository of Node.JS with MySql
This repo is a sample stack for Node.JS with MySql using BookSelf.JS ORM server.

To run this repo first do 'npm install'
The change the mysql db connection details from /configfiles/config.json
Then run 'npm start' the server will start on the port 3000 will be accessable from http://localhost:3000/

Folder structure
/routes contains api.js---to write all the api's required, dbHelper.js---for helper functions, dbConnection.js---for bookself connection.
/configfiles contains config.json for all config details including dbconnection details.
