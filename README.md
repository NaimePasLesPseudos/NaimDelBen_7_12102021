# Groupomania API Documentation
> Last project in OpenClassrooms for Web Dev's path. By Naïm DEL BEN.

## Stack
### Frontend
[Vite](http://vitejs.dev/)
Framework : [Vue3](https://v3.vuejs.org/)
    [Vue Router](https://router.vuejs.org/)
[Tailwind](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)

### Backend
Framework : [Node.js](https://nodejs.dev/)
[Express](https://expressjs.com/)
ORM : [ObjectionJS](https://vincit.github.io/objection.js/)

### DB
Cloud : [Heroku]()
Database : [PostgreSQL]()

## ----- Routes API -----

### Auth
Verbs HTTP | URI | Request header and body | Response header and body  
---------- | --- | ----------------------- | ------------------------
POST | /v1/auth/signup | { email: string, password: string }
POST | /v1/auth/login | { email: string, password: string }


### Users
Verbs HTTP | URI | Request header and body | Response header and body  
---------- | --- | ----------------------- | ------------------------
POST    | /v1/users | 
GET     | /v1/users | 
GET     | /v1/users/:id |
PUT     | /v1/users/:id |
DELETE  | /v1/users/:id |


### Posts
Verbs HTTP | URI | Request header and body | Response header and body  
---------- | --- | ----------------------- | ------------------------
GET     | /v1/posts |
POST    | /v1/posts | 
GET     | /v1/posts/:id |
PUT     | /v1/posts/:id |
DELETE  | /v1/posts/:id |
POST    | /v1/posts/:id/like |
DELETE  | /v1/posts/:id/like |


### Comments
Verbs HTTP | URI | Request header and body | Response header and body  
---------- | --- | ----------------------- | ------------------------
GET     | /v1/posts/:id/comments |
POST    | /v1/posts/:id/comments |
GET     | /v1/posts/:id/comments/:id |
PUT     | /v1/posts/:id/comments/:id |
DELETE  | /v1/posts/:id/comments/:id |
POST    | /v1/posts/:id/comments/:id/like |
DELETE  | /v1/posts/:id/comments/:id/like |

### Likes
Verbs HTTP | URI | Request header and body | Response header and body  
---------- | --- | ----------------------- | ------------------------

## ----- tables SQL -----