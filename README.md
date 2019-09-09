<h1 align="center">
  RESTful API with MongoDB and JWT Authentication
</h1>
<p align="center">Very simple RESTful starter in NodeJS + MongoDB with JWT Authentication</p>


## Getting started

1. Clone this repo using `https://github.com/skorotkiewicz/node-rest-api-jwt.git`
2. Move to the appropriate directory: `cd node-rest-api-jwt`.
3. Run `npm install` to install dependencies.
4. Set `.env` file with your mongoURI.
5. Run  
5.1 `npm run dev` (nodemon)  
5.2 `npm start` (without nodemon)


## Basic usage

* Get all the posts  
`GET http://localhost:3000/posts`


* Get a specific Post  
`GET http://localhost:3000/post/5ae63c5027bbe422cce696a3`


* Register User  
`POST http://localhost:3000/users/register`  

      Headers:
      - Content-Type: application/json  
      
      Body:
      - name
      - email
      - password

___
* Authenticate User  
`POST http://localhost:3000/users/authenticate`

      Headers:
      - Content-Type: application/json

      Body:
      - email
      - password
___
* Create new Post  
`POST http://localhost:3000/action/create`

      Headers:
      - x-access-token
      - Content-Type: application/json

      Body:
      - title
      - description
___
* Update a Post  
`PATCH http://localhost:3000/action/5ae63c5027bbe422cce696a3`

      Headers:
        - x-access-token
        - Content-Type: application/json

      Body:
        - title
        - description
___
* Delete Post  
`DELETE http://localhost:3000/action/5ae63c5027bbe422cce696a3`

      Headers:
        - x-access-token
        - Content-Type: application/json