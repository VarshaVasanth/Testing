import React,{useState} from 'react'

const Functionbasedcounter = () => {
    let [count,setCount]=useState(0);
    let Increment=()=>
    {
        setCount(count+1);
    }
    let Decrement=()=>
    {
        setCount(count-1);
    }
    let reset=()=>
    {
        setCount(0);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onC></button>
        </div>
    )
}

export default Functionbasedcounter
