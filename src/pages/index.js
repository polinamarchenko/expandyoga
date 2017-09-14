import React from 'react';
import Link from 'gatsby-link';
import logo from './expandyoga.png';

const IndexPage = () => (
  <div className="header">
    <div>
      <img className="logoHeader" src={logo} alt="ExpandYogaLogo" />
      <h1>SUSPENTION FITNESS BOUTIQUE STUDIO</h1>
      <div className="CTA">
        <a
          className="primaryButton"
          href="https://clients.mindbodyonline.com/classic/ws?studioid=500720&stype=-7&sView=week&sLoc=0&date=09/13/17&sSU=true"
          target="blank"
        >
          RESERVE A CLASS
        </a>
      </div>
      <div>
        <h3>482 Potrero Ave</h3>
        <h3>San Francisco 94110</h3>
      </div>
    </div>
    <div className="offer">NEW STUDENT SPECIAL: FIRST CLASS $10</div>
  </div>
);

export default IndexPage;
