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
import Appointments from '../Appointments';
import CustomersList from '../CustomersList';

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

const appointments=[
  {
    shopName:'chez faysal',
    date:'24-11-2023',
    timeSlot:'7:00',
    price:'25$',
  },

  {
    shopName:'chez mhanna',
    date:'5-12-2023',
    timeSlot:'10:20',
    price:'30$',
  },

  {
    shopName:'coiffeur',
    date:'12-01-2024',
    timeSlot:'5:00',
    price:'35$',
  },

  {
    shopName:'coiffeur',
    date:'12-01-2024',
    timeSlot:'5:00',
    price:'35$',
  },

  {
    shopName:'coiffeur',
    date:'12-01-2024',
    timeSlot:'5:00',
    price:'35$',
  },


];

const pastappointments=[
  {
    shopName:'chez maha',
    date:'24-8-2023',
    timeSlot:'15:00',
    price:'35$',
  },

  {
    shopName:'chez marc',
    date:'6-6-2023',
    timeSlot:'18:20',
    price:'15$',
  },

  {
    shopName:'bestbarber',
    date:'12-12-2022',
    timeSlot:'11:00',
    price:'40$',
  },
];

function Routing(){
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Profile' element={<Profile />}/>
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
      <Route path='/Appointments' element={<Appointments/>} />
      <Route path='/CustomersList' element={<CustomersList/>} />
    </Routes>
    </>
  );
}

export default Routing