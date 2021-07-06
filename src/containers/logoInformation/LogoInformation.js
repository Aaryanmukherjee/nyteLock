import React, {useState,useEffect} from 'react';
import { LogoExamples } from '../../components/logoExamples/LogoExamples';
import { LogoDescription } from '../../components/logoDescription/LogoDescription';
import { ParticleBackground } from '../particlesBackground/ParticlesBackground';



export const LogoInformation = ({logo}) =>{
    const [cName, setCName] = useState("logo-information");
    const [lagLogo, setLagLogo] = useState(logo);


    useEffect(() => {
        setCName("logo-information hide");
        setTimeout(()=>{
            setLagLogo(logo);
        },10);
        
        const timeOut = setTimeout(()=>{
            setCName("logo-information transition");
        },100);

        // return(clearTimeout(timeOut));
    }, [logo])

    return(


        <div className = {cName}>
            

            
            <LogoDescription logo={lagLogo} />
            <LogoExamples logo={lagLogo}/>

            
            
            
        </div>
    )

}