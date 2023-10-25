import Navbar from '../Navbar';
import HowItWorks from '../HowItWorks';
import Footer from '../Footer';
import logo from '../../logo.jpg';
import './index.css';

function Home() {
    return (
    <>
        <Navbar></Navbar>
        <div className='intro-logo'>
            <img src={logo} alt="Logo"/>
            <h1>Providing top-quality beauty services</h1>
        </div>

        <div className='container'>
            <h2>How it works</h2>
            <HowItWorks></HowItWorks>
        </div>
        
        <Footer></Footer>
    </>
    );
}

export default Home