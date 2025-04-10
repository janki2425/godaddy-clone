import Image from "next/image";
import React from "react";

const Hero=()=>{
    return(
        <div className="flex h-screen justify-center">
            <div className="mt-2 w-full px-4">
                <div className="w-full flex items-center shadow-lg">
                    <input  
                    type="search" 
                    placeholder="Type the domain you want"
                    className="w-full py-4 text-[17px] font-[600] shadow rounded-l-[5px] indent-5"
                    />
                    <div className="search-btn py-4 px-5.5 rounded-r-[5px]">
                        <Image src={'/hero-section/search.svg'} className="invert" width={28} height={28}/>
                    </div>
                </div>
                <section className="h-screen mt-2">
                    <div className="hero-div px-4 h-full max-h-[790px] rounded-[20px]">
                        <div>
                            <p className="p-2 bg-white">NEW</p>
                            <div>
                            <Image src={'/navbar/logo.svg'} width={36} height={36}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Hero;