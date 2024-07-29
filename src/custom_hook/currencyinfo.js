import raect, {useState,useEffect} from "react";

function useCurrentyinfo(){

   let [data,setData] =useState({});
   
   useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
  
    .then((res)=> res.json())
    .then((res)=> setData(res[currency]));
   },[currency]);
   console.log(data)
   return data
}
console.log(data);
export default useCurrentyinfo;


// How to make component reuseable in react

