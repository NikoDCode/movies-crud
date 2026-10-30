import { useParams } from "react-router-dom"

function Movie({ movies }) {
  const { movieId } = useParams()
  const movie = movies.find((movie) => movie.id === Number(movieId))
  if (!movie) {
    return (
      <p>Movie not found</p>
    )

  }
  return (
    <p>{movie.title}</p>
  )
}

export default Movie
