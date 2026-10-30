import { useState } from "react"
import MovieItem from "../components/MovieItem.jsx"

function Movies({ movies, onDelete, onEdit }) {
  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")

  const cleanSearch = search.trim().toLowerCase()

  const filteredMovies = movies.filter((movie) => {

    return movie.title.toLowerCase().includes(cleanSearch)
  })



  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title)
    }
    return b.title.localeCompare(a.title)
  })


  function handleReset() {
    setSearch("")
    setSortOrder("asc")
  }

  const foundCount = filteredMovies.length

  return (
    <div>
      <p>Found: {foundCount}</p>

      <button onClick={handleReset}>
        Reset
      </button>

      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button onClick={() => setSortOrder("asc")}>
        A → Z
      </button>

      <button onClick={() => setSortOrder("desc")}>
        Z → A
      </button>

      <p>
        Current sort: {sortOrder === "asc" ? "A → Z" : "Z → A"}
      </p>


      {movies.length === 0 && <p>Your movie list is empty</p>}

      {movies.length > 0 && filteredMovies.length === 0 && (
        <p>No movies found</p>
      )}

      {sortedMovies.map(movie => (
        <div key={movie.id}>
          <MovieItem movie={movie} onEdit={onEdit} />

          <button onClick={() => onDelete(movie.id)}>Delete</button>

        </div>
      ))}

    </div>
  )
}

export default Movies
