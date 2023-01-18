import React, { useEffect, useState } from 'react';

function Admin({ selectedUser, setShowModal }) {

  const [formData, setFormData] = useState({...selectedUser});
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  const handleSave = () => {
    // send formData to API endpoint here
    
  }
  return (

    <div className='fixed inset-0 top-12 grid text-center text-whte'>
    <form className='bg-white' key={selectedUser.name}>
      <label>
        Name:
        <input type="text" name="name" value={selectedUser.name} onChange={handleChange} />
      </label>
      <label>
      nationality:
        <input type="text" name="nationality" value={selectedUser.nationality} onChange={handleChange} />
      </label>
      <br />
      <label>
      Rating:
        <input type="text" name="rating" value={selectedUser.rating} onChange={handleChange} />
      </label>
      <br />
    
      <label>
      rank:
        <input type="text" name="rank" value={selectedUser.rank} onChange={handleChange} />
      </label>
      <br />
      <label>
      faceit:
        <input type="text" name="faceit" value={selectedUser.faceit} onChange={handleChange} />
      </label>
      <br />

      <label>
      quality:
        <input type="text" name="quality" value={selectedUser.quality} onChange={handleChange} />
      </label>
      <br />

      <label>
      quality:
        <input type="text" name="weakness" value={selectedUser.weakness} onChange={handleChange} />
      </label>
      <br />
      <label>
      img:
        <input type="text" name="img" value={selectedUser.img} onChange={handleChange} />
      </label>
      <br />
      <label>
      steam_url:
        <input type="text" name="steam_url" value={selectedUser.steam_url} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={() => setShowModal(false)}>Close</button>
      

    </form>
    </div>
  )
}

export default Admin;
