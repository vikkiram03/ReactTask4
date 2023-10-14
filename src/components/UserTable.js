import React, { useState, useEffect } from "react";
import axios from "axios";

const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
        .then((response) => {
        setUsers(response.data.users);
        });
    }, []);

    const myStyle = {
        width: '50px',
        height: '50px'
    }

    return (
        <div>
            <h2 className="display-1 text-center">React Task 4</h2>
            <h6 className="display-6 text-center">By 21BCE5919 Vikram Ramkumar</h6>
            <br></br>
            <table className="table table-striped table-bordered text-center">
                <thead>
                    <tr>
                    <th width="100">S.No</th>
                    <th width="100">Profile Pic</th>
                    <th width="100">First Name</th>
                    <th width="100">Last Name</th>
                    <th width="100">Gender</th>
                    <th width="100">E-mail</th>
                    <th width="100">Username</th>
                    <th width="100">Domain</th>
                    <th width="100">IP</th>
                    <th width="100">University</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td><img src={user.image} alt="" style={myStyle}></img></td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.domain}</td>
                        <td>{user.ip}</td>
                        <td>{user.university}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
