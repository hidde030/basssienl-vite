// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"
import CardGiveAway from "../components/CardGiveAway"
// Import Swiper styles
import "swiper/css"
import "swiper/css/scrollbar"
import { useEffect, useState } from "react"

export default function giveAway() {
  const winners = [
    "giveaway_1.png",
    "giveaway_2.png",
    "giveaway_3.png",
    "giveaway_4.png",
    "giveaway_5.png",
    "giveaway_6.png",
    "giveaway_7.png",
    "giveaway_9.png",
    "giveaway_10.png",
    "giveaway_11.png",
  ]

  const [props, setProps] = useState([])
  useEffect(() => {
    fetch("https://bassienl.nl/api/giveaway", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProps(data)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [])

  return (
    <section className="text-gray-600 body-font overflow-hidden text-white bg-gray bg-opacity-30 rounded  ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="py-12 md:w-1/2 flex flex-col items-start">
            {/* BASSIENL */}
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              Free Knife Giveaway
            </h2>
            <p className="mb-3">
              De maanden Januari, Februari, Maart EN April kan je tickets verzamelen door
              channelpoints te sparen op twitch. Ook geeft BassieNL Random Bonus tickets
              weg! Deze krijg je door te lurken en mee te gaan met raids. Uitcashen kan
              tijdens de live streams, Maximaal 5 per persoon per stream! Je hoeft niet
              aanwezig te zijn tijdens de giveaway stream en ook non subs maken kans.
            </p>
            <h3 className="text-2xl">Knives Prijzenpot</h3>
            <ul className="list-disc list-inside ">
              <li>5% Huntsman knife Lore FT</li>
              <li>20% Bowie knife autotronic FT</li>
              <li>75% Ursus knife safari mesh MW</li>
            </ul>
            <div className="flex pt-4">
              <a
                target="_blank"
                class="bg-card_bg  text-white font-bold py-2 px-4 rounded "
                href="https://docs.google.com/spreadsheets/d/1QAvPHMlY_nwfYDbXuX49wUqrU9iIr0Np9lAiXxKGe6c/edit#gid=0">
                Tickets
              </a>

              <a
                target="_blank"
                class="bg-card_bg  text-white font-bold py-2 px-4 rounded ml-4 "
                href="https://wheelofnames.com/26k-mjs">
                Knives wheel
              </a>
            </div>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <div className=" w-full">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 text-center">
                Previous Winners
              </h2>
              <Swiper
                className={"winners"}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}>
                {winners.map((slideContent, index) => (
                  <SwiperSlide key={index} virtualIndex={index}>
                    <img
                      src={`https://bassienl.nl/images/${slideContent.trim()}`}
                      className="object-cover object-center rounded"
                      alt="hero"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* <div className="py-12 md:w-1/2 flex flex-col items-start justify-between  ">
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              Current Giveaway
            </h2>

            <img
              src="https://bassienl.nl/images/giveaway_8.png"
              className="object-center rounded h-full w-full cover-fill "
              alt="hero"
            />
          </div> */}
          {/* <div className="p-12 md:w-1/2 flex flex-col items-start">
            <div className=" w-full">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 text-center">
                Previous Giveaways
              </h2>
              <Swiper
                className={"mySwiper"}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}>
                {props.map((slideContent, index) => (
                  <SwiperSlide key={index} virtualIndex={index}>
                    <CardGiveAway props={slideContent} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
