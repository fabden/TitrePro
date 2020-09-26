import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DOMpurify from 'dompurify';

const Post = ({
  title, category, excerpt, slug,
}) => (
    <article className="post">
      <Link to={`/articles/${slug}`}>
        <h2 className="post__title">{title}</h2>
      </Link>
      <span className="post__category">{category}</span>
      <p className="post__excerpt" dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(excerpt) }} />
    </article>
  );

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Post;
