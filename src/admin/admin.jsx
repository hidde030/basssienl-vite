import React, { useEffect, useState } from "react";

function Admin({ selectedUser, setShowModal }) {
  const [formData, setFormData] = useState({ ...selectedUser });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSave = async (event) => {
    try {
      const response = await fetch("https://bassienl.nl/api/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // handle success
        console.log("Data saved successfully");
      } else {
        // handle error
        console.log("Error in saving data");
      }
    } catch (error) {
      // handle error
      console.log(error);
    }
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 top-12 grid text-center bg-card_bg ">
      <div className=" mx-auto container">
      <form className=" flex flex-col" onSubmit={handleSave}>
        <div class="relative mb-2">
          <label className="text-white"  for="name">Name:</label>
          <input
          disabled
            class="block appearance-none w-full bg-primary-grey border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div class="relative mb-2">
          <label className="text-white"  for="nationality">nationality:</label>

          <input
            class="block appearance-none w-full bg-primary-grey border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
        </div>
        <div class="relative mb-2">
          <label className="text-white" for="rating">Rating:</label>

          <input
            class="block appearance-none w-full bg-primary-grey border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div class="relative mb-2">
          <label className="text-white"  for="rank">rank:</label>
          <input
            class="block appearance-none w-full bg-primary-grey border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="rank"
            value={formData.rank}
            onChange={handleChange}
          />
        </div>
        <div class="relative mb-2">
          <label className="text-white"  for="faceit">faceit:</label>
          <input
            class="block appearance-none w-full bg-primary-grey border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="faceit"
            value={formData.faceit}
            onChange={handleChange}
          />
        </div>
        <div class="relative mb-2">
          <label className="text-white"  for="quality">quality:</label>
          <input
            class="block appearance-none w-full bg-primary-grey border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="quality"
            value={formData.quality}
            onChange={handleChange}
          />
        </div>

        <div class="relative mb-2">
          <label className="text-white"  for="img">img:</label>

          <input
            class="block appearance-none w-full bg-primary-grey border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </div>
        <div class="relative mb-2">
          <label className="text-white"  for="steam_url">steam_url:</label>

          <input
            class="block appearance-none w-full bg-primary-grey border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="steam_url"
            value={formData.steam_url}
            onChange={handleChange}
          />
        </div>
        <button                                    class="bg-admin hover:bg-green-700 text-white font-bold py-2 px-6 rounded my-6 max-w-sm mx-auto"
 onClick={handleSave}>Save</button>
        <button                                      class="bg-admin hover:bg-green-700 text-white font-bold py-2 px-6 rounded my-6 max-w-sm mx-auto"
onClick={() => setShowModal(false)}>Close</button>
      </form>
      </div>
    </div>
  );
}

export default Admin;
