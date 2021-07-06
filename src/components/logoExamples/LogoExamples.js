import React, {useEffect} from 'react';

import hbo from '../../resources/letter/hbo.png'
import ibm from '../../resources/letter/ibm.png'
import nasa from '../../resources/letter/nasa.png'

import visa from '../../resources/word/visa.png'
import coke from '../../resources/word/coke.png'
import google from '../../resources/word/google.png'

import apple from '../../resources/pictorial/apple.png'
import twitter from '../../resources/pictorial/twitter.png'
import target from '../../resources/pictorial/target.png'

import bp from '../../resources/abstract/bp.png'
import pepsi from '../../resources/abstract/pepsi.png'
import adidas from '../../resources/abstract/adidas.png'

import kool_aid from '../../resources/mascot/kool_aid.png'
import kfc from '../../resources/mascot/kfc.png'
import peanut from '../../resources/mascot/peanut.png'

import doritos from '../../resources/combination/doritos.png'
import burger from '../../resources/combination/burger.png'
import lacoste from '../../resources/combination/lacoste.png'




export const LogoExamples = ({logo}) =>{
    // console.log(hbo);

    // const setHeight = ({target}) =>{
    //     const width = target.style.width;
    //     console.log(width);
    // }

    // useEffect(()=>{
    //     setHei
    // })

    const images ={"letter":[hbo,ibm,nasa],
    "word":[visa,coke,google],
    "pictorial":[apple,twitter,target],
    "abstract":[bp,pepsi,adidas], 
    "mascot":[kool_aid,kfc,peanut], 
    "combination":[doritos,burger,lacoste]
    };
    
    return(
        <div className='logo-examples'>

            {images[logo].map(element => 
               (
                <div className='img-container'>
                    <img src={element}  />
                </div>
              )  
            )}
            
            
        </div>
    )

}