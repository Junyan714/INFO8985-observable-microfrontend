import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => setError(err.toString()));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Microfrontend - User List</h1>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.id}: {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
