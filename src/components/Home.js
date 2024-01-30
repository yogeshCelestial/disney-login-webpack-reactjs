import React, { useState } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import LoginComp from './LoginComp';
import FillOtp from './FillOtp';


const Home = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [otpSent, setOtpSent] = useState(false);
    const [mobileNo, setMobileNo] = useState('');
    const imagesArr = [img1, img2, img3, img4, img5, img6, img7];
    const mappedImages = imagesArr.map((img, index) =>
        (<img key={img} className='img' src={img} alt='thumbnail' />));

    return (
        <div className='flexContainer'>
            <div className='flex1'>
                <div className='container'>
                    <div className='imgHolder1'>
                        {mappedImages}
                    </div>
                    <div className='imgHolder1'>
                        {mappedImages}
                    </div>
                </div>
                <br />
                <div className='container'>
                    <div className='imgHolder2'>
                        {mappedImages}
                    </div>
                    <div className='imgHolder2'>
                        {mappedImages}
                    </div>
                </div>
                <br />
                <div className='container'>
                    <div className='imgHolder3'>
                        {mappedImages}
                    </div>
                    <div className='imgHolder3'>
                        {mappedImages}
                    </div>
                </div>
            </div>
            <div className='flex2'>
                {otpSent ? <FillOtp mobileNo={mobileNo} otp={otp} setOtp={setOtp} /> : <LoginComp mobileNo={mobileNo} setMobileNo={setMobileNo} setOtpSent={setOtpSent} />}
            </div>
        </div>
    )
}

export default Home;