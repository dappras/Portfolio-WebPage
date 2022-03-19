import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { BiPhoneCall } from "react-icons/bi";
import coverPict from './images/Cover.png';
import facebookLogo from './images/facebook.png';
import awsLogo from './images/aws.png';
import gojekLogo from './images/gojek.png';
import ui1 from './images/ui1.png';
import ui2 from './images/ui2.png';
import ui3 from './images/ui3.png';
import ui4 from './images/ui4.jpg';
import ui5 from './images/ui5.png';
import ui6 from './images/ui6.png';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav">
          <div className="left">
            <Link to='#'>
              <p>James</p>
            </Link>
          </div>
          <div className="middle">
            <Link to='#cover' smooth >
              <p>Me</p>
            </Link>
            <Link to='#experience' smooth >
              <p>Experience</p>
            </Link>
            <Link to='#project' smooth >
              <p>Project</p>
            </Link>
          </div>
          <div className="right">
            <BiPhoneCall size={20} />
            <p>+62 81290647459</p>
          </div>
        </div>  

        <div className="cover" id='cover'>
          <img src={coverPict} />  
        </div> 

        <div className="experience" id='experience'>
          <div className="title">
            <p>My Work Experience</p>
          </div>
          <div className="list">
            {dataExperience.map((item) => (
              <div className='card'>
                <div className='fill'>
                  <img src={item.logo} width={70} height={70} className='image' />
                </div>
                <div className="desc">
                  <div className='section1'>
                    <p>{item.job}</p>
                  </div>
                  <div className="section2">
                    <p className='nameCompany'>{item.company}</p>
                    <p className='bookmark'> - </p>
                    <p>{item.contract}</p>
                  </div>
                  <div className="section3">
                    <p>{item.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>  

        <div className="project" id='project'>  
          <p className='title'>Project</p>

          <div className="list-project">
            {dataProject.map((item) => (
              <div className="card">
                <div className='fill'>
                  <img src={item.pict} width={309} height={170} className='image' />
                </div>
                <div className="desc">
                  <div className="nameapp">
                    <p style={{fontSize: 16}}>{item.title}</p>
                  </div>
                  <div className="created">
                    <p style={{fontSize: 12}}>{item.created_at}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> 
      </div>
    </BrowserRouter>
  );
}

const dataExperience = [
  {
    id: 1,
    logo: facebookLogo,
    job: 'Software Engineer',
    contract: 'Fulltime',
    company: 'Facebook',
    period: 'Feb 2021 - Present'
  },
  {
    id: 2,
    logo: awsLogo,
    job: 'Software Engineer',
    company: 'AWS',
    contract: 'Fulltime',
    period: 'Feb 2021 - Present'
  },
  {
    id: 3,
    logo: gojekLogo,
    job: 'Software Engineer',
    company: 'Gojek',
    contract: 'Intern',
    period: 'Feb 2021 - Present'
  },
]

const dataProject = [
  {
    id: 1,
    pict: ui1,
    title: 'Binary Option App',
    created_at: 'Created at 25 February 2019'
  },

  {
    id: 2,
    pict: ui2,
    title: 'Portal Job App',
    created_at: 'Created at 17 August 2019'
  },

  {
    id: 3,
    pict: ui3,
    title: 'Booking App',
    created_at: 'Created at 25 March 2020'
  },

  {
    id: 4,
    pict: ui4,
    title: 'Online Learning App',
    created_at: 'Created at 12 June 2019'
  },

  {
    id: 5,
    pict: ui5,
    title: 'Shopping App',
    created_at: 'Created at 5 January 2021'
  },

  {
    id: 6,
    pict: ui6,
    title: 'Quiz App',
    created_at: 'Created at 12 September 2019'
  },
]

export default App;
