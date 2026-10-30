function AddMovie({ title, setTitle, onAdd }) {
  return (
    <div>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button onClick={onAdd}>
        Add movie
      </button>
    </div>
  )
}

export default AddMovie
