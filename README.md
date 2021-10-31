# Groupomania API Documentation
> Last project in OpenClassrooms Web Dev course. By Naïm DEL BEN.

## Use

## Stack

### Frontend
Build : [Vite](http://vitejs.dev/) <br>
Framework : [Vue3](https://v3.vuejs.org/) <br>
    [Vue Router](https://router.vuejs.org/) <br>
[Tailwind](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)

### Backend
[Node.js](https://nodejs.dev/) <br>
Framework : [Express](https://expressjs.com/) <br>
ORM : [ObjectionJS](https://vincit.github.io/objection.js/) <br>

### DataBase
Cloud : [Heroku]() <br>
Database : [PostgreSQL]()

## Routes API

### Auth
Verbs HTTP | URI | Request header and body | Response header and body  
---------- | --- | ----------------------- | ------------------------
POST | /v1/auth/signup | { name: string, email: string, password: string } | { message: string }
POST | /v1/auth/login | { email: string, password: string } | { userId: string, token: string }


### Users
Verbs HTTP | URI | Request header and body | Response header and body  
---------- | --- | ----------------------- | ------------------------
GET     | /v1/users | - | All users
GET     | /v1/users/:id | - | Single user
GET     | /v1/users/:id/posts | - | Single user with all posts
GET     | /v1/users/:id/comments | - | Single user with all comments
GET     | /v1/users/:id/reactions | - | Single user with all reactions
GET     | /v1/users/:id/history | - | User's history
PATCH   | /v1/users/:id | - | { message: string } 
DELETE  | /v1/users/:id | - | { message: string }


### Posts
Verbs HTTP | URI | Request header and body | Response header and body  
---------- | --- | ----------------------- | ------------------------
GET     | /v1/posts | - | All posts
GET     | /v1/posts/:id | - | Single post
POST    | /v1/posts | { post: string } | { message: string }
POST    | /v1/posts/:id/reaction | { userId: string, reaction: Number } | { message: string }
PATCH   | /v1/posts/:id | { title: string, content: string} | { message: string }
DELETE  | /v1/posts/:id | - | { message: string }
DELETE  | /v1/posts/:id/reaction | { user: id } | { message: string }


### Comments
Verbs HTTP | URI | Request header and body | Response header and body  
---------- | --- | ----------------------- | ------------------------
GET     | /v1/posts/:id/comments | - | All comments
GET     | /v1/posts/:id/comments/:id | - | single comment
POST    | /v1/posts/:id/comments | { comment: string } | { message: string }
POST    | /v1/posts/:id/comments/:id/reaction | { userId: string, reaction: Number } | { message: string }
PATCH   | /v1/posts/:id/comments/:id | { content: string } | { message: string }
DELETE  | /v1/posts/:id/comments/:id | - | { message: string }
DELETE  | /v1/posts/:id/comments/:id/reaction | { user: id } | { message: string }


## Tables SQL

### Posts 

name | TYPE
---- | ----
id          | INT
title       | CHAR
content     | TEXT
published   | DATETIME
updated     | DATETIME
author_id   | INT
thumbs      | INT
hearts      | INT
lightBulbs  | INT
rofls       | INT

### Users

name | TYPE
---- | ----
id          | INT
name        | CHAR
email       | CHAR
password    | CHAR
role        | CHAR
bio         | TEXT
registred   | DATETIME
lastLogin   | DATETIME
mobile      | CHAR
picture     | CHAR
background  | CHAR
birthday    | DATETIME
gender      | CHAR

### Comments

name | TYPE
---- | ----
id          | INT
post_id     | INT
content     | TEXT
published   | DATETIME
updated     | DATETIME
author_id   | INT
thumbs      | INT
hearts      | INT
lightBulbs  | INT
rofls       | INT

### Likes
Id              | Name
Int@increment   | String

### Posts_Likes
Post_id | Likes_id

### Table User Like