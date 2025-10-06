import { data } from "../db.json";
import React, { useMemo } from "react";

function BigScreen({ id }) {
    const currentMovie = useMemo(() => data.find((m) => String(m.id) === String(id)) || data[0], [id]);

    const imageUrl = currentMovie.bigImage || currentMovie.image;
    const title = currentMovie.movieName || "Untitled";
    const description = currentMovie.description || "";

    return (
        <div className="flex flex-col inset-0">
            <h1 className="text-white text-[32px] font-semibold mt-5 tracking-[2px]">Explore</h1>
            <p className="text-[#868686] text-[18px] font-light mt-5 mb-5">Discover new anime and movies</p>
            <div
                role="button"
                tabIndex={0}
                className="w-full h-[600px] rounded-[12px] relative overflow-hidden bg-gray-900 cursor-pointer"
            >
                <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <div className="flex flex-col justify-between absolute bottom-5 left-10 w-full p-4 pointer-events-none">
                    <h1 className="text-white text-[24px] font-semibold mt-2">{title}</h1>
                    <p className="text-white text-[14px] font-light mt-2 w-[50%]">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default BigScreen;