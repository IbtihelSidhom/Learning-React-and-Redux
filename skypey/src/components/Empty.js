import React from "react";
import "./Empty.css";

const Empty = ({ user }) => {
    const { name, profile_pic, status } = user;
    const first_name = name.split(" ")[0];
    //console.log('user', user)
    return (
        <div className="Empty">
            <h1 className="Empty__name"> Welcom, {first_name} </h1>
            <img src={profile_pic} alt={name} className="Empty__img"/> 
            <p className="Empty__status">
                <b>Status: </b> {status}
            </p>
            <button className="Empty__btn"> Start a conversation</button>
            <p className="Empty__info">
                search for someone to start chatting with or go to contacts to see who is available
            </p>
        </div>
    );
};

export default Empty;