import React from "react";
import bassie from "../img/logo.png";
function OverOns() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden text-white bg-gray bg-opacity-30 rounded  ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-12">
            <div class="p-12 md:w-1/2 flex flex-col items-start">
              {/* BASSIENL */}
              <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                BassieNL
              </h2>
              <h3 className="text-2xl">Who am I</h3>
              <p className="mb-3">
                My name is BassieNL, my real name is Aeilko (pronounced Elko). I am a 30
                year old guy who likes to entertain people with my gaming “skills” and my
                sense of humour! I work with physically and mentally disabled people for a
                living and do that with a lot of joy!
              </p>
              <h3 className="text-2xl">Why do I stream</h3>
              <p className="mb-3">
                I am a streamer who streams for fun! I started streaming on the 1st of
                August 2019 and enjoyed it ever since! My main goal of streaming is to
                unite players on and off stream, create new friendships and help other
                people out! I am not just a streamer, I am also a friend and I try to do a
                lot for others!
              </p>
              <h3 className="text-2xl"> Help the stream</h3>
              <p className="mb-3">
                I try to make the stream as non profitable as possible, the earnings from
                the stream rarely go to my personal life! Most of it goes to off-stream
                projects, buying things for giveaways, sending cards to our community
                members or to members who achieve something amazing, like repairing,
                upgrading my pc etc etc!
              </p>
              <h3 className="text-2xl"> Charity</h3>
              <p className="mb-3">
                We try to do as much as possible for the others who have less! That's why
                we do a charity stream almost every year! The biggest banger we made was
                for KIKA, we streamed for 35 hrs and made almost €4.000,-!
              </p>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"></div>
              <a href="" class="inline-flex items-center">
                <img
                  alt="blog"
                  src={bassie}
                  class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-gray-900">Aeilko Folkers</span>
                  <span class="text-gray-400 text-xs tracking-widest mt-0.5">
                    STREAMER
                  </span>
                </span>
              </a>
            </div>
            {/* Hostmajority */}
            <div class="p-12 md:w-1/2 flex flex-col items-start">
              <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                HostMajority
              </h2>
              <p class="leading-relaxed mb-8">
                This website has been developed with love by HostMajority, we're a game
                hosting company with website development experience. We host games like,
                Minecraft, ARK Survival Evolved and most famous Counter Strike Global
                Offensive. If you have any questions about the website feel free to reach
                out to Bart or go to our website:{" "}
                <a href="https://hostmajority.com/" className="underline">
                  https://hostmajority.com/
                </a>
              </p>

              <p className="mb-3">
                Bart keeps an eye out for any content missing or by mistake placed on the
                website. Most of the time he's busy with the Front-end, if needed he can
                help out at any department. He's a guy that likes to have everything
                perfect, exactly the way he wants it. He isn't finished unless it's
                perfect to the last minute detail. He will always be available to pick up
                a ticket, so come through with the questions!
              </p>
              <p className="mb-3">
                Lars takes care of the Back-end systems running in our company. If no one
                knows the answer to a question our last hope is Lars, he always has the
                correct answer ready or he'll know how to find the correct one. He is very
                eager to learn so if there are any new features all of the sudden he most
                likely learned something new.
              </p>
              <p className="mb-3">
                Stan is the guy behind our marketing department. So if you see something
                pass by on Instagram, TikTok or YouTube it will be most likely because of
                him. Most of the tickets that you the customer create will be taken care
                of by Stan. If Stan doesn't know the correct answer the ticket will be
                send to the rest of the HostMajority team.
              </p>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"></div>
              <a class="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://bassienl.nl/images/Hm_logo.png"
                  class="w-12 h-12 rounded-full flex-shrink-0 object-contain object-center"
                />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-gray-900">HostMajority</span>
                  <span class="text-gray-400 text-xs tracking-widest mt-0.5">
                    COMPANY
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export { OverOns };
