import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import Profile from '../Profile';
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import AboutUs from '../About';
import Contact from '../Contact'
import PickUser from '../PickUser';
import SignUpBarber from '../SignUpBarber';
import CreateBarberShop from '../CreateBarberShop';
import Dashboard from '../Dashboard';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  dateOfBirth: "12/12/2001",
  address: 'New York, USA',
  phoneNumber: '0322222',
  profilePicture: 'https://example.com/profile-picture.jpg',
};

function Routing(){
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Profile' element={<Profile user={user}/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUpBarber' element={<SignUpBarber/>}/>
      <Route path='/About' element={<AboutUs/>}/>
      <Route path='/CreateBarberShop' element={<CreateBarberShop/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/PickUser' element={<PickUser/>} />
      <Route path='/DashBoard' element={<Dashboard/>}/>
    </Routes>
    </>
  );
}

export default Routing