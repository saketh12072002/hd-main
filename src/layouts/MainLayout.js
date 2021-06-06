import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function MainLayout(props) {
    return (
        <div className="fullHeight">
      <Header {...props} />
      <div className="main">
        {props.children}
      </div>
     
      
    </div>
    )
}

export default MainLayout
