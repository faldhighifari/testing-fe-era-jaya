import React, { Component } from "react";
import image from "../images/lg_icon.png";
import user from "../images/user.png";
import search from "../images/search.png";


const NavBar = () => {
    return (
        <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <a href="https://www.lg.com/id/smartphone" class="flex items-center">
                <img src={image} class="mr-3 h-6 sm:h-9" alt="LG Logo" />
                <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">LG SIGNATURE</span>
            </a>
            <div class="flex items-center">
                <button class="text-sm font-medium px-5 py-1 ring-red-800 ring-2 rounded-full text-red-600 hover:text-red-800">Bisnis</button>
            </div>
        </div>
    </nav>

<hr class="border-t-1"/>

    <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="flex flex-wrap justify-between py-3 px-4 mx-auto max-w-screen-xl md:px-6">
            <div class="flex items-center">
                <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                    <li>
                        <a href="#" class="text-gray-900 dark:text-white hover:text-red-700 hover:underline" aria-current="page">TV/AUDIO</a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-900 dark:text-white hover:text-red-700 hover:underline">HOME APPLIANCE</a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-900 dark:text-white hover:text-red-700 hover:underline">PRODUK IT</a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-900 dark:text-white hover:text-red-700 hover:underline">AIR SOLUTIONS</a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-500 dark:text-white hover:text-red-700 hover:underline">|</a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-900 dark:text-white hover:text-red-700 hover:underline">SUPPORT</a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center">
                <img src={user} class="mr-2 h-4 sm:h-5" alt="user Logo" />
                <img src={search} class="ml-5 h-4 sm:h-5" alt="search Logo" />
            </div>
        </div>
    </nav>

<hr class="border-t-1"/>
        </div>
    );
};
export default NavBar;