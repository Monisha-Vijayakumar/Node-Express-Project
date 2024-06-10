A Sample project built using NodeJS and Express.
It has all the CRUD operations.
All the datas are stored and fetched in/from MongoDB.
JWT token validations are implemented on Private routes.
User registration, login are the public route. All other endpoints has Private access.
Error handling on all the endpoints are implemented.
The password is stored in DB by hashing.

//API's

/api/contacts - GET all contacts
/api/contacts/:id - GET contact by id
/api/contacts/:id - PUT contact by id
/api/contacts/:id - DELETE contact by id.
/api/contacts - POST create contact.

/api/user/register - POST - Register a user.
/api/user/login - POST - Login user.
/api/user/current - GET - get current user info

contacts and user schema data are joined using user id.

These endpoints will further be used in corresponding React POC project.
