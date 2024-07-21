"use client"
import React, { useState } from 'react';

const page = () => {
  const [title , settitle]=useState("")
  const [desc , setdesc]=useState("")
  const [task , settask]=useState([])

  const submit =(e)=>{
    e.preventDefault()
    settask([...task,{title,desc}])
    settitle("")
    setdesc("")
  }
  let renderTask =<h2>No task </h2>
  renderTask = task.map((t,i)=>{
    return <div>
      <h1>{t.title}</h1>
      <h2>{t.desc}</h2>
    </div>

  })
  return ( 
    <>
    <div className='bg-black text-white m-3vw text-6xl p-5 font-bold text-center'>
      omkar's todo list
    </div>
    <form onSubmit={submit}>
      <input type="text" className='border-black text-2xl border-2 m-5 px-4 py-2'
      placeholder='Enter task here'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input type="text" className='border-black text-2xl border-2 m-5 px-4 py-2'
      placeholder='Enter description here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className='border-2 border-black bg-black
      text-white m-2 px-4 py-2 text-2xl font-bold rounded'>Add task</button>
     
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
   );
}
 
export default page;