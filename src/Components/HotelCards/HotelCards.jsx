import React from "react";
import HotelCard from "./HotelCard/HotelCard";
import "./hotelCards.scss";

export default function HotelCards({ state }) {
    const renderCards = state.slice(0, 3).map(elem => {
       return <HotelCard {...elem} />
    })
    
    return (
        <>
            <div class="card-deck">
                {renderCards}
            </div>
        </>
    );
}
