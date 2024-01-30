import React, { useEffect, useRef } from 'react';

function OtpInput({ otp, setOtp, onSubmit }) {
    const inputrefs = useRef([]);
    console.log(inputrefs)

    useEffect(() => {
        if (inputrefs.current[0]) {
            inputrefs.current[0].focus();
        }
    }, []);

    const handleOtpChange = (e, index) => {
        const val = e.target.value;
        if (isNaN(val)) return;

        let newOtp = [...otp];
        newOtp[index] = val.substring(val.length - 1);
        setOtp(newOtp);
        if (index < 4 && inputrefs.current[index + 1]) {
            inputrefs.current[index + 1].focus();
        }
        const finalOtp = newOtp.join("");
        if (finalOtp.length === 4) {
            onSubmit(finalOtp);
        }
    }

    function handleFieldClick(index) {
        inputrefs.current[index].setSelectionRange(1, 1);
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0 && inputrefs.current[index - 1]) {
            inputrefs.current[index - 1].focus();
        }
    }
    return (
        otp.map((_f, ind) => (
            <input
                key={ind}
                ref={(input) => (inputrefs.current[ind] = input)}
                type='text'
                className='otpInput'
                value={otp[ind]}
                onChange={(e) => handleOtpChange(e, ind)}
                onClick={() => handleFieldClick(ind)}
                onKeyDown={(e) => handleKeyDown(e, ind)}
            />))
    );
}

export default OtpInput;