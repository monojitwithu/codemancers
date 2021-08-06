import React, { useEffect, useState } from "react"
import { getGifs } from '../helpers/GetGifs'

const GiphySearch=({ gifClickHandler})=>{
    const [data,setData]=useState()
    const[input,setInput]=useState("")
    

    
    useEffect(()=>{
        getGifs(input)
        .then((rs)=>setData(rs))
    },[input.length>3])

    console.log(data)



    return(
        <div className="gif-search-Container">
            <input placeholder="Seach Here" onChange={(e)=>setInput(e.target.value)} value={input}/>
            <div className="imgs">
            {data && data.map((x)=><img style={{width:"145px",padding:"3px"}} src={x.url}  onClick={()=> gifClickHandler(x.url)}/>
            
        
            )}
                
            </div>
            
            


        </div>
    )
}

export default GiphySearch;