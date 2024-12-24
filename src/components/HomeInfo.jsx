import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'


const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt="arrow-icon" className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hello, I am <span className='font-semibold'>Feihuan</span> 👋
            <br />
            A Software Engineer from Nevada.
        </h1>
        ),
    2: (
        <InfoBox 
          text='Worked on many projects and picked up many skills along the way.'  
          link='/about'
          btnText='About me'
        />
        ),
    3: (
        <InfoBox 
        text='Most my projects is open source with live demo.'  
        link='/projects'
        btnText='My projects'
      />
        ),
    4: (
        <InfoBox 
        text="Need a project done or looking for a dev? I'm just a few keystrokes away."
        link='/contact'
        btnText='Contact me'
      />
        ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
