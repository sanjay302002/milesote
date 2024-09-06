import './BuildAssistance.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BuildAssistance = () => {
  return (
    <>
      <div className="build-assistance-container">
        <span id="head">Milestone Promoters Build Assist</span>
        <div className="card-container">
          <div className="card">
            <img src="/images/img_1.jpg" alt="Image 1" className="card-image"/>
            <div className="card-content">
              <h3>Milestone Promoters</h3>
              <p>Build your dream 3BHK villa at a price of Rs. 70 Lakhs Onwards.</p>
              <button className="know-more-button">Know more</button>
            </div>
          </div>
          <div className="card">
            <img src="/images/img_2.jpg" alt="Image 2" className="card-image"/>
            <div className="card-content">
              <h3>Milestone Promoters</h3>
              <p>Build your dream 2BHK villa at a price of Rs. 51 Lakhs Onwards.</p>
              <button className="know-more-button">Know more</button>
            </div>
            </div>
          </div>
          <p id='pickup'>   YOUR PLOT.YOUR WAY.YOUR HOME</p>
          <div className="card-container">
          <div className="card">
            <img src="/images/img_3.jpg" alt="Image 3" className="card-image"/>
            <div className="card-content">
              <h3>Milestone Promoters</h3>
              <p id='loc'>Kanthaloor, Kerala.</p>
                <p>Plots starting from Rs. 51 Lakhs Onwards.</p>
              <button className="know-more-button">Know more</button>
            </div>
          </div>
          <div className="card">
            <img src="/images/img_$.jpg" alt="Image 4" className="card-image"/>
            <div className="card-content">
              <h3>Milestone Promoters</h3>
              <p id='loc'>Marayoor, Kerala.</p><p> Plots starting from Rs. 51 Lakhs Onwards.</p>
              <button className="know-more-button">Know more</button>
            </div>
          </div>
        </div>
        <Link to="/Landing_3"><p id='view'>View all</p></Link>
      </div>
    </>
  );
};

export default BuildAssistance;
