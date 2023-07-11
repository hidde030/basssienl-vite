import steam from "../img/steam.svg";
import React from "react";

export default function GiveAway({props}) {

    return (<>
            <div className={`${props.role}  flex justify-center align-center `}>
                <div className={`card-item sbg-white rounded-lg shadow-lg  w-max`}>
                    <div className="image-bg relative pb-48 overflow-hidden bg-card_purple rounded-t-sm">
                        <span className="rating">{props.rating}</span>
                        <img
                            className="absolute inset-0  w-full h-full  scale-[0.8]  card-img"
                            src={props.img}
                            alt="Sunset in the mountains"
                        />
                        <img className="absolute card-flag" src={props.nationality} alt="flag"/>
                    </div>
                    <div className="px-6 py-4 pl-8 bg-card_bg rounded-b-sm relative card-body">
                        <div className="flex items-center justify-between absolute">
                            <a
                                href={props.steam_url}
                                rel="noreferrer"
                                className="transition delay-150 duration-100 hover:scale-125 ease-in-out">
                                <img
                                    src={steam}
                                    alt="logo steam"
                                    className="h-10 cursor-pointer logosteam"
                                />
                            </a>
                        </div>
                        <h3 className="text-center text-xl text-white font-medium leading-8">
                            {props.name}
                        </h3>
                        <div className="text-center text-white text-xs font-semibold">
                            <p className="uppercase">{props.role}</p>
                        </div>
                        <ul className="flex flex-col ">
                            <li className="flex items-center">
              <span className="text-white font-light ">
                <span className="font-medium match">Matchmaking</span>: {props.rank}
              </span>
                            </li>
                            <li className="flex items-center">
              <span className={`text-lvl${props.faceit}`}>
                <span className="font-medium faceit">Faceit</span>: level {props.faceit}
              </span>
                            </li>
                            <li className="flex items-center">
              <span className="text-white font-light">
                <span className="font-medium check">Quality</span>: {props.quality}
              </span>
                            </li>
                            <li className="flex items-center">
              <span className="text-white font-light">
                <span className="font-medium kruis">Weakness</span>: {props.weakness}
              </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>)
}