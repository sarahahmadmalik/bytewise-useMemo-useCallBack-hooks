import { useCallback, useState } from 'react';

import { shuffle } from '@/utils';

import Search from './Search';

const allUsers = [
  'john',
  'alex',
  'george',
  'simon',
  'james',
];


export default function App() {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    () => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) =>
        user.includes(text),
      );
      setUsers(filteredUsers);
    },
    [users],
  );

  return (
    <div className=''>
      <div className=''>
        <button onClick={() => setUsers(shuffle(allUsers))}>
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}