import "swiper/css";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import DontDie from "../img/giveaway/Dont_Die._perfect.png";
import Fortune from "../img/giveaway/Bassies_Fortune_4_levensperfect.png";
export default function giveAway() {
  const API_URL =
    process.env.NODE_ENV === "development"
      ? import.meta.env.VITE_API_URL_DEV
      : import.meta.env.VITE_API_URL_PROD;

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
  ].reverse();

  const [props, setProps] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/giveaway`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProps(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <section className=" body-font overflow-hidden text-white bg-gray-300 bg-opacity-30 rounded  ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="py-12 md:w-1/2 flex flex-col items-start bg-gray-900 rounded-xl p-6 ">
              <h2 className="sm:text-3xl text-2xl title-font font-medium  mt-4 mb-4">
                Giveaways uitleg
              </h2>
              <div className=" text-white p-6 rounded-xl shadow-lg  bg-gray-800">
                <p className="text-lg font-semibold mb-4">
                  🎉 Alle giveaways worden weggegeven via gratis games! 🎉
                </p>

                <p className="mb-4">
                  Door actief mee te spelen en te lurken in de streams, kun je giveaway
                  games verdienen.
                </p>

                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  🔹 Hoe werkt het?
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    Alle giveaway games kosten{" "}
                    <span className="font-bold text-yellow-400">kanaalpunten</span>.
                  </li>
                  <li>
                    Voor elke <span className="font-bold text-yellow-400">25 games</span>{" "}
                    die je meespeelt, ontvang je{" "}
                    <span className="text-green-400 font-bold">
                      1 gratis giveaway game
                    </span>
                    ! 🎁
                  </li>
                  <li>
                    Meer details en uitleg vind je in het
                    <a
                      href="https://discord.com/channels/614357624191975424/1225832984830283786"
                      className="text-blue-500 font-semibold hover:underline ml-1">
                      #giveaways
                    </a>{" "}
                    topic op Discord.
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  🎮 Beschikbare Giveaway Games
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    Er zijn in totaal{" "}
                    <span className="font-bold text-yellow-400">5 giveaway games</span> te
                    cashen.
                  </li>
                  <li>
                    Maximaal{" "}
                    <span className="font-bold text-yellow-400">
                      1 giveaway game per speler per stream
                    </span>
                    .
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-blue-400 mb-2 ">
                  🏆 Soorten Giveaway Games
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    <span className="font-bold text-purple-400">Printstream Game:</span>{" "}
                    Alleen <span className="text-yellow-400">printstream skins</span> te
                    winnen.
                  </li>
                  <li>
                    <span className="font-bold text-red-400">Don't Die Game:</span> Alle
                    skins te winnen, inclusief{" "}
                    <span className="text-green-400">knifes! 🔪</span>
                  </li>
                  <li>
                    <span className="font-bold text-purple-400">Overige Games:</span>{" "}
                    Random prijzen die rechtsonder op deze pagina worden weergegeven.
                  </li>
                </ul>

                <p className="mt-6 text-center text-lg font-semibold text-green-400">
                  🎊 Veel speelplezier! Hopelijk bevallen de spellen jullie goed! 🚀
                </p>
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-center justify-center">
              <div className=" w-full">
                {/* <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 text-center">
                  Previous Winners
                </h2> */}
                <img
                  src={DontDie}
                  alt="giveaway"
                  className="object-cover object-center rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" body-font overflow-hidden text-white bg-gray-300 bg-opacity-30 rounded  ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12 flex-row-reverse ">
            <div className="py-12 md:w-1/2 flex flex-col items-center ">
              <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold  mb-4">🎁 Giveaways Prizepool</h2>

                <p className="mb-4">
                  De giveaways prizepool is verdeeld in{" "}
                  <span className="font-semibold text-blue-400">3 tiers</span>:
                </p>

                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    <span className="font-bold text-red-400">Tier 3:</span> Goedkopere
                    skins, relatief makkelijk te winnen.
                  </li>
                  <li>
                    <span className="font-bold text-purple-400">Tier 2:</span> Skins
                    tussen <span className="text-green-400 font-semibold">€20 - €50</span>
                    .
                  </li>
                  <li>
                    <span className="font-bold ">Tier 1:</span> De grote prijzenkist met
                    skins van <span className="text-green-400 font-semibold">€50+</span>!
                    💎
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  🏆 Huidige Prijzenkast
                </h3>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                  <h4 className="text-lg font-bold ">🔥 Tier 1 - High-End Skins</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <span className="font-bold text-red-400">Knifes:</span> Classic
                      Knife Boreal Forest, Survival Knife Scorched, Bowie Knife Freehand,
                      Navaja Knife Case Hardened
                    </li>
                    <li>
                      <span className="font-bold text-green-400">Rifles & Pistols:</span>{" "}
                      M4 Printstream, AK Redline, Glock Gamma Doppler Phase 3, M4
                      Chantico’s Fire
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                  <h4 className="text-lg font-bold text-purple-400">
                    🎯 Tier 2 - Mid-Tier Skins (€20-€50)
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>AK Leet Museo, Desert Eagle Night, P250 Whiteout, AK Asiimov</li>
                    <li>AK The Empress, AK Wasteland Rebel, AWP Man O' War</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                  <h4 className="text-lg font-bold text-blue-400">
                    ✨ Tier 3 - Easy Wins
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      M4A4 In Living Color, AK Point Disarray, Desert Eagle Crimson Web
                    </li>
                    <li>
                      XM Monster Melt, AK Emerald Printstripe, Unicorn Holo Stickers
                    </li>
                  </ul>
                </div>

                <p className="mt-4">
                  🚀{" "}
                  <span className="font-semibold text-green-400">
                    Dit is slechts een deel van de prijzen!
                  </span>{" "}
                  Wil je alle prijzen zien? Vraag{" "}
                  <span className="text-yellow-400 font-bold">BassieNL</span> tijdens een
                  livestream om een van de kisten te openen en krijg een exclusief kijkje
                  in de prijzenkast van dit jaar! 🎮
                </p>

                <p className="mt-4 text-center text-lg font-semibold text-green-400">
                  🎊 De prijzen zullen in de loop van het jaar alleen maar groter worden!
                  🚀
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 flex flex-col items-center justify-center mt-8">
              <div className=" w-full">
                <img src={Fortune} alt="fortune" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
