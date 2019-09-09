# Simple CURD RESTful API with JWT Authentication and MongoDB

## First steps
1. Copy env_default to .env
2. Edit .env with your MongoDB Access Data
3. npm install
4. Run  
4.1 npm run dev (nodemon)  
4.2 npm start (without nodemon)

___
## Get all the posts  
**GET http://localhost:3000/posts**
___
## Get a specific Post  
**GET http://localhost:3000/post/5ae63c5027bbe422cce696a3**
___
## Register User  
**POST http://localhost:3000/users/register**

 Headers:
  - Content-Type: application/json

 Body:
  - name
  - email
  - password
___
## Authenticate User  
**POST http://localhost:3000/users/authenticate**

 Headers:
  - Content-Type: application/json

 Body:
  - email
  - password
___
## Create new Post  
**POST http://localhost:3000/action/create**

 Headers:
  - x-access-token
  - Content-Type: application/json

 Body:
  - title
  - description
___
## Update a Post  
**PATCH http://localhost:3000/action/5ae63c5027bbe422cce696a3**

 Headers:
  - x-access-token
  - Content-Type: application/json

 Body:
  - title
  - description
___
## Delete Post  
**DELETE http://localhost:3000/action/5ae63c5027bbe422cce696a3**

 Headers:
  - x-access-token
  - Content-Type: application/json