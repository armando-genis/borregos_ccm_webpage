import React from "react";
import Image from 'next/image';
import mypic from '../public/ppg_logo.png';
import mypic2 from '../public/generac_logo.png';
import mypic3 from '../public/makerbot_logo.png';
import mypic4 from '../public/sandvik_logo_lg.png'
import mypic5 from '../public/Simens_logo.png';
import mypic7 from '../public/tec_logo.png';
import mypic8 from '../public/ebc_logo.png';
import { GiCarWheel } from "react-icons/gi";
import { IoPersonAddOutline, IoBarChartOutline } from "react-icons/io5";

export default function Homepage() {
    return (
        <div className="min-w-screen min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] flex justify-center items-stretch">
                <div className="w-[8rem] h-[8rem] bg-blue-600 blur-3xl"></div>
                <div className="w-[17rem] h-[17rem] bg-blue-600 blur-3xl"></div>
                <div className="absolute w-[17rem] h-[17rem] bg-blue-600 blur-3xl left-1 bottom-1"></div>
                <div className="absolute w-[10rem] h-[10rem] bg-blue-600 blur-3xl right-1 bottom-1"></div>
            </div>
            {/* content */}

            <div className="mx-auto max-w-7xl text-center font-sans relative grid justify-items-stretch">
                <div className="justify-self-center mt-5">
                    <Image
                        src={mypic8}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>

                <div className="mx-auto max-w-4xl pt-7 justify-self-center">
                    <h2 className="text-[#888] tracking-wide font-light text-[1.5rem]">Designing, building and racing for the future...</h2>
                </div>
            </div>

            <div className="uppercase text-[#888] pt-[6rem] tracking-[.2rem]">
                <h1> Made possible by </h1>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center space-x-10">
                <Image
                    src={mypic}
                    alt="Picture of the author"
                    width={110}
                    height={110}
                />
                <Image
                    src={mypic2}
                    alt="Picture of the author"
                    width={110}
                    height={110}
                />
                <Image
                    src={mypic4}
                    alt="Picture of the author"
                    width={110}
                    height={110}
                />
                <Image
                    src={mypic5}
                    alt="Picture of the author"
                    width={110}
                    height={110}
                />
                <Image
                    src={mypic3}
                    alt="Picture of the author"
                    width={110}
                    height={110}
                />
                <Image
                    src={mypic7}
                    alt="Picture of the author"
                    width={110}
                    height={110}
                />
            </div>
        </div>
    )
};
