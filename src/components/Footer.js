import React from "react";
import upload from '../images/upload.png'

const Footer = () => {
    return (
        <div>
            <hr class="border-t-1"/>

            <div class="bg-slate-100 w-full">

                <div class="bg-slate-100 h-72 ml-auto p-10 text-slate-400">
                    <div class="container mx-auto mt-1 flex flex-wrap justify-start columns-2 gap-5">
                        <div>
                        <div>
                        <div class="text-black mb-3">Telepon</div>
                        Operasional LG Customer Service:</div>  
                        <div>
                        Senin-Jumat : 07.00-20.00 WIB
                        </div>
                        <div class="mb-5">
                        Sabtu-Minggu & Hari Libur : 07.00-18.00 WIB</div>
                        <div>
                        14010
                        </div>
                        <div>
                        Follow Twitter LG Service <span class="underline ">@LGHere4u</span></div>
                        </div>
                        
                        </div>
                        
                    </div>
                </div>

                <div class="bg-slate-800 w-full">
                    <div class="bg-slate-800 h-32 ml-auto p-10 text-slate-400">
                        Hak cipta © 2009 – 2022 LG Electronics. Seluruh hak cipta dilindung undang-undang
                        <div class="underline ">This is LG Electronics' official homepage. If you want to connect to LG Corp., or other LG affiliates, please click</div>
                    </div>
                        
                </div>

                <div class="w-10 h-10 bg-slate-200 rounded-full flex fixed bottom-5 right-5 cursor-pointer ">
                    <a href="#" class="text-xl m-auto ">
                        <img src={upload} class="w-4 h-4" alt="upload"/>
                    </a>

</div>
        
        </div>
       
    );
};
export default Footer;