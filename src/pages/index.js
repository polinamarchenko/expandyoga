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
          href="https://clients.mindbodyonline.com/ASP/main_shop.asp?studioid=500720&tg=&vt=&lvl=&stype=40&view=&trn=0&page=&catid=&prodid=100&date=9%2f3%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1"
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
