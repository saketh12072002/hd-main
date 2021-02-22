import React, { useEffect } from 'react';
// import Header from './components/Header/Header'
import './default.scss';
import {Route,Switch,Redirect} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Registration from './pages/Registration/Registration'
// import Footer from './components/Footer/Footer'
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import Login from './pages/Login/Login'
import {checkUserSession} from './redux/User/user.action'
import {useDispatch} from 'react-redux'
import Recovery from './pages/Recovery/Recovery'
import Dashboard from './pages/Dashboard/index'

import Admin from './pages/Admin/Admin'
import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth'
 
import AdminToolbar from './components/AdminToolbar/AdminToolbar'



const App = (props) => {

  const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(checkUserSession());
       
        
    },[]);

    
    return (
      <div className="App">
        <div className="main">
          <AdminToolbar />
          <Switch>
          <Route exact path="/" render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
          />
  
           <Route path="/registration" render={() =>(
            <MainLayout >
              <Registration />
            </MainLayout>
          )} />
  
          <Route path="/login"
           render={() => (  
            <MainLayout >
              <Login />
            </MainLayout>
          )} />

          <Route path="/recovery" render={()=>(
            <MainLayout>
                 <Recovery />
            </MainLayout>
          ) }/>

          <Route path="/dashboard" render={()=>(
           <WithAuth>
              <MainLayout>
                 <Dashboard />
            </MainLayout>
           </WithAuth>
           
          ) }/>

          <Route path="/admin" render={()=>(
            <WithAdminAuth >
                <MainLayout>
                  <Admin />
              </MainLayout>
            </WithAdminAuth>
              
            ) }/>
          </Switch>  
        </div>
      </div>
    ); 
  }
  

export default App;
