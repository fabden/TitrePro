import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Post from './Post';

const Posts = ({ posts, category }) => (
  <main className="posts">
    <h1 className="posts__title">Dev of thrones</h1>
    <p>Catégorie: {category}</p>
    <div className="posts__list">
      {
        posts.map((post) => (
          <Post key={post.id} {...post} />
        ))
      }
    </div>
  </main>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  category: PropTypes.string.isRequired,
};

export default Posts;
