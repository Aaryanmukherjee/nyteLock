import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faCircle } from '@fortawesome/free-solid-svg-icons'
import {LogoStyle} from '../../components/logoStyle/LogoStyle'




export const LogoSelection = ({logo,logoList,setLogo,setLogoList}) =>{

    const styles=["letter","word","pictorial","abstract", "mascot", "combination"];
    const handleClick =({target})=>{
        
        if(target.tagName==="path"){
            target=target.parentNode.parentNode;
        }else if(target.tagName==="H3" || target.tagName==="svg"){
            target=target.parentNode;
        }
        console.log(target);
        console.log(target.getAttribute("value"))

        
        setLogo(target.getAttribute("value"));
        
        


    }
    useEffect(()=>{
        let templogoList = {};
        Object.keys(logoList).forEach((style)=>{
            
            if(style===logo){
                templogoList[style] = true;
            }else{
                templogoList[style] = false;
            }
            
        })
        
        setLogoList(templogoList)
    },[logo])


    
    return(
        <div className="logo-selection">
            <div className="logo-selection-info">
                <div className="header">
                    <div className="bullet">
                        <FontAwesomeIcon size="xs" icon={faCircle} />
                        <h4>How do I know which logo style is right for me?</h4>
                    </div>
                    <h2>Different Types of Logo Styles</h2>
                </div>

                <button className="contact">
                    <h4>Contact Us</h4>
                    <FontAwesomeIcon icon={faArrowRight} />

                </button>
                
                
            </div>
             
            <div className="logo-nav">
                {styles.map((logo)=>(
                    <LogoStyle value={logo} onClick={handleClick} selected={logoList[logo]}  />

                ))}
                
            </div>

        </div>
        
    );

}