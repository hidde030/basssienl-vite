import React, { useEffect, useState } from 'react';

function Admin({ selectedUser, setShowModal }) {

  const [formData, setFormData] = useState({...selectedUser});
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  const handleSave = async (event) => {
    try {
      const response = await fetch('http://localhost:3000/api/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // handle success
        console.log("Data saved successfully")
      } else {
        // handle error
        console.log("Error in saving data")
      }
    } catch (error) {
      // handle error
      console.log(error)
    }
    setShowModal(false)

  }
  
  return (

    <div className='fixed inset-0 top-12 grid text-center text-whte'>
    <form className='bg-white' onSubmit={handleSave} >
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
    
      <label>
      nationality:
        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
      </label>
      <br />
      <label>
      Rating:
        <input type="text" name="rating" value={formData.rating} onChange={handleChange} />
      </label>
      <br />
    
      <label>
      rank:
        <input type="text" name="rank" value={formData.rank} onChange={handleChange} />
      </label>
      <br />
      <label>
      faceit:
        <input type="text" name="faceit" value={formData.faceit} onChange={handleChange} />
      </label>
      <br />

      <label>
      quality:
        <input type="text" name="quality" value={formData.quality} onChange={handleChange} />
      </label>
      <br />

      <label>
      quality:
        <input type="text" name="weakness" value={formData.weakness} onChange={handleChange} />
      </label>
      <br />
      <label>
      img:
        <input type="text" name="img" value={formData.img} onChange={handleChange} />
      </label>
      <br />
      <label>
      steam_url:
        <input type="text" name="steam_url" value={formData.steam_url} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={() => setShowModal(false)}>Close</button>
      

    </form>
    </div>
  )
}

export default Admin;
