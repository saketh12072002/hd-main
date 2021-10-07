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
import Fullloader from './components/Fullloader/Fullloader'
import Blog from './pages/Blog/Blog';
import Blogsdata from './pages/Blogsdata/Blogsdata';
import Blogpage from './pages/Blog/Blogpage/Blogpage';
import Anvshn from './pages/ANVSHN/Anvshn';
import Cancelpolicy from './components/Footer/Cancelpolicy/Cancelpolicy';
import Faqs from './components/Footer/Faqs/Faqs';
import Shippingdel from './components/Footer/Shippingdel/Shippingdel'
import FooterLayout from './layouts/FooterLayout';
import Paymentoptions from './components/Footer/Paymentoptions/Paymentoptions';
import Returnex from './components/Footer/Returnex/Returnex';
import Wallet from './components/Footer/Wallet/Wallet';
import Sizechart from './components/Footer/Sizechart/Sizechart';
import Terms from './components/Footer/Terms/Terms';
import ReactGa from 'react-ga';
import Payment from './pages/Payment/Payment';
import Designerdetails from './pages/Designerdetails/Designerdetails';
import DesignersData from './pages/DesignersData/DesignersData';


const App = (props) => {

  const dispatch = useDispatch();

    useEffect(()=>{
      ReactGa.initialize('UA-200005619-1')
      ReactGa.pageview(window.location.pathname + window.location.search)
    },[])


    useEffect(()=>{
        dispatch(checkUserSession());
    },[]);

    

    
    return (
      <div className="App">
        <div className="main">
          <Switch>
          
          <Route exact path="/" render={() => (
           
              <Homepage />
              
          
          )}
          />
  
           <Route path="/signup" render={() =>(
          
              <Registration />
            
          )} />
          
          <Route path="/thankyou" render={() =>(
          
          <Thankyou />
         
          
      )} />
      <Route exact path="/blogs" render={() =>(
          
          <MainLayout >
          <Blog />
        </MainLayout>
         
          
      )} />



      {/* footer */}
      <Route  path="/cancelpolicy" render={() =>(
          
          <FooterLayout >
           <Cancelpolicy />
        </FooterLayout>
         
          
      )} />
      <Route  path="/faqs" render={() =>(
          
          <FooterLayout >
          <Faqs />
        </FooterLayout>
         
          
      )} />
      <Route exact path="/shipping" render={() =>(
          
          <FooterLayout >
          <Shippingdel />
        </FooterLayout>
         
          
      )} />

      <Route exact path="/paymentoptions" render={() =>(
          
          <FooterLayout >
          <Paymentoptions />
        </FooterLayout>
         
          
      )} />

      <Route exact path="/returns" render={() =>(
          
          <FooterLayout >
          <Returnex />
        </FooterLayout>
         
          
      )} />

      <Route exact path="/wallet" render={() =>(
          
          <FooterLayout >
          <Wallet />
        </FooterLayout>
         
          
      )} />
      <Route exact path="/sizechart" render={() =>(
          
          <FooterLayout >
          <Sizechart />
        </FooterLayout>
         
          
      )} />

      <Route exact path="/termsandconditions" render={() =>(
          
          <FooterLayout >
          <Terms />
        </FooterLayout>
         
          
      )} />

      {/* endfooter */}
     
      <Route path="/anvshn" render={() =>(
          
          <MainLayout >
          <Anvshn />
        </MainLayout>
   
      )} />
      <Route path="/blogs/:blogID" render={() =>(
            <MainLayout >
              <Blogpage />
            </MainLayout>
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

            <Route  path="/footersection" render={() =>(
              <FooterLayout >
                <Footer />
              </FooterLayout>
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
            
              <Cart />
           
             )} /> 

             

            <Route path="/payment" render={() =>(
              <WithAuth>
               
                  <Payment />
               
              </WithAuth>
           
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

        <Route path="/designerdetails" render={()=>(
            <MainLayout>
                <Designerdetails />
            </MainLayout>
          ) }/>


          <Route path="/dashboard" render={()=>(
            <WithAuth >
                <DashboardLayout>
                  <Dashboard />
              </DashboardLayout>
            </WithAuth>
              
            ) }/>

          <Route exact path="/admin" render={()=>(
            <WithAdminAuth >
                <AdminLayout>
                  <Admin />
                </AdminLayout>
            </WithAdminAuth>
              
            ) }/>

          {/* <Route path="/admin/designers" render={()=>(
            <WithAdminAuth >
                <AdminLayout>
                  <DesignersAdmin />
                </AdminLayout>
            </WithAdminAuth>
              
            ) }/> */}
            <Route path="/admin/blogs" render={()=>(
            <WithAdminAuth >
                <AdminLayout>
                <Blogsdata />

                </AdminLayout>
            </WithAdminAuth>
              
            ) }/>

          <Route path="/admin/designers" render={()=>(
            <WithAdminAuth >
                <AdminLayout>
                <DesignersData />

                </AdminLayout>
            </WithAdminAuth>
              
            ) }/>

          </Switch>  
        </div>
      </div>
    ); 
  }
  

export default App;