import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
const Cart = () => {
  const select  = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const handleRemove = (productId) =>{
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart Items</h3>
    {select.length===0?(<div>Your Cart is Empty!</div>):( <div className='cartWrapper'>  
      {select.map((product)=>(
        <div key={product.id} className="cartCard">
          <img src={product.image} alt="image" />
          <h5>{product.title}</h5>
          <h5>{product.price}</h5>
          <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
        </div>
      ))}
      </div>)}
    </div>
  )
}

export default Cart