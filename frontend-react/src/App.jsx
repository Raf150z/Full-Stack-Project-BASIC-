import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:3000/api/users');
    const data = await res.json();
    setUsers(data);
  };

  const createUser = async () => {
    await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      harders: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>Usuarios</h1>

      <input placeholder='Nombre' onChange={e => setName(e.target.value)} />
      <input placeholder='Email' onChange={e => setEmail(e.target.value)} />
      <button onClick={createUser}>Guardar</button>

      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;