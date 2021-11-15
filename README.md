# Groupomania - Corporate Social Network  
> Last project in OpenClassrooms Web Dev course. By Naïm DEL BEN.

## Use
### Install in local machine 
1. Download or clone this repo.
2. Transform '.env sample' in '.env' and insert you're server
3. Open 2 terminals
4. For the Frontend, open the first terminal : 
```bash
cd frontend/
npm install
npm run dev
```
5. For the Backend, open the second terminal :
```bash
cd backend/
npm install
nodemon server
```

## Stack
### Frontend
Builder: [Vite](http://vitejs.dev/) <br>
Framework: [Vue3](https://v3.vuejs.org/) <br>
Important plugins of Vue3: [Vue Router](https://next.router.vuejs.org/) / [Vuex](https://next.vuex.vuejs.org/) <br>
CSS framework : [Tailwind](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)

### Backend
Run-time Environment: [Node.js](https://nodejs.dev/) <br>
Framework: [Express](https://expressjs.com/) <br>
ORM: [ObjectionJS](https://vincit.github.io/objection.js/) <br>

### DataBase
Database : [PostgreSQL](https://www.postgresql.org/) <br>
Cloud : [Heroku](https://www.heroku.com/) 

## Documentations
### Routes API REST
#### Auth
Verbs HTTP | URI | Request body | Response body  
---------- | --- | ----------------------- | ------------------------
POST | /v1/auth/signup | { name: string, email: string, password: string } | { message: string }
POST | /v1/auth/login | { email: string, password: string } | { id, name, role, picture, gender, lastlogin, token(userId, role) : string }


#### Users
Verbs HTTP | URI | Request body | Response body  
---------- | --- | ----------------------- | ------------------------
GET     | /v1/users | - | All users
GET     | /v1/users/:id | - | Single user
GET     | /v1/users/:id/posts | - | Single user with all posts
GET     | /v1/users/:id/posts/:postId | - | Single user with one post
GET     | /v1/users/:id/comments | - | Single user with all comments
GET     | /v1/users/:id/reactions | - | Single user with all reactions
GET     | /v1/users/:id/history | - | User's history
PATCH   | /v1/users/:id | - | { message: string } 
DELETE  | /v1/users/:id | - | { message: string }


#### Posts
Verbs HTTP | URI | Request body | Response body  
---------- | --- | ----------------------- | ------------------------
GET     | /v1/posts | - | All posts
GET     | /v1/posts/:id | - | Single post
POST    | /v1/posts | { post: string } | { message: string }
PATCH   | /v1/posts/:id | { title: string, content: string} | { message: string }
DELETE  | /v1/posts/:id | - | { message: string }


#### Comments
Verbs HTTP | URI | Request body | Response body  
---------- | --- | ----------------------- | ------------------------
GET     | /v1/posts/:id/comments | - | All comments
GET     | /v1/posts/:id/comments/:id | - | single comment
POST    | /v1/posts/:id/comments | { comment: string } | { message: string }
PATCH   | /v1/posts/:id/comments/:id | { content: string} | { message: string }
DELETE  | /v1/posts/comments/:id | - | { message: string }

#### Reactions
Verbs HTTP | URI | Request body | Response body  
---------- | --- | ----------------------- | ------------------------
GET     | /v1/reactions | - |
POST    | /v1/reactions | { post_id: int, user_id: int, reaction_id: int }
DELETE  | /v1/reactions | { post_id: int, user_id: int, reaction_id: int }

### Tables SQL
#### Users
name | TYPE
---- | ----
id          | SERIAL4
name        | VARCHAR 255
email       | VARCHAR 255
password    | VARCHAR 255
role        | VARCHAR 255
bio         | TEXT
mobile      | VARCHAR 255
picture     | VARCHAR 255
background  | VARCHAR 255
gender      | VARCHAR 255
birthday    | VARCHAR 255
registred   | TIMESTAMPTZ
lastLogin   | TIMESTAMPTZ

#### Posts 
name | TYPE
---- | ----
id          | SERIAL4
author_id   | INT4
title       | VARCHAR 255
content     | TEXT
published   | TIMESTAMPTZ
updated     | TIMESTAMPTZ

#### Comments
name | TYPE
---- | ----
id          | SERIAL4
author_id   | INT4
post_id     | INT4
content     | TEXT
published   | TIMESTAMPTZ
updated     | TIMESTAMPTZ

#### Likes
name | TYPE
---- | ----
id      | INT4
label   | VARCHAR 255

#### Reactions_posts
name | TYPE
---- | ----
id          | SERIAL4
post_id     | INT4
reaction_id | INT4
user_id     | INT4
published   | TIMESTAMPTZ

#### Reactions_comments
name | TYPE
---- | ----
id          | SERIAL4
comment_id  | INT4
reaction_id | INT4
user_id     | INT4
published   | TIMESTAMPTZ