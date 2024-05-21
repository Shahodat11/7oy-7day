import React, { useEffect, useState } from 'react'
import Main from "../../components/main/Main"
import Products from '../../components/products/Products'
import { useGetProductsQuery } from '../../context/productApi'
import MainTop from '../../components/mainTop/MainTop'
import MainEnd from '../../components/mainEnd/MainEnd'
import Footer from '../../components/footer/Footer'

const Home = () => {
  let {data, isLoading, error, isError} = useGetProductsQuery()
  return (
    <div>
      <Main/>
      <Products data={data?.products}/>
      <MainTop/>
      <MainEnd/>
      <Footer/>
    </div>
  )
}

export default Home