# Groupomania API Documentation
> Last project in OpenClassrooms for Web Dev's path. By Naïm DEL BEN.

## Stack
### Frontend
Vue.js
Vite

### Backend
Node.js
Express
Prisma

### DB
PostgreSQL
Heroku ?

## ----- Routes API -----

### Auth
Verbs HTTP | Point d'accès | Request body | Type de réponse attendue | Fonction
---------- | ------------- | ------------ | ------------------------ | --------
POST | /v1/auth/signup | { email: string, password: string }
POST | /v1/auth/login | { email: string, password: string }


### Users
Verbs HTTP | Point d'accès | Request body | Type de réponse attendue | Fonction
---------- | ------------- | ------------ | ------------------------ | --------
POST    | /v1/users | 
GET     | /v1/users | {  } | 
GET     | /v1/users/:id |
PUT     | /v1/users/:id |
DELETE  | /v1/users/:id |


### Posts
Verbs HTTP | Point d'accès | Request body | Type de réponse attendue | Fonction
---------- | ------------- | ------------ | ------------------------ | --------
POST    | /v1/posts | 
GET     | /v1/posts |
GET     | /v1/posts/:id |
DELETE  | /v1/posts/:id |
POST    | /v1/posts/:id/like |


### Comments
Verbs HTTP | Point d'accès | Request body | Type de réponse attendue | Fonction
---------- | ------------- | ------------ | ------------------------ | --------
POST    | /v1/comments |
GET     | /v1/comments |
GET     | /v1/comments/:id |

### Links
Verbs HTTP | Point d'accès | Request body | Type de réponse attendue | Fonction
---------- | ------------- | ------------ | ------------------------ | --------

## ----- tables SQL -----

posts
    id - integer
    user_id - integer
    name - string

users
    id - integer
    name - string

> table polymorphique
images
    id - integer
    url - string
    imageable_id - integer
    imageable_type - string

post P1
post P2
user U1
user U2
user U3

Images
image I1 - P1 - posts
image I2 - U3 - users
image I3 - P2 - posts
image I4 - P1 - posts

### Users
Id              | Name      | Email         | Password  | Role      | Bio
int@increment   | String    | String@unique | String    | String    | String

### Posts 
Id              | Title     | Content   | published | Author_id 
Int@Increment   | String    | String    | Datetime  | Users.id 

### Comments
Id              | Post      | Content   | published | author_id | comments ???
Int@increment   | Posts.id  | String    | Datetime  | Users.id  | ????

### Likes
Id              | Name
Int@increment   | String

### Posts_Likes
Post_id | Likes_id

### Table User Like
