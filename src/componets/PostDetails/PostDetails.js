import React from 'react';
import './PostDetails.css';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    const {title, body, userId} = post;
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/friend/${userId}`)
    }
    return (
        <div className='postDetails'>
            
            <h5>{title}</h5>
            <p>{body}</p>
            <button onClick={handleNavigate}>get the author</button>
        </div>
    );
};

export default PostDetails;