import React from 'react';
import './Milestone.css';

function Milestone() {
  return (
    <div className="container4">
      <header className="header4">
        <h1>MILESTONE PROMOTERS</h1>
        <p>
          We understand the importance of investing in the house of group dreams - a lifestyle that is unconditional & unrestricted. 
          Milestone Promoters is the most trusted plot real estate developer, with every project and property in your favorite metro's 
          most prime & potential addresses.
        </p>
      </header>
      <div className="info-section4">
        <div className="info-box4">
          <div className="icon4">
            <img src='/images/icons8-location-100.png' alt="Icon"/>
          </div>
          <div className='details4'>
            <p>5+<br /><span id="blur4">Cities<br/> <br/></span></p>
          </div>
        </div>
        <div className="info-box4">
          <div className="icon4">
            <img src='/images/icons8-badge-100.png' alt="Icon"/>
          </div>
          <div className='details4'>
            <p>10+<br /><span id="blur4">Years of Expertise</span></p>
          </div>
        </div>
        <div className="info-box4">
          <div className="icon4">
            <img src='/images/icons8-reward-48.png' alt="Icon"/>
          </div>
          <div className='details4'>
            <p>500+<br /><span id="blur4">Acres of Land Delivered</span></p>
          </div>
        </div>
        <div className="info-box4">
          <div className="icon4">
            <img src='/images/icons8-helping-hand-50.png' alt="Icon"/>
          </div>
          <div className='details4'>
            <p>5000+<br/><span id="blur4">Happy Customers</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Milestone;
