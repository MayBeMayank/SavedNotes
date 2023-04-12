##MERN Stack Notes Web App##
This is a simple web app for making and managing notes, built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to create, view, edit, and delete notes, and stores them in a MongoDB database.

**Installation**
To install the app, follow these steps:

*Clone the repository to your local machine.
*Install the required dependencies by running npm install in the root directory.
*Create a .env file in the root directory and add your MongoDB connection string, like this: MONGODB_URI=<your-mongodb-uri>.
*Start the app by running npm start.
**Usage**
Once the app is running, you can access it at http://localhost:PORT in your web browser. From there, you can create, view, edit, and delete notes.

--API Routes--
The app provides the following API routes for working with notes:

GET /api/notes: Retrieves a list of all notes.
POST /api/notes: Creates a new note.
GET /api/notes/:id: Retrieves a specific note by ID.
PUT /api/notes/:id: Updates a specific note by ID.
DELETE /api/notes/:id: Deletes a specific note by ID.
Technologies Used
This app is built using the following technologies:

MongoDB: A NoSQL document-oriented database for storing notes.
Express.js: A web application framework for Node.js that provides routing and middleware.
React.js: A JavaScript library for building user interfaces.
Node.js: A JavaScript runtime for building server-side applications.
Bootstrap: A front-end framework for building responsive, mobile-first websites.
Credits
This app was created by MayBeMayank as a learning project.



