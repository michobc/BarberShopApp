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
import Shops from '../Shops';
import MyShops from '../MyShops';
import ShopProfile from '../ShopProfile';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  dateOfBirth: "12/12/2001",
  address: 'New York, USA',
  phoneNumber: '0322222',
  profilePicture: 'https://example.com/profile-picture.jpg',
};

const shop = {
  name: 'chez faysal',
  address: 'bsalim streets',
  telephone: '01/011111',
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
      <Route path='/Shops' element={<Shops/>} />
      <Route path='/MyShops' element={<MyShops/>} />
      <Route path='/ShopProfile' element={<ShopProfile shop={shop}/>} />
    </Routes>
    </>
  );
}

export default Routing