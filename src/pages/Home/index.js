import React from 'react';
import "./Home.css";
import tooth from '../../images/tooth.jpg';

const Home = () => {
  return (
    <div>

      <div className="background flex flex-row">
           <div className="header-design basis-1/2">
               <img src={tooth} alt="tooth" className="tooth" />
           </div>
           <div className="header-design basis-1/2">
              <p className="paragraph para1">Welcome to Dental Studio</p>
              <p className="paragraph para2">The Modern Dentistry Office for Your Entire Family</p>
              <p className="paragraph para3">Our ever growing patient base rates our dental studio very high. 
              To see for yourself, visit us and get a free consultation from one 
              of our highly trained dental specialists.</p>
                <div className="btn">
                  <button>Book now</button>
                  <button>learn more</button>
                </div>
           </div>
      </div>

    </div>
  )
}

export default Home