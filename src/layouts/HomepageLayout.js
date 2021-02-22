import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Homepage from '../pages/Homepage/Homepage'

function HomepageLayout (props) {
  return (
    <div className="fullHeight">
      <Header {...props} />
      {props.children}
    </div>
  );
};

export default HomepageLayout;