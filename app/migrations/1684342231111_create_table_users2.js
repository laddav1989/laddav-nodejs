module.exports = {
    "up": "CREATE TABLE users2 (id INT NOT NULL, UNIQUE KEY id (id), first_name TEXT, last_name TEXT, email TEXT, api_token TEXT )",
    "down": "DROP TABLE users2"
}