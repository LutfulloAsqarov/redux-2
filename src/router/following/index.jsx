import React from "react";
import Users from "../../components/users/Users";
import { useSelector } from "react-redux";

const Following = () => {
    let data = useSelector((state) => state.follow.value);
    console.log(data);

    return <div>{<Users data={data} />}</div>;
};

export default Following;
