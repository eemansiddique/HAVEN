import React from 'react';

const ExpertsListComponent = ({ userList, expertList }) => {
  return (
    <div>
      <h2>Experts</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {/* Add more expert fields as needed */}
          </tr>
        </thead>
        <tbody>
          {expertList.map(expert => (
            <tr key={expert.id}>
              <td>{expert.name}</td>
              <td>{expert.email}</td>
              {/* Render more expert fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpertsListComponent;