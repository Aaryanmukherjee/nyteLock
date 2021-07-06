import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../../config/particlesConfig";
import { LogoInformation } from "../logoInformation/LogoInformation";

export const ParticleBackground = ({logo}) =>{
    return(
        <div className = "particles-background">
            <LogoInformation logo={logo}  />
            <Particles params={particlesConfig}/>
            

        </div>
           
        
        
    )
}