import React from "react"

import { IoPersonOutline, IoMailUnreadOutline, IoCreate, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
export default function Contac() {
    return (
        <div className=" min-w-screen relative overflow-hidden flex flex-col items-center ">
            <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] inline-flex items-center justify-center z-[1]">
                <div className="absolute w-[15rem] h-[15rem] bg-blue-600  blur-3xl bottom-1"></div>
            </div>

            {/* __________________________________________ */}
            <div className="h-[100px] w-[0.15rem] bg-white bg-gradient-to-b from-[#000] to-blue-600"></div>
            <div className="inline-flex items-center justify-center rounded-full w-[40px] h-[40px] bg-gradient-to-b from-blue-600 to-[#00DFD8] font-bold text-black">4</div>
            <div className="text-[2rem] text-transparent bg-clip-text bg-gradient-to-b from-[#007CF0] to-[#00DFD8] font-bold">Contact us</div>
            {/* content */}
            <div className="mx-auto w-6/12 p-3 relative z-[2]">
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                    <div className="bg-[#ffffff12] rounded-lg shadow-[#0000001a] drop-shadow-2xl  basis-1/2 p-3">
                        <form className="flex flex-col" >
                            <div class="relative mb-6">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white text-lg font-semibold">
                                    <IoPersonOutline />
                                </div>
                                <input type="text" id="input-group-1" class="bg-[#ffffff12] border border-gray-600  text-sm rounded-lg  block w-full pl-10 p-2.5 text-white" placeholder="Name" />
                            </div>
                            <div class="relative mb-6">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white text-lg font-semibold">
                                    <IoMailUnreadOutline />
                                </div>
                                <input type="text" id="input-group-1" class="bg-[#ffffff12] border border-gray-600  text-sm rounded-lg  block w-full pl-10 p-2.5 text-white" placeholder="Email" />
                            </div>

                            <div class="relative mb-6">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white text-lg font-semibold">
                                    <IoCreate />
                                </div>
                                <input type="text" id="input-group-1" class="bg-[#ffffff12] border border-gray-600  text-sm rounded-lg  block w-full pl-10 p-2.5 text-white" placeholder="Subject" />
                            </div>

                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-white border-gray-600 bg-[#ffffff12] border " placeholder="Write your thoughts here..."></textarea>
                        </form>
                    </div>
                    <div className="basis-1/2 p-3 flex-col flex justify-center items-center" >
                        <p class="tracking-tight font-display font-semibold text-3xl text-center text-slate-100">Get in touch</p>
                        <p class="font-display font-light text-1xl text-left text-slate-100 pt-1">Calle del Puente #222</p>
                        <p class="font-display font-light text-1xl text-left text-slate-100 pt-1">Col. Ejidos de Huipulco, Tlalpan C.P. 14380.</p>
                        <p class="font-display font-light text-1xl text-left text-slate-100 pt-1">México D.F.</p>
                        <p class="font-display font-light text-1xl text-left text-slate-100 pt-1">@electraton.ccm@tec.mx</p>
                        <div className="flex flex-row space-x-3 mt-4">
                            <div className="h-10 w-10 text-center border-gray-600 bg-[#ffffff12] border rounded-lg text-white inline-flex items-center justify-center text-xl">
                                <IoLogoFacebook />
                            </div>
                            <div className="h-10 w-10 text-center border-gray-600 bg-[#ffffff12] border rounded-lg text-white inline-flex items-center justify-center text-xl">
                                <IoLogoInstagram />
                            </div>
                            <div className="h-10 w-10 text-center border-gray-600 bg-[#ffffff12] border rounded-lg text-white inline-flex items-center justify-center text-xl">
                                <IoLogoLinkedin />
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
};

