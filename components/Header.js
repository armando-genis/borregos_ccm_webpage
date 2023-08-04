import React from "react"
import { IoPersonAddOutline, IoBarChartOutline } from "react-icons/io5";
export default function Header() {
    return (
        <header class="sticky top-0 bg-[#000] shadow-[#0000001a] drop-shadow-2xl z-[3] border-b-2 border-white/20">
            <div className="mx-auto max-w-7xl pt-2 ">
                <div className="container flex flex-wrap items-center justify-between">
                    <div className="flex items-center lg:gap-x-12 gap-x-1">
                        <div className="hidden md:flex md:gap-x-6">
                            <a class="inline-block rounded-lg py-1 px-2 text-sm text-[#fff] hover:bg-slate-100 hover:text-slate-900" >Home</a>
                            <a class="inline-block rounded-lg py-1 px-2 text-sm text-[#fff] hover:bg-slate-100 hover:text-slate-900" >About us</a>
                            <a class="inline-block rounded-lg py-1 px-2 text-sm text-[#fff] hover:bg-slate-100 hover:text-slate-900" >News</a>
                            <a class="inline-block rounded-lg py-1 px-2 text-sm text-[#fff] hover:bg-slate-100 hover:text-slate-900" >Team</a>
                            <a class="inline-block rounded-lg py-1 px-2 text-sm text-[#fff] hover:bg-slate-100 hover:text-slate-900" >Sponsors</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <button className="p-0.5 mb-2 mr-2 relative inline-flex items-center justify-center text-sm font-medium text-white bg-gradient-to-br  from-blue-600 to-blue-500 group-hover:from-blue-600 group-hover:to-blue-500  focus:ring-4 focus:outline-none rounded-lg group ">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#000] rounded-md group-hover:bg-opacity-0 flex flex-row items-center justify-center w-[8rem]">
                                <div className="mr-2 text-lg">
                                    <IoBarChartOutline />
                                </div>
                                <h1>Dashboard</h1>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
};



{/* <div className="mx-auto max-w-7xl px-8 bg-white"></div> */ }

