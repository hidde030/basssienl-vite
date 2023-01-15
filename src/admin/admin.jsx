import React, { useState } from 'react';
const admin = () => {
  
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={response.name} onChange={handleChange} />
        </label>
        <label>
        nationality:
          <input type="text" name="name" value={response.nationality} onChange={handleChange} />
        </label>
        <br />
        <label>
        Rating:
          <input type="text" name="rating" value={response.name} onChange={handleChange} />
        </label>
        <br />
      
        <label>
        rank:
          <input type="text" name="rank" value={response.rank} onChange={handleChange} />
        </label>
        <br />
        <label>
        faceit:
          <input type="text" name="faceit" value={response.faceit} onChange={handleChange} />
        </label>
        <br />

        <label>
        quality:
          <input type="text" name="quality" value={response.quality} onChange={handleChange} />
        </label>
        <br />

        <label>
        quality:
          <input type="text" name="weakness" value={response.weakness} onChange={handleChange} />
        </label>
        <br />
        <label>
        img:
          <input type="text" name="img" value={response.img} onChange={handleChange} />
        </label>
        <br />
        <label>
        steam_url:
          <input type="text" name="steam_url" value={response.steam_url} onChange={handleChange} />
        </label>
        <br />
        <button onClick={handleSave}>Save</button>
      </form>
    </div>
  )
}

export default admin;
