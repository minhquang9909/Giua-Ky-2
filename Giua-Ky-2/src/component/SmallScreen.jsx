import React from "react";
import { data } from "../db.json";

function SmallScreen({ onSelect, selectedId }) {

    return (
        <>
        <h1 className="text-white text-[32px] font-semibold mt-5 mb-5">New Releases</h1>
            <div className="flex flex-row justify-between h-full gap-0.5 flex-wrap">
                {data.map((item) => (
                    <div
                        key={item.id}
                        role="button"
                        onClick={() => onSelect(item)}
                        className={`cursor-pointer flex flex-col justify-start items-center rounded-lg m-2 relative w-[150px] focus:outline-none transform transition-transform}`}
                    >
                        <div className={`flex flex-col justify-between relative items-center mb-2 
                            hover:scale-105 transition-transform duration-300 ease-in-out 
                            ${String(selectedId) === String(item.id) ? 'scale-105' : ''}`
                            }>
                            <img 
                                src={item.image}
                                alt={item.movieName}
                                className="w-full h-[250px] object-cover rounded-lg "
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#192026] to-transparent"></div>
                            <p className="flex absolute bottom-2 left-10 justify-center text-white text-[12px] z-10">Episode {item.episode}</p>
                        </div>

                        <h2 className="text-white items-center text-center text-[16px] font-medium">{item.movieName}</h2>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SmallScreen;