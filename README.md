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
- **Create User Profile:**
  - Endpoint: 'POST http://localhost:4000/api/register'
  - Allow users to create a new profile.

- **Login User:**
  - Endpoint: 'POST http://localhost:4000/api/login'
  - For user login

- **View User profile:**
  - Endpoint: 'GET http://localhost:4000/api/profile/:userId'
  - Retrieves user profile information.

- **Edit User Profile:**
  - Endpoint: 'PUT http://localhost:4000/api/updateProfile/:userId'
  - Allow users to update their profile.

- **Logout User:**
  - Endpoint: 'GET http://localhost:4000/api/logout'
  - For logging out of user.

### Post creation and retrieval
- **Create Post:**
  - Endpoint: 'POST http://localhost:4000/api/post/new'
  - Enables users to create a new post.

- **Retrieve Post:**
  - Endpoint: 'GET http://localhost:4000/api/post/postDetail/:postId'
  - Retrieve a single posts.

- **Add Comment:**
  - Endpoint: 'PUT http://localhost:4000/api/post/add-comment/:postId'
  - Allows users to add comments to a specific post.

- **Delete Post:**
  - Endpoint: 'DELETE http://localhost:4000/api/post/deletePost/:postId'
  - Allow authenticated user to delete a specific post.

