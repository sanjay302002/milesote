import React, { useState } from 'react';
import './Contact.css';
import Copyright from './Copyright.jsx';
const Contact = () => {
    

    return (
        <div className="Conatct-container">
            <div className="first-half"  style={{backgroundColor:'yellow',width:'100%',height:'50%'}}>
              
            </div>
            <div className="second-half" style={{backgroundColor:'black',width:'100%',height:'50%',color:'white',fontSize:'20px'}} >
                <div className="second-1" style={{borderBottom :'#FEFFFF 1px solid'}}>
              <h3 style={{fontWeight:'bolder',lineHeight:'25px'}}>MILESTONE PROMOTERS</h3>
              <p>Milestone Promoters is proud of its unwzvering honesty and our remarkable 10+ years of excellence in offering distinctive properties to the right clients.We are constantly striving to provide the best possible real estate investment services and management.</p>
            </div>
            <div className="second-2" style={{borderBottom :'#FEFFFF 1px solid'}}>
                <h3 style={{fontWeight:'bolder',lineHeight:'2.5px'}}>CONTACT US</h3>
                <span style={{fontWeight:'bolder',lineHeight:'2.5px'}}>&nbsp;&nbsp;&nbsp;T Rajendran</span><span>,9976681212</span><br/>
                <span style={{fontWeight:'bolder'}}>&nbsp;&nbsp;&nbsp;K Ramachandran</span><span>,9443313035</span><br/>
                <span style={{fontWeight:'bolder'}}>&nbsp;&nbsp;&nbsp;R Thiruppathi</span><span>,9363007273</span>
            </div>
            <div className="second-3" style={{borderBottom :'#FEFFFF 1px solid'}}>
            <h3 style={{fontWeight:'bolder',lineHeight:'2.5px'}}>LOCATION</h3>
            <p style={{lineHeight:'10px'}}>&nbsp;&nbsp;&nbsp;Kanthalloor,Kerala</p>
            <p style={{lineHeight:'10px'}}>&nbsp;&nbsp;&nbsp;Marayoor,Kerala</p>
            <p style={{lineHeight:'10px'}}>&nbsp;&nbsp;&nbsp;Pollachi,Tamil Nadu</p>
            </div>
            <Copyright/>
            </div>
            
        </div>
    );
};

export default Contact;
