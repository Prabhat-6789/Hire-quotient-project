## Hire-quotient-project

This project is a task assigned by <u>**HIRE QUOTIENT**</u> to demonstrate various functionalities including user authentication, MongoDB integration, API development, user profile management, post creation, commenting system, and error handling.

## Features
### User Authentication
- Implements a secure login/logout system
- Users can securely authenticate using tokens.

### MongoDB Integration
- Utilizes MongoDB for data storage.
- Demonstrate **CRUD** operations for managing user profiles, posts,and comments.

### API Development

#### User profile Management
##### Create User Profile:
  - **Endpoint:** 'POST http://localhost:4000/api/register'
  - **Description:** Allows users to create a new profile.
  - **Request Body:**
    - `name` (string): User's name.
    - `email` (string): User's email address.
    - `password` (string): User's password.
  - **Response:**
    - `id` (string): Unique identifier for the created user.
    - `name` (string): User's name.
    - `email` (string): User's email address.

##### Login User:
  - **Endpoint:** 'POST http://localhost:4000/api/login'
  - **Description:** Allows users to authenticate and obtain a token for subsequent requests.
  - **Request Body:**
    - `email` (string): User's email address.
    - `password` (string): User's password.
  - **Response:**
    - `token` (string): Authentication token for the user.

- **View User profile:**
  - **Endpoint:** 'GET http://localhost:4000/api/profile/:userId'
  - **Description:** Retrieves user profile information.
  - **Parameters:**
    - `userId` (string): Unique identifier for the user.
  - **Response:**
    - `id` (string): Unique identifier for the user.
    - `username` (string): User's username.
    - `email` (string): User's email address.

- **Edit User Profile:**
  - **Endpoint:** 'PUT http://localhost:4000/api/updateProfile/:userId'
  - **Description:** Allows users to update their profile.
  - **Parameters:**
    - `userId` (string): Unique identifier for the user.
  - **Request Body:**
    - `id` (string): Unique identifier for the user.
  - **Response:**
    - `message` (string): Indicates the success of the update.

- **Logout User:**
  - **Endpoint:** 'GET http://localhost:4000/api/logout'
  - **Description:** Logs out the currently authenticated user, invalidating the authentication token.

### Post creation and retrieval
- **Create Post:**
  - **Endpoint:** 'POST http://localhost:4000/api/post/new'
  - **Description:** Enables users to create a new post.
- **Request Body:**
  - `title` (string): Post title.
  - `content` (string): Post content.
    
- **Response:**
  - `id` (string): Unique identifier for the created post.
  - `title` (string): Post title.
  - `content` (string): Post content.
  
- **Retrieve Post:**
  - **Endpoint:** 'GET http://localhost:4000/api/post/postDetail/:postId'
  - **Description:** Retrieves details of a specific post.
  - **Parameters:**
    - `postId` (string): Unique identifier for the post.
  - **Response:**
    - `id` (string): Unique identifier for the post.
    - `title` (string): Post title.
    - `content` (string): Post content.

- **Add Comment:**
  - **Endpoint:** 'PUT http://localhost:4000/api/post/add-comment/:postId'
  - **Description:** Allows users to add comments to a specific post.
  - **Parameters:**
    - `postId` (string): Unique identifier for the post.
  - **Request Body:**
    - `text` (string): Comment text.
    - ...
  - **Response:**
    - `text` (string): Comment added successfully.

- **Delete Post:**
  - **Endpoint:** 'DELETE http://localhost:4000/api/post/deletePost/:postId'
  - **Description:** Allows users to delete a specific post.
  - **Parameters:**
    - `postId` (string): Unique identifier for the post to be deleted.
  - **Response:**
    - `message` (string): Indicates the success of the deletion.


### Error Handling
- used try and catch for handling errors.

## Installation
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up your MongoDB database and update the connection string in `config/database.js`.
4. Configure environment variables (e.g., JWT secret, MongoDB connection string) in a `.env` file.
5. Run the application using `npm start`.


## Usage
- Start the application and test the endpoints using tools like Postman.
