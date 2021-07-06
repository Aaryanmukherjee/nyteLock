import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faItalic, faLemon, faPuzzlePiece, faTheaterMasks} from '@fortawesome/free-solid-svg-icons'
import { faArtstation, faWeebly } from '@fortawesome/free-brands-svg-icons';


export const LogoStyle= ({onClick,value,selected}) =>{

    
    const icons= {
        "letter":[<FontAwesomeIcon icon={faItalic} size="2x" color="rgb(253, 202, 42)"/>,"Lettermark Logos"],
        "word":[<FontAwesomeIcon icon={faWeebly} size="2x" color="rgb(253, 202, 42)"/>, "Wordmark Logos"],
        "pictorial":[<FontAwesomeIcon icon={faLemon} size="2x" color="rgb(253, 202, 42)"/> ,"Pictorial Mark Logos"],
        "abstract":[<FontAwesomeIcon icon={faArtstation} size="2x" color="rgb(253, 202, 42)"/> ,"Abstract Mark Logos"],
        "mascot": [<FontAwesomeIcon icon={faTheaterMasks} size="2x" color="rgb(253, 202, 42)"/> ,"Mascot Logos"],
        "combination": [<FontAwesomeIcon icon={faPuzzlePiece} size="2x" color="rgb(253, 202, 42)"/> ,"Combination Logos"]
    };
    
    // const calculate = () =>{
    //     let width = parent.width;
    // }
    let className = "logo-style"
    if(selected){
        className = "logo-style active"
    }
    return(
        
        <div className={className} onClick={onClick} value={value}   >
            {icons[value][0]}
            <h3>{icons[value][1]}</h3>
        </div>
        
    )
}