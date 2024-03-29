import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';

const CssTextField = styled(TextField)({
    '& input': {
        color: 'white',
    },
    '& label': {
        color: '#A0AAB4',
    },
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
});

function LoginComp({ mobileNo, setMobileNo, setOtpSent }) {

    const handleMobileNo = (e) => {
        const numberPattern = /^\d+$/;
        if ((numberPattern.test(e.target.value) && mobileNo.length < 10) || !e.target.value) {
            setMobileNo(e.target.value)
        };
    };

    const getOtp = () => {
        setOtpSent(true);
    }

    return (
        <div className='loginComp'>
            <p className='loginText'>Login or Signup to continue</p>
            <div className='inputsHolder'>
                <div className='input1'>
                    <CssTextField label='' value="+91" />
                </div>
                <div className='input2'>
                    <CssTextField label='Enter mobile number' disabled={false} onChange={handleMobileNo} value={mobileNo} />
                </div>
            </div>
            <p className='by'>By proceeding you confirm that you are above 18 years and agree to the Privacy Policy & Terms of Use.</p>
            <div className='otpBtn'>
                <Button disabled={mobileNo.length !== 10} onClick={getOtp} variant="contained" color='primary'>GET OTP</Button>
                <p className='having'>Having trouble in logging in?<a>Get Help</a></p>
            </div>
        </div>
    )
}

export default LoginComp;