# 🎬 Movies CRUD

A simple movie management application built with **React, JavaScript, and Vite**.

This project demonstrates fundamental React concepts, including component-based architecture, state management with React Hooks, CRUD operations, and client-side routing.

## Features

- **Add Movies** — Add new movies with title validation.
- **Edit Movies** — Update existing movie titles.
- **Delete Movies** — Remove movies from the list.
- **Search Movies** — Filter movies by title in real time.
- **Sort Movies** — Sort movies alphabetically.
- **Reset Filters** — Reset search and sorting settings.
- **Movie Details** — View individual movie pages using dynamic routes.
- **404 Page** — Display a custom page for unknown routes.

## Tech Stack

- React
- JavaScript (ES6+)
- Vite
- React Router
- CSS

## Project Structure

```text
src/
├── components/
│   ├── AddMovie.jsx
│   └── MovieItem.jsx
├── pages/
│   ├── Movies.jsx
│   ├── Movie.jsx
│   └── NotFound.jsx
├── data/
│   └── initialMovies.js
├── App.jsx
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project directory

```bash
cd <repository-folder>/react-lessons
```

### 3. Install dependencies

```bash
npm ci
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run lint`    | Check code with ESLint               |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |

## What I Learned

During this project, I practised:

- Managing state with `useState`.
- Updating arrays immutably using `map`, `filter`, and the spread operator.
- Passing data and callback functions between components through props.
- Building reusable React components.
- Working with controlled inputs.
- Implementing dynamic routes with React Router.
- Organizing a React application into components, pages, and data files.

## Future Improvements

- Save movies using local storage.
- Integrate an external movie API.
- Improve the user interface and responsive design.
- Add automated tests.

## Author

**Nikolay Dikusar**

- GitHub: https://github.com/NikoDCode
