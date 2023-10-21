import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    console.log(friend);
    const {name, email, website, username, id} = friend;
    return (
        <div className='friend'>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <p><small>userName:<Link to={`/friend/${id}`}> {username}</Link> </small></p>
        </div>
    );
};

export default Friend;