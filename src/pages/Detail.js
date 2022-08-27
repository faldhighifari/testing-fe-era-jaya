import React from "react";
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"

import medium from '../images/medium.webp';
import heart from '../images/heart.png';
import star from '../images/star.png';
import shopping from '../images/shopping-cart.png';

const Detail= () => {

    const navigate = useNavigate();

    return (
    <div>

        <div class="mx-6 my-2"> 
            <p class="text-sm">
                <span class="text-slate-600 hover:underline hover:cursor-pointer">Home / Smartphone </span>/ LMG710EAW
            </p>
        </div>
        
        <div class="grid overflow-hidden grid-cols-3 grid-rows-1 gap-2">

            <div class="box col-span-2">

            <div class="container mx-auto mt-1 flex flex-wrap justify-center columns-3 gap-4">
                <div class="">
                <p class="text-center my-5 font-semibold hover:underline" >LG G7+ThinQ</p>
                <img src={medium} class="mb-5" alt="upload"/>
                </div>
                </div>
            </div>

            <div class="box col-span-1">

        <div class="">
            <div class="p-2">
                <div class="container flex flex-wrap m-auto justify-end columns-1 my-1 pr-16 ">
                    <img src={heart} class="my-1 w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <p class="text-left my-1 font-semibold text-slate-600 text-sm hover:underline">LMG710EAW</p>
                <p class="text-left my-1 font-semibold hover:underline text-lg">LG V30 PLUS</p>
                <div class="container flex flex-wrap m-auto justify-start columns-5 my-1">
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <p> <span class="text-pink-600" >4.8 </span> (4) | <span class="text-pink-600 underline "> Tulis Ulasan</span> </p>
                </div>
                <div class="text-left mx-3">
                    <ul class="list-disc">
                        <li>Performa Tinggi</li>
                        <li> Mode Portrait</li>
                        <li> Kesederhanaan Yang Fungsional</li>
                        <li> Super Bright Display</li>
                        <li> AI CAM</li>
                        <li> Super Bright Camera</li>
                    </ul>
                </div>

                <hr class="border-t-1 mx-1"/>

                <div class="container flex flex-wrap m-auto justify-start columns-5">
                    <div class="mr-2 w-6 h-6 rounded-full bg-blue-800 hover:ring-2 ring-red-600 my-6"></div>
                    <div class="mr-2 w-6 h-6 rounded-full bg-slate-800 hover:ring-2 ring-red-600 my-6"></div>
                </div>

                <hr class="border-t-1 mx-1"/>
                
                <div class="container flex flex-wrap m-auto justify-center">
                    <button onClick={()=>navigate("/")} class="text-sm font-medium px-28 py-3 bg-pink-700  rounded text-white hover:bg-pink-600 my-3">
                        LOKASI PEMBELIAN
                    </button>
                </div>
                <div class="text-sm font-semibold container flex flex-wrap m-auto justify-center text-slate-600 my-4">
                    <img src={shopping} class="w-5 h-5 mb-5 mr-2 hover:ring-1 hover:ring-red-600" alt="star"/>
                    TAMBAH PRODUK  BANDINGKAN
                </div>

                <hr class="border-t-1 mx-1"/>

            </div>
        </div>
        
    </div>


        </div>
    </div>
    );
};
export default Detail;