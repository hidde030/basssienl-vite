import React, { useState, useEffect } from 'react';
import Admin from './Admin';
function UserList() {
  const [response, setResponse] = useState({});
  const [selectedUser, setSelectedUser] = useState({});
  useEffect(() => {
    fetch('http://localhost:3000/api')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setResponse(data);
       })

       .catch((err) => {
          console.log(err.message);
       });
 }, []);
  const handleSelect = (user) => {
    console.log(user);
    setSelectedUser(user);
  }

  return (
    <div className='container mx-auto bg-admin bg-opacity-10'>
      <ul >
        
        {response.data?.map(user => (
            <li className='px-6 py-2 border-b border-gray w-full text-white' key={user.name} onClick={() => handleSelect(user)}>
            {/* username and image */}
            <div className='flex items-center'>
                <img className='w-10 h-10 rounded-full mr-
                4' src={user.img} alt='image' />
                <div className='text-sm'>
                <p className='text-white leading-none text-center'>{user.name}</p>
                </div>
            </div>
            </li>
        ))}
      </ul>
      <Admin selectedUser={selectedUser}  />
    </div>
  );
}

export default UserList;
