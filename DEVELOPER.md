# Developer Documentation

This document provides a detailed overview of the structure and development process of the Blog Application project.

## Project Structure

### Backend

```
server.js
├── db/
│   └── index.js
├── controllers/
│   └── posts.js
│   └── users.js
├── models/
│   └── Post.js
│   └── User.js
├── routers/
│   └── postRouter.js
│   └── userRouter.js
└── index.js
```

- **`db/index.js`**: Configures the Sequelize instance for database interaction.
- **Controllers**: Handles the business logic for posts and users.
- **Models**: Defines database schemas for `Post` and `User` entities.
- **Routers**: Defines Express routes for posts and users.
- **`index.js`**: Entry point for the backend application.

### Frontend

```
index.html
├── src/
│   ├── main.js
│   ├── pages/
│   │   └── homepage.js
│   └── styles.css
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

- **Pages**: Contains individual page components such as the homepage.
- **TailwindCSS**: Provides utility-first styling with DaisyUI integration.
- **Vite**: Fast build tool for frontend development.

## API Endpoints

### Users

- `GET /users`: Retrieve all users.
- `POST /users`: Create a new user.
- `GET /users/:id`: Retrieve a user by ID.
- `PUT /users/:id`: Update a user by ID.
- `DELETE /users/:id`: Delete a user by ID.

### Posts

- `GET /posts`: Retrieve all posts.
- `POST /posts`: Create a new post.
- `GET /posts/:id`: Retrieve a post by ID.
- `PUT /posts/:id`: Update a post by ID.
- `DELETE /posts/:id`: Delete a post by ID.

## Development Workflow

### Backend

1. Implement or modify database schemas in the `models` folder.
2. Add or update logic in the controllers.
3. Define or adjust API routes in the `routers` folder.
4. Test endpoints using Postman or similar tools.

### Frontend

1. Create new page components in the `pages` folder.
2. Integrate API calls using `fetch` or Axios in the appropriate scripts.
3. Style components using TailwindCSS and DaisyUI classes.
4. Test the UI in a development environment.

## Environment Setup

### Backend

Ensure you have a `.env` file with:

```env
PG_URI=your_postgresql_connection_string
PORT=8080
```

### Frontend

No environment variables are required for the frontend. Configure settings in `vite.config.js` if needed.

## Contribution Guidelines

1. **Git Workflow**:
   - Use feature branches.
   - Submit pull requests for review.
2. **Code Style**:
   - Follow consistent formatting and naming conventions.
   - Use comments to document significant logic.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
