const API_BASE_URL = 'http://localhost:5000';

export async function fetchMovies() {
  const response = await fetch(`${API_BASE_URL}/movies`);
  return response.json();
}
export async function fetchMovie(id) {
  const response = await fetch(`${API_BASE_URL}/movies/${id}`);
  return response.json();
}

export async function addMovie(movie) {
  const response = await fetch(`${API_BASE_URL}/movies`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie)
  });
  return response.json();
}

export async function updateMovie(id, movie) {
  const response = await fetch(`${API_BASE_URL}/movies/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie)
  });
  return response.json();
}

export async function deleteMovie(id) {
  await fetch(`${API_BASE_URL}/movies/${id}`, { method: 'DELETE' });
}

export async function fetchReviews() {
  const response = await fetch(`${API_BASE_URL}/reviews`);
  return response.json();
}

export async function addReview(review) {
  const response = await fetch(`${API_BASE_URL}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review)
  });
  return response.json();
}

export async function updateReview(id, review) {
  const response = await fetch(`${API_BASE_URL}/reviews/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review)
  });
  return response.json();
}

export async function deleteReview(id) {
  await fetch(`${API_BASE_URL}/reviews/${id}`, { method: 'DELETE' });
}
