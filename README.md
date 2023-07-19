# 4Artists Backend

Welcome to the backend of 4Artists - A Social Network for Artists!

## Overview

The 4Artists backend is responsible for handling all the server-side functionalities of the application. It manages user authentication, database interactions, and provides the necessary API endpoints for the frontend to interact with the data.

## Technologies Used

The 4Artists backend is built using the following technologies:

- **Node.js**: A JavaScript runtime environment for server-side development.
- **Express.js**: A web application framework for building robust APIs in Node.js.
- **MySQL**: A relational database management system for storing and managing data.
- **JWT (JSON Web Tokens)**: For secure user authentication and authorization.

## API Endpoints

The backend provides the following API endpoints for the frontend to interact with:

| Endpoint                     | HTTP Method | Description                                                     |
| ---------------------------- | ----------- | --------------------------------------------------------------- |
| `/auth/register`                       | POST        | Register a new user                                   |
| `/auth/login`                          | POST        | Log in an existing user                               |
| `/auth/logout`                         | POST        | Log out the currently logged-in user                  |
| `/users/:userId`                       | GET         | Get user information by user ID                       |
| `/users/`                              | GET         | Get all users                                         |
| `/users/:userIdlikes/:postId`          | GET         | Get every user like                                   |
| `/posts`                               | GET         | Get all posts                                         |
| `/profile/posts`                       | GET         | Get user own posts                                    |
| `/post/:id`                            | GET         | Get post by id                                        |
| `/post`                                | POST        | Create a post                                         |
| `/post/:id`                            | DELETE      | Delete post by id                                     |


## Database Schema

The backend uses a MySQL database with the following tables:

### `users` table

| Column         | Type         | Description                              |
| -------------- | ------------ | ---------------------------------------- |
| `id`           | INT          | Unique ID for the user (Primary Key)     |
| `username`     | VARCHAR(50)  | User's username                          |
| `email`        | VARCHAR(100) | User's email address                     |
| `password`     | VARCHAR(100) | Hashed password for user authentication  |
| `bdate`        | DATETIME     | Birth date                               |
| `image`        | STRING       | Image for user profile                   |
| `bio`          | STRING       | User biography                           |
| `location`     | STRING       | User location                            |
| `website`      | STRING       | User website                             |

### `posts` table

| Column          | Type         | Description                              |
| --------------- | ------------ | ---------------------------------------- |
| `id`            | INT          | Unique ID for the artwork (Primary Key)  |
| `text`          | STRING       | Text in post                             |
| `img`           | STRING       | Image in post                            |
| `created_at`    | DATETIME     | Timestamp for artwork creation           |
| `updated_at`    | DATETIME     | Timestamp for artwork updates            |
| `user_id`       | INT          | Foreign Key referencing the `users` table for the commenter |

### `like` table

| Column          | Type         | Description                              |
| --------------- | ------------ | ---------------------------------------- |
| `id`            | INT          | Unique ID for the comment (Primary Key)  |
| `post_id`       | INT          | Foreign Key referencing the `post` table for the post |
| `user_id`       | INT          | Foreign Key referencing the `users` table for the commenter |
| `created_at`    | DATETIME     | Timestamp for comment creation           |
| `updated_at`    | DATETIME     | Timestamp for comment updates            |

## Getting Started

To set up and run the 4Artists backend locally, follow these steps:

1. Clone the repository from [GitHub](https://github.com/JB-Aguilar/4Artists).
2. Install the required dependencies using `npm install`.
3. Create a MySQL database and configure the connection in `.env` file.
4. Run the database migrations using `npm run knex migrate:latest`.
5. Start the backend server with `npm start`.
6. The backend will run on `http://localhost:3000`.

## Contributing

We welcome contributions to the backend of 4Artists. If you'd like to contribute, please check out our Contribution Guidelines for more information.

## Support

For any questions or issues, feel free to contact our support team at support@4artists.com.

## License

The 4Artists backend is open-source software licensed under the MIT License.

