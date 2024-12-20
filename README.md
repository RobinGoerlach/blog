# Blog Application with Node.js, React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This is a full-stack blog application built as a demonstration of building a RESTful API with Node.js and PostgreSQL, combined with a React frontend using modern tools like TailwindCSS, DaisyUI, and Font Awesome. The application enables users to create, view, update, and delete posts, with a user-friendly interface and robust backend functionality.

## Features

### Backend

- **Node.js** with Express for server-side logic.
- **PostgreSQL** database for persisting data.
- RESTful API endpoints for managing posts and users.
- Sequelize ORM for database interaction.

### Frontend

- **React** for a dynamic, single-page application.
- **TailwindCSS** and **DaisyUI** for rapid and elegant styling.
- **Font Awesome** for modern icons.

### Functionalities

- List all blog posts with details.
- Create a new blog post.
- Update existing posts.
- Delete posts.
- Associate posts with users.

## Installation

### Prerequisites

- Node.js (v16+)
- PostgreSQL
- A modern web browser

### Backend Setup

1. Clone the repository.
2. Navigate to the `backend` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up a `.env` file with your database connection string:
   ```env
   PG_URI=your_postgresql_connection_string
   PORT=8080
   ```
5. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
