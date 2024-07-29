import { useState } from "react";
import './count.css';

export const Counter =()=> {

  let [Counter,setcounter] = useState(0)

  function Increment(){
     Counter=Counter+1
     setcounter(Counter)
     console.log(Counter)
  }
  function Decrement(){
    setcounter(Counter-1);
    if(Counter<1){
        setcounter(Counter)
        alert(`Can't updata`)
    }
  }

 return(
          
    <div style={{textAlign:'center',marginTop:'80px'}}>

    <h1 className="text-7xl text-center text-red-400">Counter</h1>
    <h2>{Counter}</h2>
    <button onClick={Increment}>Increment </button>
    <button onClick={Decrement}>Decrement</button>
    </div>
 );
}