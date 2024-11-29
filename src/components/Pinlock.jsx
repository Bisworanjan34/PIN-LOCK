import React, { useState } from 'react'

const Pinlock = () => {
  let [input,setinput]=useState('')
  let [lock,setlock]=useState('')
  let [color,setcolor]=useState('')
  let handleinput=(e)=>{
    setinput(input+e.target.value)
  }

  let unlockfun=()=>{
    if(input && input === '12369'){
        setlock('UNLOCK-PIN')
        setcolor('lightgreen')
    }
    else if (!input){
      setlock(' FIRST TYPE YOUR PIN')
      setcolor('orange')
    }
    else{
      setlock("WRONG-PIN-TRY-AGAIN")
      setcolor('red')
    }
  }
  return (
    <div>
      <h1 className='font-bold text-center text-xl text-orange-300'>PIN-LOCK</h1>

      <div className="lock h-[300px] w-[400px] shadow-xl shadow-orange-500 m-auto mt-3">
        <input type="text" value={input} className='text-center pe-2 w-full h-[53px] text-2xl font-bold ' placeholder='enter your pin' disabled />
        <button onClick={handleinput} value={1}>1</button>
        <button onClick={handleinput} value={2}>2</button>
        <button onClick={handleinput} value={3}>3</button>
        <button onClick={handleinput} value={4}>4</button>
        <button onClick={handleinput} value={5}>5</button>
        <button onClick={handleinput} value={6}>6</button>
        <button onClick={handleinput} value={7}>7</button>
        <button onClick={handleinput} value={8}>8</button>
        <button onClick={handleinput} value={9}>9</button>
        <button onClick={handleinput} value={0}>0</button>
        <button onClick={()=>setinput('')} className=''>Reset</button>
        <button onClick={unlockfun} className=''>unlock</button>
      

        <p className='mt-7 text-xl font-bold text-center'style={{color:color}}>{lock}</p>
        <p className='tex-center text-orange-600'>hint ? 12369</p>

         
      </div>

    </div>
  )
}

export default Pinlock
