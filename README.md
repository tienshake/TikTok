# HitIt Guide

## 1. Clone repository

```bash
git clone git@github.com:Crash-Game-Series/HitIt-Game.git
```

## 2. Installation

```bash
# cd HitIt-Game
$ npm install
```

## 3. Init database

- Create a MySQL database server with port, username, password, and database name you want to use.
- Use available data to import into the database.
👉 SQL DB File: [HitIt SQL.zip](https://github.com/Crash-Game-Series/HitIt-BE/files/12842926/HitIt.SQL.zip)
  
## 4. Environment Config

- Download .env / config folder 👉 (You can find it in the slack channel "hitit-config-and-variables")
- Place it in the root directory
- Edit the .env file
  
```bash
var envJson = {
   ...
   "localhost": {
     ...
     "database": {
       "dbname": "Your_Database_Name",
       "username": "Your_User_Name",
       "password": "Your_Password",
       "port": "Your_Port",
       "host": "localhost",
     },
   },
   ...
}
```

## 5. Running the app

```bash
# run local with port http://localhost:3005
$ npm run local
```
