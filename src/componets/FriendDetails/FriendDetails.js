import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend)
    const {name} = friend;
    return (
        <div>
            <h1>Friend Name {name}</h1>
            <h2>Everything you need to know about this person.</h2>
        </div>
    );
};

export default FriendDetails;