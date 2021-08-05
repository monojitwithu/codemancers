import React, { useEffect, useState } from "react"
import { getGifs } from '../helpers/GetGifs'

const GiphySearch=()=>{
    const [data,setData]=useState()
    const[input,setInput]=useState("")

    
    useEffect(()=>{
        getGifs(input)
        .then((rs)=>setData(rs))
    },[input])

    console.log(data)



    return(
        <div>
            <input placeholder="Seach Here" onChange={(e)=>setInput(e.target.value)} value={input}/>
            {data && data.map((x)=><img src={x.url}/>
            
        
            )}


        </div>
    )
}

export default GiphySearch;