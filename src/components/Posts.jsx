import { useState } from 'react';

export default function Posts({ posts }) {
  const [likedPostIds, setLikedPostIds] = useState([2]);

  const likePost = (postId) =>
    setLikedPostIds((prevIds) => [...prevIds, postId]);

  const unlikePost = (postId) =>
    setLikedPostIds((prevIds) => prevIds.filter((id) => id !== postId));

  return (
    <ul className='list'>
      {posts.map((post) => {
        const isLiked = likedPostIds.includes(post.id);

        return (
          <li className='post' key={post.id}>
            <h2>{post.title}</h2>
            <p className='content'>{post.content}</p>
            <p className='metadata'>
              <span className='author'>
                By {post.author} on {post.date}
              </span>
              <span className='likes'>
                {isLiked ? post.likes + 1 : post.likes} Likes
              </span>
            </p>
            <button
              className={`like-button ${isLiked ? 'is-liked' : ''}`}
              onClick={() =>
                isLiked ? unlikePost(post.id) : likePost(post.id)
              }>
              {isLiked ? 'Unlike' : 'Like'}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
