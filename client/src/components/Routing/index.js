import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import Profile from '../Profile';
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import AboutUs from '../About';
import Contact from '../Contact'

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
      <Route path='/About' element={<AboutUs/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default Routing