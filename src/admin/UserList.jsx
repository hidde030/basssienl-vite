import React, { useState, useEffect } from 'react';
import Admin from './Admin';

function UserList() {
  const [response, setResponse] = useState({});
  const [selectedUser, setSelectedUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('https://bassienl.nl/api')
       .then((response) => response.json())
       .then((data) => {
          setResponse(data);
       })

       .catch((err) => {
          console.log(err.message);
       });
 }, []);
  const handleSelect = (user) => {
    setSelectedUser(user);
  

    setShowModal(true);
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
                <div className='text-sm text-center'>
                <p className='text-white leading-none text-center'>{user.name}</p>
                </div>
            </div>
            </li>
        ))}
      </ul>
      {showModal && <Admin selectedUser={selectedUser} setShowModal={setShowModal} />}
          </div>
  );
}

export default UserList;
