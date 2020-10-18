import React from "react";
import { data } from "../Hotels/data";
import { Link, Redirect } from "react-router-dom";

const HotelPage = (props) => {
    const slug = props.match.params.slug;

    if (slug > data.length - 1 || slug < 0) {
        debugger
        return <Redirect to="/error/" />;
    }

    const hotelInfo = data[slug];
   

    return (
        <div className="buyers-personal-wrapper">
            <div className="jumbotron bg-dark text-light">
                <p> {`Hotel name:  ${hotelInfo.name}`}</p>
                <p> {`adress:  ${hotelInfo.country}, ${hotelInfo.city}, ${hotelInfo.street}`}</p>
                <p> {`phones:  ${hotelInfo.phones}`}</p>
                <p> {`email:  ${hotelInfo.email}`}</p>
                <Link to="/hotels/">Back</Link>
            </div>
        </div>
    );
};

export default HotelPage;
