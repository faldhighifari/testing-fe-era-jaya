import React from "react";
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import { useState } from "react";

import images from '../images/idd.webp';
import lg1 from '../images/lg1.webp';
import lg2 from '../images/lg2.webp';
import heart from '../images/heart.png';
import star from '../images/star.png';
import shopping from '../images/shopping-cart.png';
import images350 from '../images/350.webp';
import Q6 from '../images/Q6.webp';
import G6 from '../images/G6.webp';
import stylus from '../images/Stylus.webp';
import call from '../images/chat.png';
import chat from'../images/call.png';
import email from '../images/email.png';


const Home = () => {

    const navigate = useNavigate();

    const [color, setColor] = useState('#FFFFFF');

    return (
<div>

<div class="mx-6 my-2"> 
    <p class="text-sm">
        <span class="text-slate-600 hover:underline hover:cursor-pointer">Home</span> / Smartphone
    </p>
</div>

<div class="max-w-2xl  mx-auto mt-8">
    <div class="text-[40px] text-center font-semibold">Smartphone</div>

    <div class="text-center mt-5">Temukan deretan smartphone terbaik Android™ dari LG, asisten baru Anda. Ketika dalam keperluan bisnis, di dalam perjalanan, maupun ketika melewatkan waktu bersama keluarga, smartphone Android™ LG akan mempermudah aktivias Anda, begitu praktis dan sangat nyaman dipakai setiap waktu.
    </div>
</div>

<div class="mt-8  max-2-xl h-[600px] flex" style={{backgroundImage: `url(${images})`  }}>
    

    <div class="my-auto ml-[940px]">
        <button onClick={()=>navigate("/detail")} class="text-sm font-medium px-7 py-3 bg-pink-700  rounded text-white hover:bg-pink-600 my-3">SELENGKAPNYA</button>
    </div>
</div>


<div class="container mx-auto mt-10 flex flex-wrap justify-center columns-2 gap-5">
    <div class="border rounded-lg" style={{backgroundColor: `${color}` }}>
        <p class="text-center my-5 font-semibold hover:underline">LG V30 PLUS</p>
        <img src={lg1} class="w-30 h-60 mb-5" alt="upload"/>
    </div>
    <div class="border rounded-lg" style={{backgroundColor: `${color}` }}>
        <p class="text-center my-5 font-semibold hover:underline" >LG G7+ThinQ</p>
        <a href="detail.html">
        <img src={lg2} class="w-30 h-60 mb-5" alt="upload"/></a>
        
    </div>
</div>



<div class="my-4 grid overflow-hidden grid-cols-3 grid-rows-2 gap-2">

	<div class="box col-span-1 text-center">
        <hr class="border-t-1 mb-5 mx-10"/>
        <a href="#" class="text-sm text-center underline cursor-pointer text-slate-400" >Hapus Semua Saringan
        </a>
        <p class="mt-2 mb-5 font-semibold">Produk Diskontinu - </p>
        <button onClick={() => setColor("#b03060")} 
        class="mr-2 text-sm font-medium px-5 py-1 ring-red-800 ring-2 rounded-full text-red-600
         hover:text-white hover:bg-red-800">Color Mode</button>
        <button onClick={() => setColor("#FFFFFF")} class="text-sm font-medium px-5 py-1
         ring-slate-800 ring-2 rounded-full text-slate-600 hover:bg-slate-800 hover:text-slate-50">Normal Mode</button>
    </div>

	<div class="box col-span-2 box  bg-slate-100 flex flex-wrap justify-between items-center px-5 mr-36">

        <div class="flex items-center">
            <a href="https://www.lg.com/id/smartphone" class="mr-2">
                <span class="self-center text-sm dark:text-white">Urutkan</span>
            </a>
            <select id="countries" class="border ring-black ring-1">
                <option selected>Terbaru</option>
                <option value="US">Paling Populer</option>
                <option value="CA">Peringkat Konsumen</option>
            </select>
        </div>

            <div class="flex items-center">
                <p><span class="text-red-600">48</span> Hasil Total</p>
                <button class="text-sm font-medium px-5 py-1 text-red-600 hover:text-red-800 underline">Lihat Semua</button>
            </div>
        </div>
</div>

<div class="grid overflow-hidden grid-cols-3 grid-rows-2 gap-2">
	<div class="box col-span-1"></div>

	<div class="box col-span-2">

        <div class="container mx-auto mt-1 flex flex-wrap justify-start columns-3 gap-4">

            <div class="border rounded-lg p-2" style={{backgroundColor: `${color}` }}>
                <div class="container flex flex-wrap m-auto justify-end columns-1 my-1">
                    <img src={heart} class="my-1 w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <img src={lg1} class="w-30 h-60 mb-5 container flex flex-wrap m-auto justify-center" alt="upload"/>
                <div class="m-auto w-6 h-6 rounded-full bg-slate-500 hover:ring-2 ring-red-600"></div>
                <p class="text-center my-1 font-semibold hover:underline">LG V30 PLUS</p>
                <div class="container flex flex-wrap m-auto justify-center columns-5 my-2">
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Desain yang Seimbang</div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Kamera Sudut Lebar</div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Haptik</div>
                <hr class="border-t-1 mx-6"/>
                <div class="container flex flex-wrap m-auto justify-center">
                    <button class="text-sm font-medium px-10 py-3 bg-pink-700  rounded text-white hover:bg-pink-600 my-3">
                        LOKASI PEMBELIAN
                    </button>
                </div>
                <div class="text-sm font-semibold container flex flex-wrap m-auto justify-center text-slate-600 my-4">
                    <img src={shopping} class="w-5 h-5 mb-5 mr-2 hover:ring-1 hover:ring-red-600" alt="star"/>
                    TAMBAH PRODUK  BANDINGKAN
                </div>
            </div>

            <div class="border rounded-lg p-2" style={{backgroundColor: `${color}` }}>
                <div class="container flex flex-wrap m-auto justify-end columns-1 my-1">
                    <img src={heart} class="my-1 w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <img src={images350} class="w-30 h-60 mb-5 container flex flex-wrap m-auto justify-center" alt="upload"/>
                <div class="container flex flex-wrap m-auto justify-center columns-2">
                    <div class="mr-2 w-6 h-6 rounded-full bg-blue-800 hover:ring-2 ring-red-600"></div>
                    <div class="w-6 h-6 rounded-full bg-slate-800 hover:ring-2 ring-red-600"></div>
                </div>
                <p class="text-center my-1 font-semibold hover:underline" >LG K9</p>
                <div class="container flex flex-wrap m-auto justify-center columns-5 my-2">
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Layar HD 5.0"</div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Kamera Utama 8MP</div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Pengurang Noise saat gelap</div>
                <hr class="border-t-1 mx-6"/>

                <div class="container flex flex-wrap m-auto justify-center">
                    <button class="text-sm font-medium px-10 py-3 bg-pink-700  rounded text-white hover:bg-pink-600 my-3">
                        LOKASI PEMBELIAN
                    </button>
                </div>
                <div class="text-sm font-semibold container flex flex-wrap m-auto justify-center text-slate-600 my-4">
                    <img src={shopping} class="w-5 h-5 mb-5 mr-2 hover:ring-1 hover:ring-red-600" alt="star"/>
                    TAMBAH PRODUK  BANDINGKAN
                </div>
            </div>

            <div class="border rounded-lg p-2" style={{backgroundColor: `${color}` }}>
                <div class="container flex flex-wrap m-auto justify-end columns-1 my-1">
                    <img src={heart} class="my-1 w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <a href="detail.html"><img src={lg2} class="w-30 h-60 mb-5 container flex flex-wrap m-auto justify-center" alt="upload"/></a>
                <div class="container flex flex-wrap m-auto justify-center columns-2">
                    <div class="mr-2 w-6 h-6 rounded-full bg-slate-800  hover:ring-2 ring-red-600"></div>
                    <div class="w-6 h-6 rounded-full bg-slate-500  hover:ring-2 ring-red-600"></div>
                </div>
                <p class="text-center my-1 font-semibold hover:underline" >LG G7+ThinQ</p>

                <div class="container flex flex-wrap m-auto justify-center columns-5 my-2">
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Performa Tinggi</div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Kesederhanaan Yang Fungsional</div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Super Bright Display</div>
                <hr class="border-t-1 mx-6"/>

                <div class="container flex flex-wrap m-auto justify-center">
                    <button class="text-sm font-medium px-10 py-3 bg-pink-700  rounded text-white hover:bg-pink-600 my-3">
                        LOKASI PEMBELIAN
                    </button>
                </div>
                <div class="text-sm font-semibold container flex flex-wrap m-auto justify-center text-slate-600 my-4">
                    <img src={shopping} class="w-5 h-5 mb-5 mr-2 hover:ring-1 hover:ring-red-600" alt="star"/>
                    TAMBAH PRODUK  BANDINGKAN
                </div>
            </div>

            </div>
    </div>

    <div class="box col-span-1 "></div>

	<div class="box col-span-2 ">

        <div class="container mx-auto mt-1 flex flex-wrap justify-start columns-3 gap-4">

            <div class="border rounded-lg p-2" style={{backgroundColor: `${color}` }}>
                <div class="container flex flex-wrap m-auto justify-end columns-1 my-1">
                    <img src={heart} class="my-1 w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <img src={Q6} class="w-30 h-60 mb-5 container flex flex-wrap m-auto justify-center" alt="upload"/>
                <div class="m-auto w-6 h-6 rounded-full bg-slate-500 hover:ring-2 ring-red-600"></div>
                <p class="text-center my-1 font-semibold hover:underline">LG Q6 Astro Black</p>
                <div class="container flex flex-wrap m-auto justify-center columns-5 my-2">
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Desain ramping nan elegan</div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Layar FullVision</div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Face Recognition</div>
                <hr class="border-t-1 mx-6"/>
                <div class="container flex flex-wrap m-auto justify-center">
                    <button class="text-sm font-medium px-10 py-3 bg-pink-700  rounded text-white hover:bg-pink-600 my-3">
                        LOKASI PEMBELIAN
                    </button>
                </div>
                <div class="text-sm font-semibold container flex flex-wrap m-auto justify-center text-slate-600 mt-4">
                    <img src={shopping} class="w-5 h-5 mb-5 mr-2 hover:ring-1 hover:ring-red-600" alt="star"/>
                    TAMBAH PRODUK  BANDINGKAN
                </div>
            </div>

            <div class="border rounded-lg p-2" style={{backgroundColor: `${color}` }}>
                <div class="container flex flex-wrap m-auto justify-end columns-1 my-1">
                    <img src={heart} class="my-1 w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <img src={G6} class="w-30 h-60 mb-5 container flex flex-wrap m-auto justify-center" alt="upload"/>
                <div class="container flex flex-wrap m-auto justify-center columns-4">
                    <div class="mr-2 w-6 h-6 rounded-full bg-pink-800 hover:ring-2 ring-red-600"></div>
                    <div class="mr-2 w-6 h-6 rounded-full bg-green-800 hover:ring-2 ring-red-600"></div>
                    <div class="mr-2 w-6 h-6 rounded-full bg-blue-800 hover:ring-2 ring-red-600"></div>                    
                    <div class="w-6 h-6 rounded-full bg-slate-800 hover:ring-2 ring-red-600"></div>
                </div>
                <p class="text-center my-1 font-semibold hover:underline" >LG G6 Black</p>
                <div class="container flex flex-wrap m-auto justify-center columns-5 my-2">
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Desain Next-Gen</div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Desain Next-Gen</div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Kamera Depan Sudut Lebar</div>
                <hr class="border-t-1 mx-6"/>

                <div class="container flex flex-wrap m-auto justify-center">
                    <button class="text-sm font-medium px-10 py-3 bg-pink-700  rounded text-white hover:bg-pink-600 my-3">
                        LOKASI PEMBELIAN
                    </button>
                </div>
                <div class="text-sm font-semibold container flex flex-wrap m-auto justify-center text-slate-600 mt-4">
                    <img src={shopping} class="w-5 h-5 mb-5 mr-2 hover:ring-1 hover:ring-red-600" alt="star"/>
                    TAMBAH PRODUK  BANDINGKAN
                </div>
            </div>

            <div class="border rounded-lg p-2" style={{backgroundColor: `${color}` }}>
                <div class="container flex flex-wrap m-auto justify-end columns-1 my-1">
                    <img src={heart} class="my-1 w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <img src={stylus} class="w-30 h-60 mb-5 container flex flex-wrap m-auto justify-center" alt="upload"/>
                <div class="container flex flex-wrap m-auto justify-center columns-2">
                    <div class="mr-2 w-6 h-6 rounded-full bg-slate-800  hover:ring-2 ring-red-600"></div>
                    <div class="w-6 h-6 rounded-full bg-slate-500  hover:ring-2 ring-red-600"></div>
                </div>
                <p class="text-center my-1 font-semibold hover:underline" >LG Stylus 3</p>

                <div class="container flex flex-wrap m-auto justify-center columns-5 my-2">
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                    <img src={star} class="w-4 h-4 mb-5 hover:ring-1 hover:ring-red-600" alt="star"/>
                </div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Pen Pop 2.0 & Palm Rejection</div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Kesederhanaan Yang Fungsional</div>
                <hr class="border-t-1 mx-6"/>
                <div class="text-left my-3  mx-5">. Sensor Sidik Jari Multifungsi</div>
                <hr class="border-t-1 mx-6"/>

                <div class="container flex flex-wrap m-auto justify-center">
                    <button class="text-sm font-medium px-10 py-3 bg-pink-700  rounded text-white hover:bg-pink-600 my-3">
                        LOKASI PEMBELIAN
                    </button>
                </div>
                <div class="text-sm font-semibold container flex flex-wrap m-auto justify-center text-slate-600 mt-4">
                    <img src={shopping} class="w-5 h-5 mb-5 mr-2 hover:ring-1 hover:ring-red-600" alt="star"/>
                    TAMBAH PRODUK  BANDINGKAN
                </div>
            </div>

        </div>
    </div>

</div>

<div class="grid grid-cols-3 grid-rows-1 gap-1 mb-5">
	<div class="box col-span-1"></div>
	<div class="box col-span-2">
        <div class="container mx-auto mt-1 flex flex-wrap justify-center columns-3 gap-4">
            <div class="border ring-1 ring-black p-1 bg-slate-600 text-white cursor-pointer">1</div>
            <div class="border ring-1 ring-black p-1 cursor-pointer">2</div>
            <div class="border ring-1 ring-black p-1 cursor-pointer">3</div>

        </div>

    </div>
</div>

<hr class="border-t-1"/>
<div class="max-w-2xl  mx-auto mt-8">
    <div class="text-[30px] text-center font-semibold">LG Product Service and Support</div>

    <div class="text-center mt-5">Kami dapat membantu menjawab pertanyaan seputar produk, perawatan, penggunaan, perbaikan, dan pemeliharaan produk LG Anda.</div>
</div>

<div class="container mx-auto mt-10 flex flex-wrap justify-evenly columns-3 gap-5">
    <div class="">
        
        <img src={chat} class="w-16 h-16 mb-5" alt="upload"/>
        <p class="text-center my-5 font-semibold hover:underline">LIVECHAT</p>
    </div>
    <div class="">
        
        <img src={call} class="w-16 h-16 mb-5" alt="upload"/>
        <p class="text-center my-5 font-semibold hover:underline" >TELEPON</p>
    </div>
    <div class="">
        
        <img src={email} class="w-16 h-16 mb-5" alt="upload"/>
        <p class="text-center my-5 font-semibold hover:underline" >EMAIL</p>
    </div>
</div>


    
</div>






// </div>
);
};
export default Home;