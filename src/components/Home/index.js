import Navbar from '../Navbar';
import './index.css';
import Posts from '../Posts';

function Home() {
    return (
    <>
        <Navbar></Navbar>
        <div className='post-class'>
            <Posts></Posts>
            <Posts></Posts>
            <Posts></Posts>
       </div>
    </>
    );
}

export default Home