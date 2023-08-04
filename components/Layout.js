import React from "react"

export default function Layout(props) {
    const { children } = props
    return (
        <div className="mx-auto bg-[#000] min-w-screen">
            <main>
                {/* <Header /> */}
                {children}


            </main>
        </div>
    )
};

