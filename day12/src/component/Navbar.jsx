import React from 'react'
import {NavLink} from 'react-router-dom'
const links  =  [
    {
        path : "/",text :"Home"
    },
    {
        path: "/about",text : "About"
    },
    {
        path : "/user",text : "User"
    },
    {
        path : "/cart" ,text : "Cart"
    }
]       

const defaultStyle  = {
    color:"black",
    TextDecoration : "none",
}
const activeStyle  = {
    color : "green",
    TextDecoration : "none",
}
                                                
                                                     
const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"10px"}}>
        { links.map((link)=>{
        return  (<NavLink to={link.path} key= {link.path} style={({isActive})=>{
        return isActive?  activeStyle :defaultStyle;
        }}>
            {link.text} 
          </NavLink>);
           })}
    </div>
  )
}

export default Navbar