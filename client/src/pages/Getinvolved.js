import React from 'react'
import lawyer1 from '../images/lawyer1.png'
import lawyer2 from '../images/lawyer2.png'

const Getinvolved = () => {
  return (
    <>
      <p className='text-center display-5 fw-normal mt-5'>OUR ADVOCATES</p>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-7 d-flex flex-column justify-content-center text-center">
            <div className="content-section py-5 px-5" style={{ 'backgroundColor': '#F3E9DA' }}>
              <h1>Advocate Juliya saxsena</h1>
              <div className="diplay-6">Kurukshetra, haryana, India</div>
              <div className="display-5 mt-4">lorem lorem lorem lorem
                lorem lorem</div>
              <button className="button-59 mt-5" style={{ 'borderRadius': '5px' }}>Know More</button>
            </div>
          </div>
          <div className="col-5">
            <img src={lawyer1} alt="..." />
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 text-end mb-3">
        <div className="row justify-content-end">
          <div className="col-7 order-1 d-flex flex-column justify-content-center text-center">
            <div className="content-section py-5 px-5" style={{ 'backgroundColor': '#F3E9DA' }}>
              <h1>Advocate Juliya saxsena</h1>
              <div className="diplay-6">Kurukshetra, haryana, India</div>
              <div className="display-5 mt-4">lorem lorem lorem lorem
                lorem lorem</div>
              <button className="button-59 mt-5" style={{ 'borderRadius': '5px' }}>Know More</button>
            </div>
          </div>
          <div className="col-5 order-0">
            <img src={lawyer2} alt="..." />
          </div>
        </div>
      </div>
    </>
  )
}

export default Getinvolved