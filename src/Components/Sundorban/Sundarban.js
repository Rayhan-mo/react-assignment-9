import React from 'react';
import { Link } from 'react-router-dom';
import image3 from '../Image/sundorbon.png';
import './Sundarban.css';

const Sundarban = () => {
    const Sundarban={
        backgroundImage:`url(${image3})`,
        width: '20%',
        height: '200px'
    }
    return (
    
            <div className="sundarban-container">
            <div className="image" style={Sundarban}>
            </div>
            <div className="info-container">
            <h3>SUNDARBAN</h3>
            
                <p>SUNDARBAN It is famous mostly for its long natural sendy beach, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, debitis. Minus consectetur maxime empedit. </p>
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

export default Sundarban;