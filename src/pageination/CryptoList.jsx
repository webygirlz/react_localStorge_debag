import React from 'react'
import CryptoCard from './CryptoCard'
function CryptoList({coinsData}) {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",padding:"20px",margin:"20px",alignItems:"center",flexWrap:"wrap"}}>
      {coinsData.map((coin,index)=>{
        return (
            <CryptoCard
            key={index}
            name={coin.name}
            price={coin.current_price}
            />
        );
      })}
    </div>
  )
}

export default CryptoList
