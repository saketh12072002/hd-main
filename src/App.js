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
import DashboardLayout from "./layouts/DashboardLayout"
import AdminLayout from "./layouts/AdminLayout"
import Search from '../src/pages/Search/Search'
import Cart from './pages/Cart/Cart'
import Wishlist from './pages/Wishlist/Wishlist'

import Admin from './pages/Admin/Admin'
import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth'
 
import AdminToolbar from './components/AdminToolbar/AdminToolbar'
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Header from './components/Header/Header'
import Aboutus from './pages/aboutus/Aboutus';
import Collabration from './components/Collabration/Collabration';
import Appointment from './components/Appointment/Appointment'
import Footer from './components/Footer/Footer';
import Dropdesign from './components/dropdesign/Dropdesign';
import DesignersAdmin from './pages/DesignersAdmin/Designersadmin'
import Desingner from './pages/Designer/Desingner';
import Thankyou from './pages/Thankyou/Thankyou';




const App = (props) => {

  const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(checkUserSession());
       
        
    },[]);

    
    return (
      <div className="App">
        <div className="main">
          {/* <AdminToolbar /> */}
          <Switch>
          <Route exact path="/" render={() => (
           
              <Homepage />
          
          )}
          />
  
           <Route path="/registration" render={() =>(
          
              <Registration />
            
          )} />
          <Route path="/thankyou" render={() =>(
          
          <Thankyou />
        
      )} />


            <Route exact path="/search" render={() =>(
            <MainLayout >
              <Search />
            </MainLayout>
             )} /> 

            <Route  path="/aboutus" render={() =>(
            <MainLayout >
              <Aboutus />
            </MainLayout>
             )} />

             <Route  path="/appointment" render={() =>(
            <MainLayout >
              <Appointment />
              <Footer />
            </MainLayout>
             )} />

          <Route  path="/dropdesign" render={() =>(
            <MainLayout >
              <Dropdesign />
              <Footer />
            </MainLayout>
             )} />

            <Route  path="/collabration" render={() =>(
            <MainLayout >
              <Collabration />
              <Footer />
            </MainLayout>
             )} />
             <Route exact path="/search/:filterType" render={() =>(
            <MainLayout >
              <Search />
            </MainLayout>
             )} /> 

          
             <Route path="/search/size/:filterSize" render={() =>(
            <MainLayout >
              <Search />
            </MainLayout>
             )} /> 
             <Route path="/search/brand/:filterBrand" render={() =>(
            <MainLayout >
              <Search />
            </MainLayout>
             )} /> 
             <Route path="/search/dresstype/:filterDresstype" render={() =>(
            <MainLayout >
              <Search />
            </MainLayout>
             )} /> 

            <Route path="/product/:productID" render={() =>(
            <MainLayout >
              <ProductDetails />
            </MainLayout>
             )} />  

            <Route path="/designer/:filterBrand" render={() =>(
            <MainLayout >
              <Desingner />
            </MainLayout>
             )} /> 

            <Route path="/cart" render={() =>(
            <MainLayout >
              <Cart />
            </MainLayout>
             )} /> 

            <Route path="/wishlist" render={() =>(
            <MainLayout >
              <Wishlist />
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
            <WithAdminAuth >
                <DashboardLayout>
                  <Dashboard />
              </DashboardLayout>
            </WithAdminAuth>
              
            ) }/>

          <Route exact path="/admin" render={()=>(
            <WithAdminAuth >
                <AdminLayout>
                  <Admin />
                </AdminLayout>
            </WithAdminAuth>
              
            ) }/>

          <Route path="/admin/designers" render={()=>(
            <WithAdminAuth >
                <AdminLayout>
                  <DesignersAdmin />
                </AdminLayout>
            </WithAdminAuth>
              
            ) }/>
            <Route path="/images" render={()=>(
            <WithAdminAuth >
                <AdminLayout>
                  <h1>Images</h1>
                  <h1>Images</h1>
                  <h1>Images</h1><h1>Images</h1>
                  <h1>Images</h1>
                  <h1>Images</h1>
                  <h1>Images</h1>

                </AdminLayout>
            </WithAdminAuth>
              
            ) }/>

          </Switch>  
        </div>
      </div>
    ); 
  }
  

export default App;
