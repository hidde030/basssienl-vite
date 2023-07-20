import React from "react";

function Info() {
  return (
    <div className="bg-gray-200 p-4 text-white bg-gray bg-opacity-30 ">
      <div className="container mx-auto md:pr-28 lg:pr-52 px-10">
        <h1 className="text-xl font-bold text-admin">How to obtain a card?</h1>
        <p className="my-2">
          You obtain a card by playing CS:GO games with the streamer BassieNL! Come to his
          streams, be active in chat, be kind to the others and earn a card! You deserve a
          card if BassieNL thinks you deserve a card!
        </p>
        <div className="my-2">
          <h3 className="text-base font-medium text-vip">VIP card: </h3>
          <p>
            This golden card is the most beautiful and rare card! It's only there for 50
            community members! How do you become VIP? Get in the top 30 donators, get in
            the top 10 gifters or get in the top 10 bits donators! You can find this list
            below the stream!
          </p>
          <p className="text-red-500">
            You can lose your VIP card if someone beats your stats.
          </p>
        </div>
        <div className="my-2">
          <h3 className="text-base font-medium text-subscriber">Subscriber card: </h3>
          <p>
            The green subscriber card is there for all the subs! Make sure you're subbed
            yourself! Because gifted subs won't get you a sub card!
          </p>
        </div>
        <div className="my-2">
          <h3 className="text-base font-medium text-member">Member card: </h3>
          <p>
            Everyone who isn't a VIP or a Sub but does deserve a card gets a blue member
            card!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
