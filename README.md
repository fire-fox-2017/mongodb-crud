# mongodb-crud
A simple demonstration of REST API AUTH using ExpressJS and Mongodb as a database

### Installation
```javascript
npm install
npm start
```
then
```javascript
mongod
```

### REST API
Access the API from http://localhost:3000/api/books

List of books routes:

Route | HTTP | Description
----- | ---- | -----------
/api/books | GET | Get all the books info
/api/books | POST | create a book
/api/books/find-isbn | POST | find a book using ISBN
/api/books/delete | DELETE | delete a book
/api/books/edit | PUT | edit book data