import React, { useState } from 'react'
import OtpInput from './OtpInput';

function FillOtp({ mobileNo = '', otp, setOtp }) {

  const onSubmit = (otpHere) => {
    if(otpHere.length === 4) {
      document.getElementById('otp').innerText = otpHere;
    }
    else {
      document.getElementById('otp').innerText = '';
    }
  };

  return (
    <div className='fillOtp'>
      <h2>Enter the OTP sent to {`+91 ${mobileNo}`}</h2>
      <div>
        <OtpInput otp={otp} setOtp={setOtp} onSubmit={onSubmit} />
      </div>
      <h1 id='otp'></h1>
      <div>
        <p>Didn't received? <a>Get a New One!</a></p>
      </div>
    </ div>
  )
}

export default FillOtp;