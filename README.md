
### 1. **Importing Required Modules**:
   - `express`: The code begins by importing the Express library, which is a web framework for Node.js that simplifies the process of building web servers and APIs.
   - `students`: The `students` module is imported from a separate file (`./student`). This module contains an array of student objects.

### 2. **Setting Up the Express Application**:
   - The `app` variable is initialized by calling `express()`. This creates an instance of an Express application.
   - The middleware `express.json()` is used to parse incoming JSON requests, allowing the server to handle JSON data in requests.

### 3. **Starting the Server**:
   - The `app.listen` function starts the server, listening on port 4000. When the server successfully starts, it logs "Server was run" to the console.

### 4. **Defining Routes**:
   - **Root Route (`/`)**: 
     - The `app.get('/')` route responds to GET requests at the root URL with a JSON object that includes a message: `{"message": "API is working"}`.
   - **GET `/api/students` Route**:
     - The `app.get('/api/students')` route responds to GET requests to `/api/students` by returning the full list of students as a JSON object.
   - **POST `/api/students` Route**:
     - The `app.post('/api/students')` route handles POST requests to `/api/students`.
     - The request body is expected to contain student information, particularly an email field.
     - If the `email` field is missing from the request body, the server responds with a 400 status code and an error message: `{"Error": "API is not working"}`.
     - If the `email` is present, a new student object is created with the provided details and an auto-incremented `id`.
     - The new student object is added to the `students` array and returned as a JSON response.

### 5. **The `students` Array**:
   - The `students` array contains a list of student objects, each with an `id`, `first_name`, `last_name`, `email`, `gender`, and `ip_address`.
   - This array serves as a simple data store for the API, simulating a database.

### 6. **Exporting the `students` Array**:
   - The `students` array is exported using `module.exports`, making it available to be imported and used in other files (such as in the main server file).
