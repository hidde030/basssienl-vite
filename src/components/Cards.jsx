import React from "react";
import user from "../data/user.json";
import steam from "../img/steam.svg";
export default function GridCards() {
  return (
    <div className="container mx-auto lg:pt-20 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {user.data.map(function (object, i) {
          return (
            <Card
              nationality={object.nationality}
              rating={object.rating}
              role={object.role}
              name={object.name}
              rank={object.rank}
              faceit={object.faceit}
              quality={object.quality}
              weakness={object.weakness}
              img={object.img}
              steam_url={object.steam_url}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export function Card(props) {
  return (
    <div className={`${props.role}`}>
      <div className={`card-item sbg-white rounded-lg shadow-lg  `}>
        <div className="image-bg relative pb-48 overflow-hidden bg-card_purple rounded-t-sm">
          {/* if rating  */}
          <span className="rating">{props.rating}</span>
          <img
            className="absolute inset-0  w-full h-full  scale-[0.8]  card-img"
            src={props.img}
            alt="Sunset in the mountains"
          />
          <img className="absolute card-flag" src={props.nationality} alt="flag" />
        </div>
        <div className="px-6 py-4 pl-8 bg-card_bg rounded-b-lg relative card-body">
          <div className="flex items-center justify-between absolute">
            <a href={props.steam_url} rel="noreferrer">
              <img src={steam} alt="logo steam" className="h-10 cursor-pointer" />
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
  );
}
