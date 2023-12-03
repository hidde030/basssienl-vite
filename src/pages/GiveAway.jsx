// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"
import CardGiveAway from "../components/CardGiveAway"
// Import Swiper styles
import "swiper/css"
import "swiper/css/scrollbar"
import { useEffect, useState } from "react"

export default function giveAway() {
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
  }, [])

  return (
    <section className="text-gray-600 body-font overflow-hidden text-white bg-gray bg-opacity-30 rounded  ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            {/* BASSIENL */}
            <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              January knife giveaway
            </h2>
            <p className="mb-3">
              In de eerste stream van het nieuwe jaar geven we een knife weg! Je maakt
              kans op een knife van €150 maar ook is er 1% kans op een knife van €630+! De
              hele maand november en december kan je tickets verzamelen door channelpoints
              te sparen op twitch. Deze krijg je door te lurken en mee te gaan met raids.
              Uitcashen kan tijdens de live streams, Maximaal 5 per persoon per stream! Je
              hoeft niet aanwezig te zijn tijdens de giveaway stream en ook non subs maken
              kans.
            </p>
            <h3 className="text-2xl">Knives Prijzenpot</h3>
            <ul className="list-disc list-inside ">
              <li>1% Bayonet doppler FN</li>
              <li>9% Nomad knife Stained BS</li>
              <li>30% Falchion knife Crimson web FT</li>
              <li>30% Falchion knife Damascus steel FT</li>
              <li>30% Stattrak Paracord knife stained FT</li>
            </ul>
            {/* styled tailwind button */}
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
                href="https://wheelofnames.com/6bp-vds">
                Knives wheel
              </a>
            </div>
            {/* <h3 className="text-2xl pt-4"> Thanks for watching en may the best win!</h3> */}
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"></div>
          </div>

          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <div className=" w-full">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Previous Giveaways
              </h2>
              <Swiper
                className={"mySwiper"}
                // install Swiper modules
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
          </div>
        </div>
      </div>
    </section>
  )
}
