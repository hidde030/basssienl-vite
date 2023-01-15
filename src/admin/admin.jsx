import React, { useState } from 'react';
import jsonfile from 'jsonfile';

const admin = () => {
  const [jsonData, setJsonData] = useState(jsonfile.readFileSync('../data/user.json'));
  const handleChange = (e) => {
    setJsonData({
      ...jsonData,
      [e.target.name]: e.target.value
    });
  }

  const handleSave = () => {
    jsonfile.writeFileSync('../data/user.json', jsonData);
  }

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={jsonData.name} onChange={handleChange} />
        </label>
        <br />
      
        <button onClick={handleSave}>Save</button>
      </form>
    </div>
  )
}

export default admin;
