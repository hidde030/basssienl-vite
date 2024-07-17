import React, { useState, useEffect } from "react"
import Add from "./Add"
import Admin from "./admin"
import UploadImage from "./UploadImage"
import { useNavigate } from "react-router-dom"

function UserList() {
  const navigateTo = useNavigate()
  const [response, setResponse] = useState({})
  const [selectedUser, setSelectedUser] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const API_URL =
    process.env.NODE_ENV === "development"
      ? import.meta.env.VITE_API_URL_DEV
      : import.meta.env.VITE_API_URL_PROD
  useEffect(() => {
    const auth = sessionStorage.getItem("login")
    if (!auth) {
      navigateTo("/login")
    }
    fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("auth"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data)
      })

      .catch((err) => {
        console.log(err.message)
      })
  }, [])
  const handleSelect = (user) => {
    setSelectedUser(user)
    setShowModal(true)
  }
  const sortCards = () => {
    const auth = sessionStorage.getItem("login")
    if (!auth) {
      navigateTo("/login")
    }
    fetch(`${API_URL}/sort`, {
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("auth"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data)
      })
  }
  function setNonActive(name) {
    const auth = sessionStorage.getItem("login")
    if (!auth) {
      navigateTo("/login")
    }
    fetch(`${API_URL}/active/${name}`, {
      method: "PUT",
      body: JSON.stringify({ active: false }),
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("auth"),
      },
    })
  }
  const setActive = (name) => {
    const auth = sessionStorage.getItem("login")
    if (!auth) {
      navigateTo("/login")
    }
    fetch(`${API_URL}/active/${name}`, {
      method: "PUT",

      body: JSON.stringify({ active: true }),
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("auth"),
      },
    })
  }
  const deleteCard = (name) => {
    const auth = sessionStorage.getItem("login")
    if (!auth) {
      navigateTo("/login")
    }
    fetch(`${API_URL}/delete/${name}`, {
      method: "DELETE",
      headers: {
        Authorization: sessionStorage.getItem("auth"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data)
      })
  }

  return (
    <div className="container mx-auto bg-admin bg-opacity-10">
      <div className="flex justify-center ">
        <button
          className="bg-card_purple text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowAdd(true)}>
          Add new user
        </button>
        <button
          className="bg-card_purple text-white font-bold py-2 px-4 rounded ml-4"
          onClick={() => sortCards()}>
          Sort the cards
        </button>
        <button
          className="bg-card_purple text-white font-bold py-2 px-4 rounded ml-4"
          onClick={() => setShowImage(true)}>
          Upload image
        </button>
      </div>
      {showImage && <UploadImage setShowImage={setShowImage} />}
      {showAdd && <Add setShowAdd={setShowAdd} />}

      <ul>
        {response.data?.map((user) => (
          <div className="flex">
            <li
              className="px-6 py-2 border-b border-gray w-full text-white"
              key={user.name}
              onClick={() => handleSelect(user)}>
              {/* username and image */}
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-
                4"
                  src={user.img}
                  alt="image"
                />
                <div className="text-sm text-center">
                  <p className="text-white leading-none text-center font-bold pl-4">
                    {user.name}
                  </p>
                </div>
              </div>
            </li>
            {/*on hover add person to giveway i want a new button with delete */}

            <button
              className="bg-emerald-700 text-white font-bold py-2  my-2 mx-0.5 rounded  "
              onClick={() => {
                setActive(user.name)
              }}>
              set active
            </button>

            <button
              className="bg-faceit text-white font-bold py-2  my-2 mx-0.5   rounded break-keep  "
              onClick={() => {
                setNonActive(user.name)
              }}>
              set nonactive
            </button>
            <button
              className="bg-[#FF0000] text-white font-bold py-2 px-4 my-2 mx-0.5   rounded "
              onClick={() => deleteCard(user.name)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
      {showModal && <Admin selectedUser={selectedUser} setShowModal={setShowModal} />}
    </div>
  )
}

export default UserList
