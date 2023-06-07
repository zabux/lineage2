import { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';

import { MouseContext } from './context/mouse-context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aos from 'aos';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import News from './components/News';
import React, { Component } from 'react';
import Requirement from './components/Requirement';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import './css/App.scss';

function App() {
  const { cursorChangeHandler } = useContext(MouseContext);
  useEffect(() => {
    Swal.fire({
      title: "Lineage II",
      text: "Coming soon.",
      icon: "info",
      confirmButtonText: "Ok!"
    })
  }, [])
  useEffect(() =>{
      Aos.init({
          duration: 2000,
          easing: 'ease-in-out-back'
      });
  }, []);

  return (
    <>
      /*<Cursor/>
      <div className="app" onClick={() => {
        cursorChangeHandler("expand")
        setTimeout(() =>{
          cursorChangeHandler("")
        }, 500)
      }}>*/
        <Router>
          <Header
            ata-aos="fade-left"
            data-aos-anchor="#trigger-right"/>
          <About data-aos="fade-right"/>
          <Switch>
          <Route path="/news">
          <News/>
          </Switch>
          </Route>
          <Features/>
          <Requirement/>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
