import { useEffect, useState } from 'react';
import { fetchReviews, deleteReview } from '../apiClient';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      const reviewsData = await fetchReviews();
      setReviews(reviewsData);
    };
    loadReviews();
  }, []);

  const handleDelete = async (id) => {
    await deleteReview(id);
    setReviews(reviews.filter(review => review.id !== id));
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Reviews</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Movie/Show ID</th>
              <th>User</th>
              <th>Review</th>
              <th>Rating</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map(review => (
              <tr key={review.id}>
                <td>{review.movie_or_show_id}</td>
                <td>{review.user}</td>
                <td>{review.review}</td>
                <td>{review.rating}</td>
                <td>{review.created_at}</td>
                <td>
                  <button className="btn btn-info btn-sm me-2" onClick={() => setSelectedReview(review)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(review.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewsList;
