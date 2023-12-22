import React from 'react';
import './skills.css';
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.png'
import javaScriptImg from '../../assets/javaScript.png'
import javaImg from '../../assets/java.png'
import nodeImg from '../../assets/node.png'
import sqlImg from '../../assets/sql.png'
import CImg from '../../assets/C.png'
import reactImg from '../../assets/Reactjs.png'

function Skills() {
  function openTab(tabname) {
    const tabLinks = document.querySelectorAll('.tab-links');
    const tabContents = document.querySelectorAll('.tab-contents');

    tabLinks.forEach(tabLink => tabLink.classList.remove('active-link'));
    tabContents.forEach(tabContent => tabContent.classList.remove('active-tab'));

    const clickedTab = document.querySelector(`.tab-links[data-tab='${tabname}']`);
    const correspondingContent = document.getElementById(tabname);

    if (clickedTab && correspondingContent) {
      clickedTab.classList.add('active-link');
      correspondingContent.classList.add('active-tab');
    }
  }

  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>
        Hey, I'm Divyesh Dodiya,a curious mind navigating the digital realm. Fueled by a passion for problem-solving and tech exploration, I'm on a journey to unravel the intricacies of the digital landscape. From coding adventures to unraveling the mysteries of systems, this space is a glimpse into my ongoing quest for knowledge and innovation. Join me as we delve into the exciting world where technology meets creativity, and every challenge is an opportunity to learn and grow. Welcome to my corner of the web! 🌐💡🚀
      </span>
      <div className='tab-titles'>
        <p className='tab-links active-link' onClick={() => openTab('skillBars')} data-tab='skillBars'>Skills</p>
        <p className='tab-links' onClick={() => openTab('experience')} data-tab='experience'>Experience</p>
        <p className='tab-links' onClick={() => openTab('education')} data-tab='education'>Education</p>
      </div>
      <div className='tab-contents active-tab' id='skillBars'>
     
        <div className='skillBar'>
            <img src={htmlImg} alt='html-Img' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>HTML</h2>
                <p>80%</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={cssImg} alt='css-Img' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>CSS</h2>
                <p>70%</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={javaScriptImg} alt='javaScript-Img' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>JavaScript</h2>
                <p>65%</p>
            </div>
        
        </div>
        <div className='skillBar'>
            <img src={reactImg} alt='react-Img' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Reactjs</h2>
                <p>70%</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={javaImg} alt='java-Img' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Core Java</h2>
                <p>50%<br/>(Learning phase)</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={nodeImg} alt='node-Img' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>NodeJS</h2>
                <p>50%<br/>(Learning phase)</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={sqlImg} alt='sql-Img' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>MySQL</h2>
                <p>50%</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={CImg} alt='C-Img' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>C Programming</h2>
                <p>50%</p>
            </div>
        </div>
        
      </div>

      <div className='tab-contents' id='experience'>
        <ul>
        <li><span>FrontEnd Web Developer Intern</span><br/><span>EXPOSYS DATA LABS</span><br/>Created a fully functional blogging website with HTML, CSS, and JavaScript for the frontend.Developed the backend using PHP and MySQL for efficient content management.</li>
        </ul>
      </div>
      <div className='tab-contents' id='education'>
        <ul>
        <li><span>(2017 - 2018)</span><br/>Secondary School,Nalanda VIdhyalaya - 82%</li>
        <li><span>(2018 - 2020)</span><br/>HIgh School,Nalanda VIdhyalaya - 73% (PCM)</li>
        <li><span>(Oct’20 - Present)</span><br/>Bachelor’s of Engineering in IT,Sarvajanik College of Engineering & Technology - CGPA: 8.39</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
