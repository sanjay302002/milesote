import React, { useState,useEffect } from 'react';
import './Landing_3.css';
import Navigation from './Navigation.jsx';
import Copyright from './Copyright.jsx';

const data = [
    { id: 1, location: 'Coimbatore, Tamilnadu', imgSrc: './images/view1.jpg', price: 'Rs. 1.5 Lakhs Onwards' },
    { id: 2, location: 'Marayoor, Kerala', imgSrc: './images/view2.jpg', price: 'Rs. 1.5 Lakhs Onwards' },
    { id: 3, location: 'Marayoor, Kerala', imgSrc: './images/view3.jpg', price: 'Rs. 1.5 Lakhs Onwards' },
    { id: 4, location: 'Marayoor, Kerala', imgSrc: './images/view4.jpg', price: 'Rs. 1.5 Lakhs Onwards' },
    { id: 5, location: 'Marayoor, Kerala', imgSrc: './images/view5.jpg', price: 'Rs. 1.5 Lakhs Onwards' },
    { id: 6, location: 'Marayoor, Kerala', imgSrc: './images/view6.jpg', price: 'Rs. 1.5 Lakhs Onwards' },
    
];

const Landing_3 = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const filteredData = data.filter((item) =>
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Navigation />
            <div style={{ marginTop: '95px' }}></div>

            
             <div style={{ marginTop: '95px' }}></div>
            {isMobile && (
                <div className="mobile-search">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Search by location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <span>
                        <button id="search-button">Search</button>
                    </span>
                </div>
            )}


            <div className="container_3">
                <div className="header_3">
                    <img src="./images/view_main.jpg" className="main-image" alt="Milestone Promoters" />
                    <h1 id="pickup">YOUR PLOT. YOUR HOME. YOUR WAY.</h1>
                </div>
                
                
                
                <div className="cards_3">
                    {filteredData.map((item) => (
                        <div key={item.id} className="card_3">
                            <img src={item.imgSrc} className="card-image_3" alt={item.location} />
                            <div className="card-content_3">
                                <h3>Milestone Promoters</h3>
                                <p id='loc_3'>{item.location}</p>
                                <p>Plots Starting from {item.price}</p>
                                <div className="card-button_3">Know more</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Copyright />
        </>
    );
};

export default Landing_3;
