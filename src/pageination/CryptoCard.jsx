import React from 'react'

function CryptoCard({image,name,price}) {
  return (
    <div>
      <div className='card_img'>
        <img src={image} alt="" />
      </div>
      <div className="card_info">
        <h2>{name}</h2>
        <h3>${price.toLocaleString()}</h3>
      </div>
    </div>
  )
}

export default CryptoCard;
