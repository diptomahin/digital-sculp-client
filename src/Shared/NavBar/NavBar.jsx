import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    const NavLinks = <>
    <li><NavLink to='/' style={({isActive}) => {
        return{
            backgroundColor: isActive ? "#FFE074" : " ",
            padding: isActive ? "10px": " ",
            borderRadius: isActive ? "5px" : ""
           
        }
    }}>Home</NavLink></li>
    <li><NavLink to='/dashboard' style={({isActive}) => {
        return{
            backgroundColor: isActive ? "#FFE074" : " ",
            padding: isActive ? "10px": " ",
            borderRadius: isActive ? "5px" : ""
           
        }
    }}>Dashboard</NavLink></li>
    <li><NavLink to='/contact' style={({isActive}) => {
        return{
            backgroundColor: isActive ? "#FFE074" : " ",
            padding: isActive ? "10px": " ",
            borderRadius: isActive ? "5px" : ""
           
        }
    }}>Contact Us</NavLink></li>
    </>
    return (
        <Navbar fluid rounded className='bg-[#D4F6C8] py-3 fixed z-10 w-full'>
        <Navbar.Brand href="/">
          <img src="https://i.ibb.co/sjbfHyD/Digital-Sculp-1-removebg-preview.png" className="mr-3 h-6 sm:h-9" alt="Digital Sculp" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Digital Sculp</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
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