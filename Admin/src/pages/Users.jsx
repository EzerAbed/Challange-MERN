import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        setUsers([...users, data]);
        setNewUser({
          username: '',
          email: '',
          password: '',
        });
      });
  };

  const handleUpdate = (id, updatedUser) => {
    fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser),
    })
      .then(response => response.json())
      .then(data => {
        setUsers(users.map(user => user._id === id ? data : user));
      });
  };

  const handleDelete = (id) => {
    fetch(`/api/users/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setUsers(users.filter(user => user._id !== id));
      });
  };

  return (
    <div>
      <h1>Admin Users Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={newUser.username} onChange={(event) => setNewUser({ ...newUser, username: event.target.value })} />
        </label>
        <label>
          Email:
          <input type="text" value={newUser.email} onChange={(event) => setNewUser({ ...newUser, email: event.target.value })} />
        </label>
        <label>
          Password:
          <input type="password" value={newUser.password} onChange={(event) => setNewUser({ ...newUser, password: event.target.value })} />
        </label>
        <button type="submit">Create User</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleUpdate(user._id, { ...user, username: 'Updated Username' })}>Update</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;