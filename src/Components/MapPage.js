import React from 'react'
import mapphoto from '../assets/About_Comp/map.gif'
import postergif from '../assets/About_Comp/Posterlightgif.gif'
import { Link } from 'react-router-dom';
import '../App.css'

function MapPage() {
  return (
    <div style={{ zIndex: 0 }}>
      <div className="card">
        <div className="card-header blockquote font-montserrat">
          Welcome to E-Waste Locator
        </div>
        <div className="card-body">
          {/* <blockquote className="blockquote mb-0"> */}
          <p>In an effort to combat the growing issue of electronic waste (e-waste), our project is dedicated to responsible recycling and disposal. We provide convenient drop-off locations for old electronics, ensuring they are recycled or refurbished, reducing environmental impact and promoting a sustainable future.</p>
          {/* </blockquote> */}
          <Link to="/findfacility">
            <button className="button-27">
              Find Facility
            </button>
          </Link>
        </div>
      </div>
      <img src={postergif} className='poster' alt='' />
      <img src={mapphoto} className='mappage' alt='' />
    </div>
  )
}

export default MapPage