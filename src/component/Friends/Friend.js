import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { name, email, id } = props.friend;

    const history = useHistory();


    function handelClick(friendId) {
        history.push(`/friend/${friendId}`);
    }

    return (
        <div className='friends-div'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>id: <Link to={`/friend/${id}`}>Show details of : {id} </Link></p>
            <button onClick={()=>handelClick(id)}>Details</button>
        </div>
    );
};

export default Friend;