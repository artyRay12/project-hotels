import React from "react";
import "./hotelCard.scss";
import { NavLink } from "react-router-dom";
import { TelephoneFill, GeoAltFill, EnvelopeFill } from 'react-bootstrap-icons';

const HotelCard = ({ id, name, country, city, street, phones, email }) => {

    return (
        <div class="card bg-secondary text-white card-item">
            <div class="card-body">
                <NavLink to={`/hotels/${id}/`}>
                <h3 class="card-title card-item-title">{name}</h3>
                </NavLink>
                <p class="card-text text-white d-flex align-items-center">
                    <GeoAltFill color="#64d5f7"/>
                    &nbsp;{/* Adress: */}&nbsp;
                    <span className="card-item-information">{` ${country}, ${city}, ул: ${street}`}</span>
                </p>
                <p class="card-text text-white d-flex align-items-center">
                    <TelephoneFill color="#64d5f7"/>
                    &nbsp;{/* phone: */}&nbsp;
                    {phones.length === 1 ? <span className="card-item-information">phones</span> :
                        phones.map((elem, i, arr) => i === arr.length - 1 
                            ?  <div className="card-item-information">{`${elem}.`}</div> 
                            : <div className="card-item-information">{`${elem},`}</div>
                        )
                    }

                </p>

                <p class="card-text text-white">
                    <EnvelopeFill color="#64d5f7"/>
                    &nbsp;{/* email: */}&nbsp;
                    <span className="card-item-information">{` ${email}`}</span>
                </p>
            </div>
        </div>
    );
};

export default HotelCard;
