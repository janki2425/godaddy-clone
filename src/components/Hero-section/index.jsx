import Image from "next/image";
import React from "react";

const Hero=()=>{
    return(
        <div className="flex h-screen justify-center">
            <div>
                <div className="flex">
                    <input 
                    type="search" 
                    className="bg-red-300"/>
                    <div className="search-btn">
                        <Image src={'/hero-section/search.svg'} width={20} height={20}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;