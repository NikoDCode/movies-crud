import { useState } from "react"
import { Link } from "react-router-dom"

function MovieItem({ movie, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(movie.title)

  function handleSave() {
    const cleanTitle = editTitle.trim()

    if (!cleanTitle) {
      return
    }

    onEdit(movie.id, cleanTitle)
    setIsEditing(false)
  }

  return (
    <div>
      {isEditing ? (
        <>
          <input
            value={editTitle}
            onChange={(event) => setEditTitle(event.target.value)}
          />
          <button onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <Link to={`/movies/${movie.id}`} >
            {movie.title}
          </Link>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )

      }
    </div>
  )
}

export default MovieItem
