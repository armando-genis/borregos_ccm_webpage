import React from "react"

export default function Newsletter() {
    return (
        <div className="min-h-screen min-w-screen relative overflow-hidden flex flex-col items-center ">
            <div className="h-[100px] w-[0.15rem] bg-white bg-gradient-to-b from-[#000] to-blue-600"></div>
            <div className="inline-flex items-center justify-center rounded-full w-[40px] h-[40px] bg-gradient-to-b from-blue-600 to-[#00DFD8] font-bold text-black">3</div>
            <div className="text-[2rem] text-transparent bg-clip-text bg-gradient-to-b from-[#007CF0] to-[#00DFD8] font-bold">Newslatter</div>
            {/* Content */}
            <div className="mx-auto max-w-7xl text-center font-sans relative">
                <div className="flex">
                    <div className="flex-1 bg-white">

                    </div>
                    <div className="w-[0.15rem] h-screen  border-dotted border-r-[4px] border-sky-500"></div>
                    <div className="flex-1">

                    </div>

                </div>

            </div>

        </div>
    )
};

