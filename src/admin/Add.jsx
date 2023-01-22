import React, { useState } from "react";

export default function Add({ setShowAdd }) {
  const [newUser, setNewUser] = useState({
    role: "vip",
    nationality:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
  });

  const handleAdd = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setNewUser(newUser);

        console.log("Data added successfully");
      } else {
        console.log("Error in adding data");
      }
    } catch (error) {
      console.log(error);
    }
    setShowAdd(false);
  };
  return (
    <form onSubmit={handleAdd} className="bg-white p-6 rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Name:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          name="name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nationality" className="block text-gray-700 font-medium mb-2">
          nationality:
        </label>
        <select
          className="border border-gray-400 p-2 rounded-lg w-full"
          name="role"
          value={newUser.nationality}
          onChange={(e) => setNewUser({ ...newUser, nationality: e.target.value })}>
          <option value="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png">
            nederlands
          </option>
          <option value="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg">
            engels
          </option>
          <option value="https://www.hollandvlaggen.nl/wp-content/uploads/2019/07/Europese20vlaggen20-20Vlag20Belgi%C3%AB20-2013143-1440x928.png">
            belgie
          </option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Rating:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="number"
          min={0}
          max={10}
          name="rating"
          value={newUser.rating}
          onChange={(e) => setNewUser({ ...newUser, rating: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
          Role:
        </label>
        <select
          className="border border-gray-400 p-2 rounded-lg w-full"
          name="role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
          <option selected value="vip">
            vip
          </option>
          <option value="subscriber">subscriber</option>
          <option value="member">member</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Rank:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          name="rank"
          value={newUser.rank}
          onChange={(e) => setNewUser({ ...newUser, rank: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Faceit:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          name="faceit"
          value={newUser.faceit}
          onChange={(e) => setNewUser({ ...newUser, faceit: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Quality:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          name="quality"
          value={newUser.quality}
          onChange={(e) => setNewUser({ ...newUser, quality: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Weakness:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          name="weakness"
          value={newUser.weakness}
          onChange={(e) => setNewUser({ ...newUser, weakness: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Image:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          name="img"
          value={newUser.img}
          onChange={(e) => setNewUser({ ...newUser, img: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Steam:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          name="steam"
          value={newUser.steam}
          onChange={(e) => setNewUser({ ...newUser, steam: e.target.value })}
        />
      </div>

      <div className="text-center">
        <button className="bg-admin hover:bg-green-700 text-white font-bold py-2 px-6 rounded my-6 max-w-sm mx-auto">
          Add new player
        </button>
      </div>
    </form>
  );
}
