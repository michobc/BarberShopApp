import './index.css';
import AccountMenu from '../AccountMenu';

function Navbar() {
    return (
        <>
        <nav className="nav">
            <a href="/" className="site-title">BarberShop</a>
            <div className='menu-list'>
                <ul>
                    <li><a href="">Take Appointment</a></li>
                    <li><a href="">About Us</a></li>
                </ul>
                <AccountMenu></AccountMenu>
            </div>
        </nav>
        </>
    );
}

export default Navbar