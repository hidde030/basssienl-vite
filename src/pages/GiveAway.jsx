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
    "giveaway_12.png",
  ].reverse()

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
    <>
      <section className="text-gray-600 body-font overflow-hidden text-white bg-gray bg-opacity-30 rounded  ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="py-12 md:w-1/2 flex flex-col items-start">
              {/* BASSIENL */}
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                December giveaway
              </h2>
              <p className="mb-3">
                In de maand december geven we een volledige geel/gouden inventory weg! Er
                worden 10 skins weggegeven aan de winnaar van deze giveaway. Met als
                hoofdprijs een knife/glove combo. De giveaway is <b>100% gratis</b> en
                iedereen kan deelnemen.
                <br /> <br /> Hoe? Cash <u>inventory tickets</u> uit door te lurken en
                bassiecash te verzamelen op twitch! Onder de twitch chat staat een
                bassiecash icoontje die je kan aanklikken en dit geeft je 1 ticket! (de
                link onder deze uitleg laat de huidige tickets zien die je uitgecashed
                hebt!)
                <br /> <br />{" "}
                <i>
                  Giveaway is <b> alleen voor actieve members! </b>Giveaway hunters delete
                  ik!
                </i>{" "}
                Wat is een actieve member? Laat jezelf geregeld zien in de twitch/discord
                chat of speel af en toe een potje mee en je bent actief.
                <br /> <br />
                <b>Bonus:</b> Omdat dit pas in december is zijn er 3 GRATIS bonus
                giveaways in de maanden juli, sept en okt!{" "}
                <i>(deze giveaways hebben de subscribers wel 8x meer luck!)</i>
              </p>

              <div className="flex pt-4">
                <a
                  target="_blank"
                  className="bg-card_bg  text-white font-bold py-2 px-4 rounded "
                  href="https://docs.google.com/spreadsheets/d/1QAvPHMlY_nwfYDbXuX49wUqrU9iIr0Np9lAiXxKGe6c/edit#gid=0">
                  Tickets
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
      <section className="text-gray-600 body-font overflow-hidden text-white bg-gray bg-opacity-30 rounded  ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12 flex-row-reverse ">
            <div className="py-12 md:w-1/2 flex flex-col items-start">
              {/* BASSIENL */}
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                December Secret giveaway
              </h2>
              <p className="mb-3">
                In de maand december geven we een volledige geel/gouden inventory weg!
                Aangezien er enorm gesupport wordt bij mijn streams en{" "}
                <u>jullie mij door mindere periodes heen helpen</u> wil ik graag de mensen
                die de stream supporten extra terug bedanken zonder dat ze het zelf
                doorhebben!
              </p>
              <b className="mb-3">
                Supporters zijn de mensen die zelf Subscriben, Giften, Bits doneren, skins
                doneren en gewoon doneren.
              </b>
              <p className="mb-3">
                Voor deze categorie heb ik een extra giveaway achter de schermen lopen die
                op de zelfde dag als de December giveaway wordt gedropt! Alleen de admins
                weten meer info over deze giveaway en letten er op dat ik dit eerlijk bij
                hou!
              </p>
              <p className="mb-3">
                Voor de supporters is dus alleen duidelijk dat ze een extra prijs weten,
                maar niet hoeveel kans ze maken en hoe ze winnen.
              </p>
              <h3 className="text-2xl mb-3">
                De prijzen voor de supporters zijn (ook goud/geel)
              </h3>
              <ul className="list-disc list-inside ">
                <li>
                  <b> 1e prijs:</b> MW AK Fuel Injector
                </li>
                <li>
                  <b>2e prijs:</b> FN Tiger Tooth Shadow Daggers
                </li>
                <li>
                  <b>3e prijs:</b> MW Chantico’s Fire m4
                </li>
              </ul>
              <h2>Alle 3 zijn in potentie door 1 supporter te winnen!</h2>
            </div>
            <div className="p-4 md:w-1/2 flex flex-col items-start mt-8">
              <div className=" w-full">
                <img
                  src="https://cdn.discordapp.com/attachments/1154753678578827306/1246028221426962513/Giveaway_12.png?ex=665ae5b6&is=66599436&hm=e0cbab86cd46c7c75f2a1be34c2670285d90447943e45f7e4f53dad64da34fc1&"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
