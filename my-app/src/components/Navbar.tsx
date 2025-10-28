import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/student/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/student/profile">Profile</NavLink></li>
                <li><NavLink to="/student/events">Events</NavLink></li>
                <li><NavLink to="/student/qr">QR Code</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;