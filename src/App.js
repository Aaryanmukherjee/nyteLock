import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react";
import {LogoSelection} from "./containers/logoSelection/LogoSelection"
import {LogoInformation} from "./containers/logoInformation/LogoInformation"
import { ParticleBackground } from './containers/particlesBackground/ParticlesBackground';

function App() {
  //Define states
  const [logo, setLogo] = useState("letter");
  const [logoList, setLogoList] = useState( 
    {"letter":true,
    "word":false,
    "pictorial":false,
    "abstract":false, 
    "mascot":false, 
    "combination":false}
  );
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })


  useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

    
    }
    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    
    }
    //test

  })

    

  

  return (
    <div className="logoDisplay">
      <LogoSelection  logo ={logo} logoList = {logoList} setLogo={setLogo} setLogoList={setLogoList} dimensions= {dimensions}/>
      <ParticleBackground logo={logo} dimensions = {dimensions}/>
      
    </div>
  );
}

export default App;
