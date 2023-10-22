import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    // console.log(post)
    const {title, body, id} = post;
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}>PostId-{id}</Link>
            <Link to={`/post/${id}`}>
                <button>Post </button>
            </Link>
            <button onClick={handleNavigate}> Click Post </button>
        </div>
    );
};

export default Post;