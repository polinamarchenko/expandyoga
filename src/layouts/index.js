import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';
// const Nav = () => (
//   <nav>
//     <ul>
//       <li>
//         <Link to="/about">ABOUT</Link>
//       </li>
//       <li>
//         <Link to="/classes">CLASSES</Link>
//       </li>
//       <li>
//         <Link to="/prices">PRICES</Link>
//       </li>
//       <li>
//         <Link to="/contact">CONTACT</Link>
//       </li>
//     </ul>
//   </nav>
// );
// const Header = () => (
//   // <div className="header">
//   //   <div>
//   //     {/* <ReactPlayer
//   //       url="https://www.youtube.com/watch?v=nNeSFC08ClA&feature=youtu.be"
//   //       playing
//   //       loop
//   //       muted
//   //       width="100%"
//   //     /> */}
//   //     <img className="logoHeader" src={logo} alt="ExpandYogaLogo" />
//   //
//   //   </div>
//   // </div>
// );

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Expand.Yoga"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    {/* <Nav /> */}
    <div
      style={{
        margin: '0 auto',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
