import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './components/header';
import Menu from './components/menu';
import Footer from './components/footer';
import Container from './components/container';




//Toso lo que se toma en {} es catalogado com javascrip
function App() {
  return( 
  <>
  <Header/>
  <Menu/>
  <Footer/>
  <Container/>
  </>
)
       

}


export default App;
