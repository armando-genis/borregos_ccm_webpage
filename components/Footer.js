import React from "react"

export default function Footer() {
    return (
        <div>
            <footer class="p-4 bg-[#000] rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a class="hover:underline">Racing team ccm™</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
};

