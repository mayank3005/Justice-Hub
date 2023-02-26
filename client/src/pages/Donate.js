import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import img2 from '../images/back.png'
import PayPal from './PayPal';
import Test from './Test';

const Donate = () => {

    const navigate = useNavigate();

    return (
        <div className="donate-section text-center py-5">
            <div className='texxt_donate'>DONAT</div>
            <div className='texxt_doante2 my-5'>Support Our Programs</div>
            <div className='texxt_doante3 my-5'>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</div>
            <div>
                <button className="button-59 mt-4 p-4 px-5" style={{ 'borderRadius': '5px' }}>Donate Now</button>
                {/* <button className='button_donate my-5 py-3 px-3' onClick={() => { navigate('/test') }}>DONATE NOW</button> */}
            </div>
        </div>
    )
}

export default Donate