import { Button, Grid, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react';
import WarningIcon from '@mui/icons-material/Warning';

const SendCode = ({ home, setPaid }) => {

    const [code, setCode] = useState("")
    const code1 = "910101"
    const [enter, setEnter] = useState(true)
    const [req, setReq] = useState(false)
    const [warning, setWarning] = useState(false)
    const [seconds, setSeconds] = useState(60)
    const [text, setText] = useState("")
    const timerId = useRef()


    useEffect(() => {
        timerId.current = setInterval(() => {
            setSeconds(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [seconds])

    useEffect(() => {
        seconds <= 0 && clearInterval(timerId.current)
    }, [seconds])

    const paying = () => {
        if(code.length === 0){
            setReq(true)
        }else if (code.length < 6) {
            setEnter(false)
        }else if (seconds === 0) {
            setWarning(true)
            setText("Tasdiqlash sms kodi muddati tugadi. Iltimos boshqa kod so'rang")
            setTimeout(()=>{setWarning(false)}, 2500)
        }else if (code !== code1) {
            setWarning(true)
            setText("Yaroqsiz bir martalik kod kiritildi")
            setTimeout(()=>{setWarning(false)}, 2500)
        } else if (code === code1) {
            alert("muvaffaqiyatli")
        }
    }

    return (
        <>
            <Grid item md={12} sm={12} xs={12} sx={{ p: 6, "@media (max-width: 470px)": { p: 2 } }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px 0" }}>
                    <Typography sx={{ fontWeight: "bold", mb: 1 }}>
                        {home.LOGIN_OTP_HEADER}
                    </Typography>
                    <div className="circular"
                        style={{ display: seconds <= 0 ? "none" : "" }}>
                        <div className="inner"></div>
                        <div className="outer"></div>
                        <div className="numb">
                            {seconds}
                        </div>
                        <div className="circle">
                            <div className="dot">
                                <span></span>
                            </div>
                            <div className="bar left">
                                <div className="progress"></div>
                            </div>
                            <div className="bar right">
                                <div className="progress"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Typography sx={{ color: seconds > 0 ? "#3cc" : "#b8b2b2", fontWeight: "550" }}>
                    <small>
                        {home.INPUT_CODE_LABEL}
                    </small>
                </Typography>
                <input maxLength={6} placeholder='------'
                    onChange={(e) => setCode(e.target.value)}
                    onFocus={() => {
                        setEnter(true)
                        setReq(false)
                    }}
                    className='regtrinput' style={{ borderColor: !enter || req ? "#dc3545" : seconds > 0 ? "#3cc" : "#b8b2b2", width: "340px" }} />
                {req && <Typography sx={{ color: "#dc3545" }}>
                    {home.INPUT_ERROR_REQUIRED}
                </Typography>}
                {code.length > 0 && code.length < 6 &&
                    <Typography sx={{ color: "#dc3545" }}>
                        {home.INPUT_ERROR_PATTERN}
                    </Typography>}
                <button onClick={() => setSeconds(60)} disabled={seconds > 0 && true}
                    style={{ marginTop: "16px", width: "100%", border: "none", backgroundColor: "inherit", fontSize: "14px", fontWeight: "550", color: seconds !== 0 ? "#b8b2b2" : "#3cc" }}>
                    {home.BTN_CODE_RESEND}
                </button>
                <Typography sx={{ mt: 1, textAlign: "center", fontWeight: "550", color: "#212529" }}>
                    {home.INPUT_CODE_SEND_TO}
                </Typography>
                <Typography sx={{ textAlign: "center", fontWeight: "550", color: "#212529" }}>
                    +998 90 *** ** 16
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "21px 0", padding: "0 21px" }}>
                    <Button onClick={()=>setPaid(false)}
                     sx={{ width: "160px", fontWeight: "550", color: "#3cc", "&: hover": { bgcolor: "inherit" } }}>
                        {home.BTN_BACK}
                    </Button>
                    <Button onClick={paying}
                        sx={{ width: "160px", fontWeight: "550", bgcolor: "#3cc", color: "#fff", "&: hover": { bgcolor: "#81e8e9" } }}>
                        {home.BTN_PAY}
                    </Button>
                </div>
            </Grid>
            {warning && 
            <div style={{position: "fixed", top: "10px", display: "flex", backgroundColor: "#dc3545", padding: "20px", borderRadius: "10px",
                        width: "400px", zIndex: "10"}}>
                <WarningIcon fontSize='large' sx={{color: "#fff"}}/>
                <Typography sx={{color: "#fff", ml: 3}}>
                    {text}
                </Typography>
            </div>}
        </>
    )
}

export default SendCode