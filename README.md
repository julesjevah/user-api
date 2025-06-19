
## Programming Language and Framework
- Language: JavaScript (Node.js)
- Framework: Express.js

## How to Run the API

1. Clone the repo:
   ```bash
   git clone ..........
   cd .....
Install dependencies:

Start the server:

node index.js
The server will run on http://localhost:3000

 
Create a User (POST /users)
 
 POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john@example.com"}'

Get a User by ID (GET /users/:id)
 
curl http://localhost:3000/users/YOUR_USER_ID_HERE