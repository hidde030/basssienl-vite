// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';
import CardGiveAway from '../components/CardGiveAway';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


export default function giveAway() {
    // TODO: make endpoint for API
    // TODO: add useEffect to fetch data from API
    // TODO: add useState to store data from API
    // add to body tag to prevent scrolling
    document.body.classList.add('is-giveaway');
    const props =
        [
            {
                nationality: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
                rating: "94",
                role: "vip",
                name: "Bart",
                rank: "Global Elite",
                faceit: "10",
                quality: "God Aim",
                weakness: "Full Monkey",
                img: "https://bassienl.nl/images/Bart.png",
                steam_url: "https://steamcommunity.com/id/BartiBlyat/"
            },
            {
                nationality: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
                rating: "94",
                role: "vip",
                name: "Bart",
                rank: "Global Elite",
                faceit: "10",
                quality: "God Aim",
                weakness: "Full Monkey",
                img: "https://bassienl.nl/images/Bart.png",
                steam_url: "https://steamcommunity.com/id/BartiBlyat/"
            },
            {
                nationality: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
                rating: "94",
                role: "vip",
                name: "Bart",
                rank: "Global Elite",
                faceit: "10",
                quality: "God Aim",
                weakness: "Full Monkey",
                img: "https://bassienl.nl/images/Bart.png",
                steam_url: "https://steamcommunity.com/id/BartiBlyat/"
            },
            {
                nationality: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
                rating: "94",
                role: "vip",
                name: "Bart",
                rank: "Global Elite",
                faceit: "10",
                quality: "God Aim",
                weakness: "Full Monkey",
                img: "https://bassienl.nl/images/Bart.png",
                steam_url: "https://steamcommunity.com/id/BartiBlyat/"
            }
        ]

    return (
        <div className="container mx-auto lg:pt-10 pt-4 pb-6 px-4 md:px-0">

        <Swiper
                className={"mySwiper"}
            // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            navigation

                pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            {props.map((slideContent, index) => (
                <SwiperSlide key={index} virtualIndex={index} >
                    <CardGiveAway props={slideContent}/>
                </SwiperSlide>
            ))}
        </Swiper>
            </div>
    );
};

