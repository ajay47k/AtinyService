import React from 'react'
import { useState } from 'react'
import {TextField, Button} from '@mui/material'
import {LoadingButton} from '@mui/lab';
import QRCodeButton from './Button'
import axios from "axios"
function Maincontainer() {
const [long,setLong]=useState("")
const [short, setShort] =useState("")
const [loading,setLoading]= useState(false)
const texthandler= (e)=>{
    setLong(e.target.value)
    console.log(long)
}
const shorten = async ()=>{
    setLoading(true)
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
  
        const response = await axios.post(
          "http://localhost:3070/url/",
          {"url":long},
          config
        );
        console.log(response);
        setShort(response.data.id)
        setLoading(false);
      } catch (error) {
        console.log(error)
    }}
  return (
    <div className='h-[100%] w-[100%] flex flex-col items-center justify-center '>
        <div className='mb-5'>
           <p className='text-5xl' >Shorten Your looooong linkssss::!!</p> 
        </div>
        <div className='w-[500px] flex flex-wrap mb-5'><TextField id="standard-basic" label="Standard" variant="standard" size="large" className='w-[500px]' onChange={texthandler}/></div>
        {loading?<div>
            <LoadingButton loading variant="outlined">
  Submit
</LoadingButton>
        </div>:<div><Button variant="text" onClick={shorten}>Shorten</Button></div>}
        {short && (
                <div>
                    <p>Shortened URL: <a href={`http://localhost:3070/url/${short}`}>http://localhost:3070/url/{short}</a></p>
                </div>
            )}
    </div>
                   



  )
}

export default Maincontainer