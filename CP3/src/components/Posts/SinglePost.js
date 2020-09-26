import React from 'react';
import PropTypes from 'prop-types';
import DOMpurify from 'dompurify';

const SinglePost = ({
  title, category, excerpt,
}) => (
    <article className="post">
      <h2 className="post__title">{title}</h2>
      <span className="post__category">{category}</span>
      <p className="post__excerpt" dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(excerpt) }} />
    </article>
  );

SinglePost.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default SinglePost;
