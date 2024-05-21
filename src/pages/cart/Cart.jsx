import React from 'react'
import Empty from '../../components/empty/Empty'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCartQuantity, decrementCartQuantity, removeItemFromCart } from '../../context/cartSlice'

const Cart = () => {
  const carts = useSelector(s => s.cart.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log(carts);

  let totalPrice = carts?.reduce((sum,item) => sum + (item.price * item.quantity), 0)

  let cartItems = carts?.map(item => (
    <div key={item.id}>
      <img src={item.images[0]} width={150} alt="" />
      <p>{item.title}</p>
      <p>{item.price?.brm()} USD</p>
      <b>{(item.price * item.quantity)?.brm()}</b>
      <br />
      <button disabled={item.quantity <= 1} onClick={()=> dispatch(decrementCartQuantity(item))}>-</button>
      <span>{item.quantity}</span>
      <button onClick={()=> dispatch(incrementCartQuantity(item))}>+</button>
      <button onClick={()=> dispatch(removeItemFromCart(item))}>delete</button>
    </div>
  ))
  return (
    <div>
      {
        carts.length ? 
        <>
          <h2>Jami : {totalPrice?.brm()} USD</h2>
          <div className='container'>
            {cartItems}
            <button onClick={()=> navigate("/checkout")}>Check Out</button>
          </div>
        </>
        :
        <Empty text="Cart"/>
      }
    </div>
  )
}

export default Cart