import React from 'react';
import { Link } from 'react-router-dom';
import image2 from '../Image/coxbazar.png';
import './Coxbazar.css';

const Coxbazar = () => {
    const coxbazar={
        backgroundImage:`url(${image2})`,
        width: '20%',
        height: '200px'
    }
    return (
        <div className="coxbazar-container">
            <div className="image" style={coxbazar}>
            </div>
            <div className="info-container">
                <h3>COX'S BAZAR</h3>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natur </p>
                <br/>
            </div>
            <div className="booking-form" style={{paddingLeft:'15px'}}>
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
                        <button type="button" class="btn btn-warning booking" ><Link to="/HotelDetail"><span className="booking">Start Booking</span></Link></button>
                    </div>
        </div>
    );
};

export default Coxbazar;