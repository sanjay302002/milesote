// import React, { useState, useEffect } from 'react';
// import './Navigation.css';
// import { Link } from 'react-scroll';

// const Navigation = () => {
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [showLoginForm, setShowLoginForm] = useState(false);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     useEffect(() => {
//         const handleResize = () => setIsMobile(window.innerWidth <= 600);
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const handleLoginClick = () => {
//         setShowLoginForm(true);
//     };

//     const handleLogin = () => {
//         setIsLoggedIn(true);
//         setShowLoginForm(false);
//     };

//     const handleLogout = () => {
//         setIsLoggedIn(false);
//         setUsername('');
//         setPassword('');
//     };

//     return (
//         <>
//             <div className={`fixed_Bar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                 <div className="navigation">
//                     <img id="img" src="/images/MILESTONElogo.png" alt="logo" />
//                     <span id="title">MILESTONE Promoters</span>
//                     {!isMobile && <img id="search" src="/images/icons8-search-50.png" alt="search" />}
//                     <img id="menu" src="/images/icons8-menu-50.png" alt="menu" onClick={toggleSidebar} />
//                 </div>
//             </div>
//             <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                 <div className="sidebar-header">
//                     <img id="sidebar-img" src="/images/MILESTONElogo.png" alt="logo" />
//                     <span id="sidebar-title">MILESTONE Promoters</span>
//                 </div>
//                 {showLoginForm ? (
//                     <div className="login-form">
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <button onClick={handleLogin}  style={isMobile ? { width: '40%', padding: '10px', marginBottom: '250px', marginLeft: '70px' } : {width: '105px' ,marginBottom: '160%',marginLeft: '100px'}}>Login</button>
//                     </div>
//                 ) : (
//                     <ul>
//                         {isLoggedIn ? (
//                             <>
//                                 <li className="user-initial">
//                                     <div className="user-circle">{username.charAt(0).toUpperCase()}</div>
//                                     <span className="greeting">Hi, {username}</span>
//                                     <span className="account-text">Your Account</span>
//                                 </li>
//                                 <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
//                                 <li><Link to="milestone" smooth={true} duration={500}>About Us</Link></li>
//                                 <li><Link to="/Contact" >Contact Us</Link></li>
//                                 <li onClick={handleLogout}>Log out</li>
//                             </>
//                         ) : (
//                             <>
//                                 <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
//                                 <li><Link to="milestone" smooth={true} duration={500}>About Us</Link></li>
//                                 <li><Link to="/Contact" >Contact Us</Link></li>
//                                 <li onClick={handleLoginClick}>Login</li>
//                             </>
//                         )}
//                     </ul>
//                 )}
//             </div>
//         </>
//     );
// };

// export default Navigation;







import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { Link } from 'react-scroll';

const Navigation = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false); // New state for search bar

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleSearchBar = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        setShowLoginForm(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    return (
        <>
            <div className={`fixed_Bar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <div className="navigation">
                    <img id="img" src="/images/MILESTONElogo.png" alt="logo" />
                    <span id="title">MILESTONE Promoters</span>
                    {!isMobile && (
                        <>
                            <img
                                id="search"
                                src="/images/icons8-search-50.png"
                                alt="search"
                                onClick={toggleSearchBar}
                            />
                            {isSearchOpen && (
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="search-input"
                                />
                            )}
                        </>
                    )}
                    <img id="menu" src="/images/icons8-menu-50.png" alt="menu" onClick={toggleSidebar} />
                </div>
            </div>
            <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <div className="sidebar-header">
                    <img id="sidebar-img" src="/images/MILESTONElogo.png" alt="logo" />
                    <span id="sidebar-title">MILESTONE Promoters</span>
                </div>
                {showLoginForm ? (
                    <div className="login-form">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            onClick={handleLogin}
                            style={isMobile ? { width: '40%', padding: '10px', marginBottom: '250px', marginLeft: '70px' } : { width: '105px', marginBottom: '160%', marginLeft: '100px' }}
                        >
                            Login
                        </button>
                    </div>
                ) : (
                    <ul>
                        {isLoggedIn ? (
                            <>
                                <li className="user-initial">
                                    <div className="user-circle">{username.charAt(0).toUpperCase()}</div>
                                    <span className="greeting">Hi, {username}</span>
                                    <span className="account-text">Your Account</span>
                                </li>
                                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                                <li><Link to="milestone" smooth={true} duration={500}>About Us</Link></li>
                                <li><Link to="/Contact">Contact Us</Link></li>
                                <li onClick={handleLogout}>Log out</li>
                            </>
                        ) : (
                            <>
    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
    <li><Link to="milestone" smooth={true} duration={500}>About Us</Link></li> {/* Corrected */}
    <li><Link to="/Contact">Contact Us</Link></li>
    <li onClick={handleLoginClick}>Login</li>
</>

                        )}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Navigation;
