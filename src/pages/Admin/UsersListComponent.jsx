import React from 'react';

const UsersListComponent = ({ userList, expertList }) => {
  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {/* Add more user fields as needed */}
          </tr>
        </thead>
        <tbody>
          {userList.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {/* Render more user fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersListComponent;