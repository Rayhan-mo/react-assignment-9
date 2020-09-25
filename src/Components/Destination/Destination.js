import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Destination.css';
import image1 from '../Image/Sreemongol.png';
import image2 from '../Image/coxbazar.png';
import image3 from '../Image/sundorbon.png';


const Destination = () => {
    const sreemangal={
        backgroundImage:`url(${image1})`
    }
    const coxbazar={
        backgroundImage:`url(${image2})`
    }
    const sundorban={
        backgroundImage:`url(${image3})`
    }


    return (
        
        <div className="travel-container">
        <div className="image-container">
            <div style={sreemangal} className="image">
               <h2>SREEMANGAL</h2>
               <button className="bookingButton"><Link to="/src/Components/Sreemangal/Sreemangal.js">Explore & Book</Link></button>
            </div>
            <div className="image" style={coxbazar}>
               <h2>COX'S BAZAR</h2>
               <button className="bookingButton"><Link to="/src/Components/Coxbazar/Coxbazar.js">Explore & Book</Link></button>
            </div>
            <div className="image" style={sundorban}>
               <h2>SUNDARBAN</h2>
               <button className="bookingButton"><Link to="/src/Components/Sundorban/Sundarban.js">Explore & Book</Link></button>
            </div>
        </div>
                <div className="booking-form-box">
                    <div className="booking-form">
                        <label  htmlFor=""><span className="label">Origin</span></label>
                        <br/>
                        <input className="orgin"  type="text"/>
                        <br/>

                        <label  htmlFor=""><span className="label">Destination</span></label>
                        <br/>
                        <input className="destination" type="text"/>
                        <br/>

                        <label  htmlFor=""><span className="label">From</span></label>
                        <br/>
                        <input type="date" className="form-control select-date"/>
                        <br/>

                        <label  htmlFor=""><span className="label">To</span></label>
                        <br/>
                        <input type="date" className="form-control select-date"/>
                        <br/>
                    </div>

                    
                    <div>
                        <button type="button" class="btn btn-warning booking" ><Link to="/HotelDetail"><span className="booking">Start Booking</span></Link></button>
                    </div>
                </div>
           
        </div>
    );
};

export default Destination;