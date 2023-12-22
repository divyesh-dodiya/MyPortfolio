import React from 'react'
import './works.css';
// import Project1 from '../../assets/Prac.jpg';
import Links_1 from '../../assets/Links_1.png'
import Pro_1 from '../../assets/safar_screen.png'
import Pro_2 from '../../assets/Blogs.jpg'
import Pro_3 from '../../assets/face.jpg'
import Pro_4 from '../../assets/Animation.jpg'
import Pro_5 from '../../assets/Routing.jpg'
import Pro_6 from '../../assets/ECC.png'

// import { Link } from 'react-scroll';
function Works() {
  return (
    <>
        <div id='portfolio'>
            <div className='sub-title'>My Projects</div>
            <div className='work-list'>
                <div className='work'>
                    <img src={Pro_1} alt='Project_1'/>
                    <div className='layer'>
                        <h3>Safar</h3>
                        <p>Travel Agency website</p>
                        <a href='https://gosafar.netlify.app/' target='_blank'><img src={Links_1}/></a>
  
                    </div>
                </div>
                <div className='work'>
                    <img src={Pro_2} alt='Project_2'/>
                    <div className='layer'>
                        <h3>Blogs</h3>
                        <p>Blogging Website</p>
                        <a href='https://github.com/divyesh-dodiya/Blog-Application' target='_blank'><img src={Links_1}/></a>
                    </div>
                </div>
                <div className='work'>
                    <img src={Pro_3} alt='Project_3x'/>
                    <div className='layer'>
                        <h3>Python</h3>
                        <p>Face Recognition Attendance System</p>
                        <a href='https://github.com/divyesh-dodiya/Face-Recognition-Attandance-system' target='_blank'><img src={Links_1}/></a>
                    </div>
                </div>
                <div className='work'>
                    <img src={Pro_4} alt='Project_1'/>
                    <div className='layer'>
                        <h3>Anime.css</h3>
                        <p>Animation Website</p>
                        <a href='https://anime-css.netlify.app/' target='_blank'><img src={Links_1}/></a>
                    </div>
                </div>
                <div className='work'>
                    <img src={Pro_5} alt='Project_1'/>
                    <div className='layer'>
                        <h3>ReactJS</h3>
                        <p>Routing Example Website</p>
                        <a href='https://gocreative.netlify.app/'><img src={Links_1}/></a>
                    </div>
                </div>
                <div className='work'>
                    <img src={Pro_6} alt='Project_1'/>
                    <div className='layer'>
                        <h3> ReactJS </h3>
                        <p>E-Commerce Clone</p>
                        <a href='https://gowithtrendly.netlify.app/'><img src={Links_1}/></a>
                    </div>
                </div>
                
            </div>
            <a href='#'className='moreBtn'>See more</a>

        </div>
    </>
  )
}

export default Works;