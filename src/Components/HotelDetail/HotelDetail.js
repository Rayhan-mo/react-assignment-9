import React from 'react';
import './HotelDetail.css';
import room1 from '../Image/Rectangle 26.png';
import room2 from '../Image/Rectangle 27.png';
import room3 from '../Image/Rectangle 28.png';

const HotelDetail = () => {
    return (
        <div className="detail-container">
                <p>252 stays Sep 23 5 guests</p>
                <h4>Stay in Cox's Bazar</h4>
            <div className="room">
                <img src={room1} alt=""/>
                <div className="room-details">
                    <h4>Light Bright airy stylish apt & safe peaceful stay</h4>

                    <p>4 guest 2 bedrooms 2 beds 2 baths</p>
                    <p>Wifi air conditioning kitchen cancellation flexibility available</p>
                    <p>4.9(20)</p>
                    <p>$34/night</p>
                </div>
            </div>
            <div className="room">
                <img src={room2} alt=""/>
                <div className="room-details">
                    <h4>Light Bright airy stylish apt & safe peaceful stay</h4>
                    <p>4 guest 2 bedrooms 2 beds 2 baths</p>
                    <p>Wifi air conditioning kitchen cancellation flexibility available</p>
                    <p>4.9(20)</p>
                    <p>$34/night</p>
                </div>
            </div>
            <div className="room">
                <img src={room3} alt=""/>
                <div className="room-details">
                <h4>Light Bright airy stylish apt & safe peaceful stay</h4>
                <p>4 guest 2 bedrooms 2 beds 2 baths</p>
                <p>Wifi air conditioning kitchen cancellation flexibility available</p>
                <p>4.9(20)</p>
                <p>$34/night</p>
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;