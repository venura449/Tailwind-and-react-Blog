import React from 'react';
import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link ,useLocation} from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa'; 

export default function Header() {
  const path =useLocation().pathname;

  return (

    
    <Navbar className='border-b-2'>
      <Link to="/Home" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='ml-2 mr-2 px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Venu's</span> blog
      </Link>
      <form>
        <button className="w-12 h-10 c lg:hidden" color="grey">
          <AiOutlineSearch />
        </button>
        <TextInput
          type="text"
          placeholder="search.."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <div className='flex gap-2 md:order-2'>
        <button className='w-12 h-10 hidden sm:inline' color='grey'>
          <FaMoon />
        </button>
        <Link to='/signin'>
          <Button gradientDuoTone='purpleToBlue' outline>Sign in</Button>
        </Link>
        <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
        <Navbar.Link active = {path === "/Home"} as={'div'}>
        <Link to='/Home'>Home
        </Link>
        </Navbar.Link>

        <Navbar.Link  active={path==="/projects"} as={'div'}>
        <Link to='/projects'>Projects
        </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/About"} as={'div'}>
        <Link to='/About'>About
        </Link>
        </Navbar.Link>
        
        </Navbar.Collapse>
      
    </Navbar>
  );
}
