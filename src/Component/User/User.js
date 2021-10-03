import React from 'react';
import './User.css';

const User = (props) => {
    const { name, email, phone, picture, salary, age } = props.user;
    // console.log(props);
    return (
        <div className="user-container">
            <div className="single-user">
                <div className="profile-img">
                    <img src={picture} alt="" />
                </div>
                <h2>{name}</h2>
                <p><b>Age:</b> { age }</p>
                <p><b>Email:</b> { email }</p>
                <p><b>Phone:</b> { phone }</p>
                <p><b>Salary:</b> {salary}</p>
                <button onClick={() => props.handleUser(props.user)}>Add User</button>
            </div>
        </div>
    );
};

export default User;