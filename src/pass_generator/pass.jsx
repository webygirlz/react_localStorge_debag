import { useState,useCallback, useEffect ,useRef} from "react";
import './pass.css';

export let PasswordGeneratorFunction=()=>{
    
    let [Length,setLength] =useState(8);
    let [Numberallow,setNumberallow] =useState(false);
    let [Charallow,setCharallow] = useState(false);
    let [Password,setPassword] =useState("");

    const passwordref =useRef(null); // useref hook


    const copypassword =useCallback(()=>{
        passwordref.current?.select()
        window.navigator.clipboard.writeText(Password)
    },[Password])

     const passGenerator = useCallback(() => {
        let pass = '';
        let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (Numberallow) string += "012345679";
        if (Charallow) string += "~`! @#$%^&*()-_+={}[]|;:<>,./?";

        for (let i = 1; i <= Length; i++) {
            let char = Math.floor(Math.random() * string.length);
            pass += string.charAt(char);
            console.log("char is", pass);
        }
        setPassword(pass);
    }, [Length, Numberallow, Charallow, setPassword]);




    useEffect(()=>{
        passGenerator();
    },[Length,Numberallow,Charallow]);

    
    return( 
     <>
     <div className='contain'>
        <h1>Password Generator</h1>

     <div className="inputtext">
        <input type="text"
       value={Password}
        className=""
        placeholder="password"
        readOnly
        />
        <button onClick={copypassword}>copy</button>
     </div>

     <div className="range">
        <input type="range" min={6} max={40} value={Length} onChange={(e)=>{setLength(e.target.value)}} ref={passwordref}/>
        <label>Length {Length}</label>
     </div>

     <div className="num">
        <input type="checkbox" defaultChecked={Numberallow}
        id="numberInput" onChange={()=>{
            setNumberallow((prev)=>!prev)
        }}/>
        <label htmlFor="numberInput">Number</label>

     </div>

     <div className="char">
        <input type="checkbox" defaultChecked={Numberallow}
        id="CharacterInput" onChange={()=>{
            setCharallow((prev)=>!prev)
        }}/>
        <label htmlFor="numberInput">Character</label>
        
     </div>


     </div>
     </>
    );
}