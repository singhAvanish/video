import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faXmark,faLessThan,faUser,faCircleQuestion,faBell,faCloudBolt,faScissors,faVideo,faTowerBroadcast,faMicrophone } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";
import "./dashboard.css";
import projectsData from "../projects.json";
import Navbar from './Navbar';


const Dashboard = () => {
  const [projects,setProjects]=useState([]);
  useEffect(()=>{
    setProjects(projectsData)
  },[])

  return (
    <div className='dashboard'>
    <Navbar></Navbar>
    <div className='main'>
    <div className='head'>
        <div className='head1'>
        <span><FontAwesomeIcon icon={faLessThan} /></span>
        <div className='head1-btn'>
            
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /><input placeholder='Search' /><FontAwesomeIcon icon={faXmark} /></button> 
            
          </div>

        </div>
        <div className='head2'>
        <button className='head2-btn1'>Upgrade<FontAwesomeIcon icon={faCloudBolt} /></button>
        <button className='head2-btn2'>Invite <FontAwesomeIcon icon={faUser} /></button>
        <span><FontAwesomeIcon icon={faCircleQuestion} /></span>
        <span><FontAwesomeIcon icon={faBell} /></span>
        
            
        </div>
    </div>
    <div className='features'>
      <p>Let's Create Some <span>Videos!</span></p>
      <ul className='list-feature'>
        <li className='button'><div className='li-feature'><FontAwesomeIcon icon={faScissors} /></div><Link to="/editor"><span>Create Project</span></Link></li>
        <li className='button'><div className='li-feature'><FontAwesomeIcon icon={faVideo} /></div><span>Record Video</span></li>
        <li className='button'><div className='li-feature'><FontAwesomeIcon icon={faTowerBroadcast} /></div><span>Go Live</span></li>
        <li className='button'><div className='li-feature'><FontAwesomeIcon icon={faMicrophone} /></div><span>Record Podcast</span></li>
      </ul>
    </div>
    <div className='projects'>
      <div className='project-head'><span>My Recent Videos</span> <span>All Videos &gt;</span></div>

      <div className='vid-list'>
      <ul className='vid-ulist'>
        {projects.map(project=>(
          <li key={project.projectId}>
          

          <iframe src={project.videoLink} title={project.projectName}  allow="autoplay"></iframe>
          <p>{project.projectName}</p>
          <p>{project.time}</p>
          </li>
        ))}
        </ul>
      </div>
    </div>
      
    </div>
    </div>
  )
}

export default Dashboard
