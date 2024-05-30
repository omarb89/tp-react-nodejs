import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addMovie, updateMovie, fetchMovie } from '../apiClient.js';

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    release_date: '',
    rating: ''
  });

  useEffect(() => {
    if (id) {
      const loadMovie = async () => {
        const fetchedMovie = await fetchMovie(id);
        setMovie({
          title: fetchedMovie.title,
          genre: fetchedMovie.genre,
          release_date: fetchedMovie.release_date.split('T')[0], // Convertir la date au format yyyy-MM-dd
          rating: fetchedMovie.rating
        });
      };
      loadMovie();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie(prevMovie => ({
      ...prevMovie,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateMovie(id, movie);
    } else {
      await addMovie(movie);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={movie.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Genre</label>
        <input
          type="text"
          name="genre"
          className="form-control"
          value={movie.genre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Release Date</label>
        <input
          type="date"
          name="release_date"
          className="form-control"
          value={movie.release_date}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Rating</label>
        <input
          type="number"
          name="rating"
          className="form-control"
          value={movie.rating}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};

export default MovieForm;
