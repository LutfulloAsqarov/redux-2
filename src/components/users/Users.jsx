import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeFromUsers } from "../../context/userSlice";
import { follow } from "../../context/followSlice";
import { toast } from "react-toastify";

function Users({ data }) {
    const dispatch = useDispatch();
    let followData = useSelector((state) => state.follow.value);
    return (
        <div className="users__wrapper">
            {data?.map((user) => (
                <div key={user.id} className="users__card">
                    <img src={user.gender === "male" ? male : female} alt="" />
                    <h2>{user.name}</h2>
                    <p>{user.profession}</p>
                    <p>{user.age} years old</p>
                    <button onClick={() => dispatch(removeFromUsers(user))}>
                        Remove
                    </button>
                    <button
                        onClick={() => {
                            dispatch(follow(user));
                        }}
                    >
                        {followData.some((el) => el.id === user.id)
                            ? "Un follow"
                            : "Follow"}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Users;
