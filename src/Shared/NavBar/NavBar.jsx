import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import UseLoggedUser from '../../Hooks/UseLoggedUser';
import { Spinner } from 'flowbite-react';


const NavBar = () => {
 
  const { user, logOut} = useContext(AuthContext);
  const {savedUser, userLoading} = UseLoggedUser()
  console.log(savedUser)
  const handleSignOut = () => {
      logOut()
          .then(
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Logged out successfully.',
              showConfirmButton: false,
              timer: 1500
          })
          )
          .catch()
  }

  const NavLinks = <>
    <li><NavLink to='/' style={({ isActive }) => {
      return {
        backgroundColor: isActive ? "#FFE074" : " ",
        padding: isActive ? "10px" : " ",
        borderRadius: isActive ? "5px" : ""

      }
    }}>Home</NavLink></li>
    <li><NavLink to='/dashboard' style={({ isActive }) => {
      return {
        backgroundColor: isActive ? "#FFE074" : " ",
        padding: isActive ? "10px" : " ",
        borderRadius: isActive ? "5px" : ""

      }
    }}>Dashboard</NavLink></li>
    <li><NavLink to='/contact' style={({ isActive }) => {
      return {
        backgroundColor: isActive ? "#FFE074" : " ",
        padding: isActive ? "10px" : " ",
        borderRadius: isActive ? "5px" : ""

      }
    }}>Contact Us</NavLink></li>

  </>
  if(userLoading){
    return  <Spinner aria-label="Default status example" />;
  }
  return (
    <Navbar fluid rounded className='bg-[#D4F6C8] py-3 fixed z-10 w-full'>
      <Navbar.Brand href="/">
        <img src="https://i.ibb.co/sjbfHyD/Digital-Sculp-1-removebg-preview.png" className="mr-3 h-6 sm:h-9" alt="Digital Sculp" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Digital Sculp</span>
      </Navbar.Brand>
      <div className="flex md:order-2">

      {
          user ? <div>
            <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={user.photoURL} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.displayName}</span>
              <span className="block text-sm">{savedUser?.userRole}</span>
              <span className="block truncate text-sm font-medium">{user.email}</span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Log out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
          </div>
        : <Button color="gray"><Link to='/login'>Login</Link></Button>
       }
       </div>
      <Navbar.Collapse>
        {
          NavLinks
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;