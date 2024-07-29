import React, { useEffect, useState } from "react";
import CryptoList from "./CryptoList";
import Pagination from "./Pagination";

const AppMain=()=>{
    const [coinsData,setCoinsData] =useState([]);
    console.log(coinsData);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(4);
    
    useEffect(()=>{
        const fetchData =async()=>{
            try{
                const response=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
                const data = await response.json();
                setCoinsData(data);
            } catch(error){
                console.error('Error')
            }
        };
        fetchData();
     },[])

     const lastPostIndex = currentPage * postsPerPage;
     const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = coinsData.slice(firstPostIndex,lastPostIndex);
    
    return(
         <div className="app">
         <h1>Crypto galley</h1>
         {/* <CryptoList coinsData={coinsData}/> */}
         <CryptoList coinsData={currentPosts}/>
          <Pagination totalPosts={coinsData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>

         </div>
    )

}
export default AppMain;