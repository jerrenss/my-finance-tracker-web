const handleSubmit = (event) => {
  event.preventDefault()
  console.log(document.getElementById('purpose').value)
  console.log(document.getElementById('category').value)
  console.log(document.getElementById('amount_spent').value)
  window.location = '/'
}

const Home = () => {
  return (
    <div class="container-sm vh-100 d-flex flex-column justify-content-center align-items-center">
      <h3 class="mb-5">My Finance Tracker</h3>
      <form class="w-100">
        <div class="form-group">
          <label for="purpose">Purpose</label>
          <input
            type="text"
            class="form-control"
            id="purpose"
            name="purpose"
            required
          />
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <input type="text" class="form-control" id="category" required />
        </div>
        <div class="form-group">
          <label for="amount_spent">Amount Spent ($)</label>
          <input
            input
            type="number"
            min="0.00"
            step="0.01"
            class="form-control"
            id="amount_spent"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  )
}

export default Home
