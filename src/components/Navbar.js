import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const select = useSelector((state)=>state.cart)
  console.log();
  return (
    <div style={{display:"flex", alignItems:"center",justifyContent:"space-between" }}> 
        <span className='logo'>REDUX</span>
        <div>
            <Link className='navLink' to={'/'}>Home</Link>
            <Link className='navLink' to={'/cart'}>Cart</Link>
        </div>
        <span className='cartCount'>Cart Item: {select.length}</span>
    </div>
  )
}

export default Navbar   