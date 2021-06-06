import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Homepage from '../pages/Homepage/Homepage'
import Aboutus from '../pages/aboutus/Aboutus';

function HomepageLayout (props) {
  return (
    <div className="fullHeight">
      <Header className="headerp" {...props} />
      {props.children}
      
      
    </div>
  );
};

export default HomepageLayout;