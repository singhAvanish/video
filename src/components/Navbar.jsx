import React from 'react';
import "./Navbar.css";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHouse,faFolder,faPodcast,faLaptopFile,faPlus,faTableColumns} from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='logo'>
        <span>REACT.JS</span>
    </div>
    <div className='profile'>
    <img alt='avi'></img>
    
    <span><h1>Avanish Singh</h1></span>
    

    </div>
    <div className='btn-main'>
    <btn className='btn1'> <span>New Video</span><FontAwesomeIcon icon={faPlus} /></btn>


    <btn className='btn'><FontAwesomeIcon icon={faHouse} />Home</btn>
    <btn className='btn'><FontAwesomeIcon icon={faTableColumns} />Template</btn>
    <btn className='btn'><FontAwesomeIcon icon={faFolder} />All Videos</btn>
    <btn className='btn'><FontAwesomeIcon icon={faPodcast} />Podcast & shows</btn>
    <btn className='btn'><FontAwesomeIcon icon={faLaptopFile} />Brand Kit</btn>

    </div>
    </nav>
  )
}

export default Navbar
