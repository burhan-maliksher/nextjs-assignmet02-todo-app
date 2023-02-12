"use client"
import React, { useState } from 'react'

export default function Title() {
  const [newTitle,setnewTitle]=useState('Untitled');
  const [Add,setAdd]=useState('');

  const handleSubmit=(e:{ preventDefault: () => void; })=>{
    e.preventDefault();
    setnewTitle(Add);
    setAdd('');
  }

  const handleChange=(e:{ target: { value: React.SetStateAction<string>; }; })=>{
    setAdd(e.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={Add} onChange={handleChange} required/><br/>
        <button type="submit" style={{background:"red", padding:"0px 67px 0px 67px"}}>Save</button>
      </form><br/>
      <ul>
        <li style={{listStyle:"none", color:"white", }}>Todo List Title: {newTitle}</li>
      </ul>
    </>      
  );
}
