import React from "react"
import Image from 'next/image'
import pic_1 from '../public/foto_1_elec.jpeg'
import pic_2 from '../public/foto_2_electro.jpg'
import pic_3 from '../public/foto_3_electro.jpg'


import { IoChevronForward } from "react-icons/io5";
export default function Team() {
    return (

        <div className="min-w-screen min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] inline-flex items-center justify-center z-[1]">
                <div className="absolute w-[15rem] h-[15rem] bg-[#7928CA] blur-3xl bottom-1"></div>
            </div>


            <div className="h-[100px] w-[0.15rem] bg-white bg-gradient-to-b from-[#000] to-[#7928CA] "></div>
            <div className="inline-flex items-center justify-center rounded-full w-[40px] h-[40px] bg-gradient-to-b from-[#7928CA]  to-[#FF0080] font-bold text-black">2</div>
            <div className="text-[2rem] text-transparent bg-clip-text bg-gradient-to-b from-[#7928CA] to-[#FF0080] font-bold">Learn more</div>

            <div className="mx-auto w-8/12 p-3 relative z-[2]">
                <div class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                    {/* Fist card */}
                    <div class="basis-1/3 bg-[#ffffff12]  shadow-[#0000001a] drop-shadow-2xl relative rounded-lg shadow-lg p-5 overflow-hidden h-[27rem] lg:h-[36rem]">
                        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                            <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-10%] h-[110%] w-full skew-y-[-18deg]  fill-white/40 stroke-white/25">
                                <defs>
                                    <pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                                        <path d="M.5 56V.5H72" fill="none"></path>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" strokeWidth="0" fill="url(#:R56hd6:)"></rect>
                                <svg x="50%" y="16" class="overflow-visible">
                                    <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="-200" y="500"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="-450" y="650"></rect>
                                </svg>
                            </svg>
                        </div>
                        <div class="relative pt-2">
                            <p class="tracking-tight font-display font-semibold text-2xl text-slate-100 leading-snug text-center">News and Events</p>
                            <div className="pt-1 h-[169px] overflow-hidden">
                                <Image
                                    className="rounded-md shadow-xl brightness-75"
                                    src={pic_1}
                                    alt="Picture of the author"
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <p class="font-display font-light text-1xl text-left text-slate-100 pt-2">The team participates in different events such as races in different parts of the country, but also visits to companies such as Sandvik and talks by professionals in the area. In addition to this, there are also visits to schools to promote knowledge and interest in the area.</p>
                        </div>
                        <div class="relative text-right">
                            <a class=" text-white inline-flex w-11 h-11 justify-center items-center bg-gradient-to-b from-[#7928CA] to-[#FF0080] rounded-full transition duration-150" ><IoChevronForward /> </a>
                        </div>
                    </div>
                    {/* End of the fist card */}
                    {/* Second card */}
                    <div class="basis-1/3 bg-[#ffffff12]  shadow-[#0000001a] drop-shadow-2xl relative rounded-lg shadow-lg p-5 overflow-hidden h-[27rem] lg:h-[36rem]">
                        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                            <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-10%] h-[110%] w-full skew-y-[-18deg]  fill-white/40 stroke-white/25">
                                <defs>
                                    <pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                                        <path d="M.5 56V.5H72" fill="none"></path>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" strokeWidth="0" fill="url(#:R56hd6:)"></rect>
                                <svg x="50%" y="16" class="overflow-visible">
                                    <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="-200" y="500"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="-450" y="650"></rect>
                                </svg>
                            </svg>
                        </div>
                        <div class="relative pt-2">
                            <p class="tracking-tight font-display font-semibold text-2xl text-slate-100 leading-snug text-center">Meet the Team</p>
                            <div className="pt-1 h-[169px] overflow-hidden">
                                <Image
                                    className="rounded-md shadow-xl brightness-75"
                                    src={pic_2}
                                    alt="Picture of the author"
                                    width={300}
                                    height={300}
                                />
                            </div>


                            <p class="font-display font-light text-1xl text-left text-slate-100 pt-2">Today the team is made up of different areas, such as the structure, which is in charge of building the base of the car, also this transmission and direction, which is in charge of designing and giving functionality to the car, to this are added areas such as electronics for In the end, add its characteristic design thanks to the body area, in addition to having the great section of the teams social networks.</p>
                        </div>
                        <div class="relative text-right">
                            <a class=" text-white inline-flex w-11 h-11 justify-center items-center bg-gradient-to-b from-[#7928CA] to-[#FF0080] rounded-full transition duration-150" ><IoChevronForward /> </a>
                        </div>
                    </div>
                    {/* End of the second card */}
                    <div class="basis-1/3 bg-[#ffffff12]  shadow-[#0000001a] drop-shadow-2xl relative rounded-lg shadow-lg p-5 overflow-hidden h-[27rem] lg:h-[36rem]">
                        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                            <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-10%] h-[110%] w-full skew-y-[-18deg]  fill-white/40 stroke-white/25">
                                <defs>
                                    <pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                                        <path d="M.5 56V.5H72" fill="none"></path>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" strokeWidth="0" fill="url(#:R56hd6:)"></rect>
                                <svg x="50%" y="16" class="overflow-visible">
                                    <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="-200" y="500"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="-450" y="650"></rect>
                                </svg>
                            </svg>
                        </div>
                        <div class="relative pt-2">
                            <p class="tracking-tight font-display font-semibold text-2xl text-slate-100 leading-snug text-center">Our sponsors</p>
                            <div className="pt-1 h-[169px] overflow-hidden">
                                <Image
                                    className="rounded-md shadow-xl brightness-75"
                                    src={pic_3}
                                    alt="Picture of the author"
                                    width={300}
                                    height={300}
                                />
                            </div>


                            <p class="font-display font-light text-1xl text-left text-slate-100 pt-2">We also have sponsors who help us a lot to work on the car, such as Generac who supports us with the batteries.</p>
                        </div>
                        <div class="relative text-right">
                            <a class=" text-white inline-flex w-11 h-11 justify-center items-center bg-gradient-to-b from-[#7928CA] to-[#FF0080] rounded-full transition duration-150" ><IoChevronForward /> </a>
                        </div>
                    </div>
                </div>
            </div>

        </div >


    )
};

