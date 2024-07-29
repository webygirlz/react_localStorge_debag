import React, { useEffect, useState } from 'react'

function DataLocalStroge() {
    const [title,setTitle]=useState('priya');
    const [content,setContent] = useState('');
    const [saveData,setSaveData] = useState('');

    const handleSubmit=(e)=>{
       e.preventDefault();
       const newData ={
        title,
        content
       }
       setSaveData(newData);
       setTitle('');
       setContent('');
       console.log(newData)
    }
    // console.log(title);
    // console.log(content);

    useEffect(()=>{
       const data= window.localStorage.getItem('title');
       if(data!==null) setTitle(JSON.parse(data));
    },[])

    useEffect(()=>{
      window.localStorage.setItem('title',JSON.stringify(title));
    },[title])
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
       type="text" 
       placeholder='title'
      value={title}
      onChange={(e)=> setTitle(e.target.value)}
      />
      
      <br/><br/> 
      <textarea
      value={content}
      placeholder='about'
      onChange={(e)=>setContent(e.target.value)}
      >
      </textarea>
      <button type='submit'>Add</button>
    </form>

    {saveData &&(
            <div>
            <h2>{saveData.title}</h2>
            <h2>{saveData.content}</h2>
            </div>

        )
    }
    </>

)}

export default DataLocalStroge;
