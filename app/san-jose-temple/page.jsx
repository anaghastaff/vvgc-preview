import React from "react";
import { cormorant } from "app/fonts";
import { FetchData } from "@lib/utils/fetchdata";
import SponsorEvent from "@modules/events/components/sponsor-event-card";
import Link from 'next/link'
import Youtube from "@lib/icons/youtube";
import Zoom from "@lib/icons/zoom";
import FaceBook from "@lib/icons/facebook";
import { Card, CardHeader } from "@modules/common/components/ui/card";
import MediaCard from "@modules/events/components/media-card";


export const metadata = {
    title: 'Lakshmi Ganapathi Temple',
    description: 'San Jose',
}

export default async function SanJose() {

    const data = await FetchData()

    const IframeURL = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d943.8068848783809!2d-121.83776058292534!3d37.28149680729865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e324114e97d6d%3A0x6669fb128082a9f3!2sSri%20Lakshmi%20Ganapathi%20Temple!5e0!3m2!1sen!2sin!4v1690648613216!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

    const heroimgURL = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691930949/VVGC%20San%20Martin%20Temple%20Data/Gallery/multi-colored-elephant-statue-symbolizes-hinduism-spirituality-beauty-generated-by-ai_hquonb.jpg';

    return (
        <React.Fragment>
           < div className={`flex flex-col gap-y-4 justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-san-jose ${cormorant.variable} `}        
                >
                    <h1 className="text-[1.3rem] md:text-[3rem] font-[cormorant] md:mb-3">Welcome to </h1>
                     <h1 className="text-[1.3rem] md:text-[4rem] font-[cormorant] md:mb-2">Lakshmi Ganapathi Temple,</h1>
                     
                     <h1 className="text-[1.3rem] md:text-[4rem] font-[cormorant]">San Jose </h1>
                </div>
            <main className={`${cormorant.variable} w-full mx-auto`} >
            
            <MediaCard />               

                <section className="w-[100%] h-auto md:h-auto  md:p-10">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-cormorant  px-2">We invite you to attends these upcoming events:</h1>
                    </div>
                    <hr className="h-[2px] bg-red-800 my-2 " />
                    <div className="my-4 w-[100%] grid grid-cols-1 md:grid-cols-2 ">
                        {data.content.map((data, index) => {

                            return (data.homepage === 'sponsor' ? <SponsorEvent data={data} key={index} /> : "")
                        })
                        }
                    </div>

                    <section className="my-5">
                        <iframe className="w-full h-[200px] md:h-[400px]" src={IframeURL} ></iframe>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}


