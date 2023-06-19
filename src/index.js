import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import Banner from './components/Banner';
import Profile from './components/Profile';
import Services from './components/Services';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CallBanner from './components/CallBanner';
import OurTeams from './components/OurTeams';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
// import Test from './components/Test2'
import { InitScripts } from './components/InitScripts';
import './index.css'
import './components/style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wow.js/css/libs/animate.css';
// carousel https://swiperjs.com


const root = ReactDOM.createRoot(document.getElementById('root'));
InitScripts();

root.render(

  <React.StrictMode>

    {/* <Test /> */}
    <TopBar />
    <NavBar />
    <Banner />
    <Profile />
    <Services />
    <Clients />
    <Portfolio />
    <Testimonials />
    <CallBanner />
    <OurTeams />
    <ContactUs />
    <Footer />

  </React.StrictMode>
);
