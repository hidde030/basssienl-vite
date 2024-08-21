import React, { useState, useEffect } from "react"

export default function AdminCounter({ user }) {
  // 2 api calls increment and decrement post request
  // see the count in this component
  // increment and decrement button
  // style the page in tailwindcss

  const [counter, setCounter] = useState(user.counter)

  const API_URL =
    process.env.NODE_ENV === "development"
      ? import.meta.env.VITE_API_URL_DEV
      : import.meta.env.VITE_API_URL_PROD
  const increment = async () => {
    const response = await fetch(`${API_URL}/counter/increment/${user.name}`, {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("auth"),
      },
    })
    const data = await response.json()
    setCounter(data.counter)
  }

  const decrement = async () => {
    const response = await fetch(`${API_URL}/counter/decrement/${user.name}`, {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("auth"),
      },
    })
    const data = await response.json()
    setCounter(data.counter)
  }
  useEffect(() => {
    setCounter(user.counter) // Sync counter with the user prop if it changes
  }, [user.counter])

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <div className="flex space-x-4 mt-4 justify-center ">
          <button
            onClick={decrement}
            className="bg-gray/65 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Games - 1
          </button>
          <h2 className="text-xl font-bold text-white text-center text-nowrap mx-auto my-auto">
            {counter}
          </h2>
          <button
            onClick={increment}
            className="bg-gray hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            Games + 1
          </button>
        </div>
      </div>
    </>
  )
}
