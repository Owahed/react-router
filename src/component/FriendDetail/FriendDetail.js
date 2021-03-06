import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendsId}=useParams();
    const [friend, setFriend] =useState({})

    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendsId}`
        fetch(url)
        .then(res => res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <p>This is friend details: {friendsId}</p>
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website}</p>

        </div>
    );
};

export default FriendDetail;