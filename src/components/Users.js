import React from "react";

const Users = ({users}) => {
  return (
    <div>
        {users.map (user =>(
            <ul key={user.id}>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Password: {user.password}</li>
            </ul>

        ))} 
    </div>
  );
};

export default Users