import React, { useEffect, useState } from 'react'
const SingleUser = () => {
    const [data,setData]= useState({})

    async function  fetchingData ()
    {
        try{
          let response = await fetch(`https://reqres.in/api/users/1${id}`)
          let data = await response.json();
          console.log(data)
        }
        catch(error){
            console.log(error);
            setData(data.data)
        }
    }
    useEffect(()=>{},[])
  return (
    <div>
        <img src= {data.avatar} alt=''></img>
        <p>{data.first_name}</p>
        <Link to="/users">
        <button>go back</button></Link>
    </div>
  )
}

export default SingleUser