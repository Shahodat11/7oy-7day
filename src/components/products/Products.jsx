import React from 'react'
import "./Products.css"
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../context/wishlistSlice';
import { addToCart } from "../../context/cartSlice"

// Trust but Verify
const Products = ({data, title}) => {
  let wishlist = useSelector(state => state.wishlist.value)

  const dispatch = useDispatch()

  let productItems = data?.map(el =>(
    <div key={el.id} className="card">
      <img src={el.images[0]} alt="" />
      <h3 className='title'>{el.title}</h3>
      <button className='btn' onClick={()=> dispatch(toggleLike(el))}>
        {
          wishlist?.some(item => item.id === el.id) ? 
          <FaHeart style={{color:"red"}}/> 
          :
          <FaRegHeart/>
        }
      </button>
    </div>
  ) ) 
  return (
    <div>
        <div className="wrapper">
           {productItems}
        </div>
    </div>
  )
}

export default Products



// let arr = [ 5, 15,  20]

// console.log( arr.some(i => i > 10) ); // ||
// console.log( arr.every(i => i > 10) ); // &&


let user = {
  id: 1,
  name: "John",
  age: 32,
  gender: "male",
  profession: "Developer",
  address: "New York",
  tel: "998911234567"
}