import './bg.css'
import { useState } from 'react';

export let BackgroundChanger=()=>{

    let [Color,SetColor] =useState("blue")
    return(
        
        <div className='container' style={{background:Color}}>
        <h1>Background Changer</h1>
        <div className='colordiv'>
        <button onClick={()=> SetColor('red')}>Red</button>
        <button onClick={()=> SetColor('blue')}>Blue</button>
        <button onClick={()=> SetColor('green')}>Green</button>
        <button onClick={()=> SetColor('pink')}>Pink</button>
        <button onClick={()=> SetColor('white')}>White</button>
        <button onClick={()=> SetColor('Orange')}>Orange</button>
        <button onClick={()=> SetColor('Yellow')}>Yellow</button>
        <button onClick={()=> SetColor('Violet')}>Violet</button>
        <button onClick={()=> SetColor('Silver')}>Silver</button>
        </div>
        


        </div>
    );
}