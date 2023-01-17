import React from "react";
import bassie from "../img/logo.png";
function OverOns() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden text-white bg-faceit/25 rounded  ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-12">
            <div class="p-12 md:w-1/2 flex flex-col items-start">
              {/* BASSIENL */}
              <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                BassieNL
              </h2>
              <p class="leading-relaxed mb-8">
                Hi everyone, my name is BassieNL and I stream for fun. I stream as much as
                possible and you can find my streaming schedule in my !discord. The main
                focus of gameplay on my channel is based on FPS and BR. If you like this
                channel, hit the follow button!
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
                out to Bart or go to our website:{' '}
                <a href="https://hostmajority.com/" className="underline">
                  https://hostmajority.com/
                </a>
              </p>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"></div>
              <a class="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://bassienl.hostmajority.com/images/Hm_logo.png"
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
