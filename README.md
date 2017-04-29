# MongoDB-CRUD

MongoDB-CRUD is example of create, read, update, and delete of MongoDB database using nodejs.

## Routes

Use the following routes to access the database:

| Routes | HTTP method | Description |
| ------ | ----------- | ----------- |
| /api/books | GET | Show all books info |
| /api/books | POST | Add new book to database |
| /api/books/:id | GET | Show one book info |
| /api/books/:id | PUT | Update info of a book |
| /api/books/:id | DELETE | Delete a book from database |

## Usage

First install the dependencies and then start the server as follows:

```sh
$ npm install
$ npm start
```
The routes can be accessed via http://localhost:3000, recommended to be accessed via Postman etc.
