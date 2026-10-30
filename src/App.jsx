import { useState } from "react"
import { Route, Routes, useNavigate, Navigate } from "react-router-dom"
import AddMovie from "./components/AddMovie.jsx"
import Movies from "./pages/Movies.jsx"
import Movie from "./pages/Movie.jsx"
import { initialMovies } from "./data/initialMovies.js"
import NotFound from "./pages/NotFound.jsx"

function App() {
  const navigate = useNavigate()

  const [movies, setMovies] = useState(initialMovies)
  const [title, setTitle] = useState("")

  function handleAddMovie() {

    const cleanTitle = title.trim()

    if (!cleanTitle) {
      return
    }

    const newMovie = {
      id: Date.now(),
      title: cleanTitle
    }

    setMovies((prevMovies) => [...prevMovies, newMovie])

    setTitle("")

    navigate("/movies")
  }


  function handleDelete(id) {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== id)
    )
  }


  function handleEdit(id, newTitle) {
    setMovies((prevMovies) => prevMovies.map((movie) => {
      if (movie.id === id) {
        return {
          ...movie,
          title: newTitle
        }
      }
      return movie
    }))

  }

  return (
    <>
      <AddMovie
        title={title}
        setTitle={setTitle}
        onAdd={handleAddMovie}
      />

      <Routes>

        <Route path="/" element={<Navigate to="/movies" replace />} />

        <Route
          path="/movies"
          element={<Movies movies={movies} onDelete={handleDelete} onEdit={handleEdit} />}
        />

        <Route
          path="/movies/:movieId"
          element={<Movie movies={movies} />}
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )

}

export default App
