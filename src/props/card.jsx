import './card.css';
export let Card=({username,link,cost})=>{

    return(
        <>
     
        <div className='main'>
       
        <img className="heelsimg" src={link} alt="high heels"/>

        <h3>{username}</h3>
        <p className='about'>Strappy Black High Heel for Women 5 Inch Block Heel Unique Design sandal</p>
        <h1 className='rupess'>&#8377; {cost}</h1>
        </div>
       
        </>
    );
}