import React, { useState } from 'react';

function Admin(props) {
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSave = () => {
    // send formData to API endpoint here
    console.log(formData);
  }
  return (
    <div className='fixed inset-0 grid text-center'>
    <form key={props.name}>
      <label>
        Name:
        <input type="text" name="name" value={props.name} onChange={handleChange} />
      </label>
      <label>
      nationality:
        <input type="text" name="nationality" value={props.nationality} onChange={handleChange} />
      </label>
      <br />
      <label>
      Rating:
        <input type="text" name="rating" value={props.rating} onChange={handleChange} />
      </label>
      <br />
    
      <label>
      rank:
        <input type="text" name="rank" value={props.rank} onChange={handleChange} />
      </label>
      <br />
      <label>
      faceit:
        <input type="text" name="faceit" value={props.faceit} onChange={handleChange} />
      </label>
      <br />

      <label>
      quality:
        <input type="text" name="quality" value={props.quality} onChange={handleChange} />
      </label>
      <br />

      <label>
      quality:
        <input type="text" name="weakness" value={props.weakness} onChange={handleChange} />
      </label>
      <br />
      <label>
      img:
        <input type="text" name="img" value={props.img} onChange={handleChange} />
      </label>
      <br />
      <label>
      steam_url:
        <input type="text" name="steam_url" value={props.steam_url} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleSave}>Save</button>
    </form>
    </div>
  )
}

export default Admin;
