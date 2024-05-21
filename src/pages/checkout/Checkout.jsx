import React, { useState } from 'react'

const BOT_TOKEN = "7096304723:AAHBtS_yOfdPFBevoUIfoLbqbIqpf2LlRrU"
const CHAT_ID = "-1002012016821"
const USER_ID = "1427172949"

//  https://api.telegram.org/bot7096304723:AAHBtS_yOfdPFBevoUIfoLbqbIqpf2LlRrU/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

let initialState = {
    fname:"",
    lname:"",
}

const Checkout = () => {
   let [data, setData] = useState(initialState)
    const handleSubmit = e => {
        e.preventDefault()

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=salom`
        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()
    }
  return (
    <div >
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit} action="">
            <input value={data.fname} onChange={e => setData(p => ({...p, fname: e.target.value}))} type="text" placeholder='fname' />
            <input value={data.lname} onChange={e => setData(p => ({...p, lname: e.target.value}))} type="text" placeholder='lname' />
            <button>Buy now</button>
        </form>
    </div>
  )
}

export default Checkout