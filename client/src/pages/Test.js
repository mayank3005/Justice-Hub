import React,{useEffect, useState} from 'react'
import PayPal from './PayPal';

const Test = () => {
    const [checkout, setCheckOut]= useState(false);
  return (
    <div>
        {
            checkout ?(
                <PayPal />

            ) :(
                <button onClick={()=>{
                    setCheckOut(true);
                }}
                >
                    Checkout
                </button>
            )
        }
    </div>
  )
}

export default Test