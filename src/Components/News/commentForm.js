import React, { useState } from 'react';

function CommentForm({ onCommentSubmit }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="comment">Add a Comment</label>
        <textarea
          id="comment"
          className="form-control"
          rows="3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit Comment
      </button>
    </form>
  );
}

export default CommentForm;
