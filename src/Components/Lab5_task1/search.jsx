import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function GetWithSearchAPI() {
  const [post, setPost] = useState({});
  const [id, setId] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPost(response.data); 
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleClick = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder='type the id of the post'
        value={id}
        onChange={event => setId(event.target.value)}
        className="input"
      />
       <button onClick={handleClick} className="button">  {/*  elbutton da mlo4 lazma bayn :D */}
        Search
      </button>
        <p className='list'>{post.title}</p>
    </div>
  );
}

export default GetWithSearchAPI;