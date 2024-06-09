import React, { useState } from 'react'
import FormattedInput from './FormattedInput'
import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import bln from '../images/beeline.png'
import ucell from '../images/ucell.png'
import gsm from '../images/uzmobile_gsm.png'
import ums from "../images/mobiuz.png"

const MobOperator = ({ home, setInput1, setInput2, setImage, setLogoname, setServicetype, setNumber  }) => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [summa, setSumma] = useState("")
    const [sumlength, setSumlength] = useState(false)
    const [text, setText] = useState("")
    const [phonetext, setPhonetext] = useState("")
    const [formatphone, setFormatphone] = useState(false)
    const navigate = useNavigate()

    const handlePay = () => {
        if (summa.length === 0) {
            setSumlength(true)
            setText(home.INPUT_ERROR_REQUIRED)
        } else if (summa.length > 0) {
            if (Number(summa.replace(/\D/g, "")) < 500) {
                setSumlength(true)
                setText(`${home.INPUT_AMOUNT_ERROR_MIN} 500`)
            } else if (Number(summa.replace(/\D/g, "")) > 10000) {
                setSumlength(true)
                setText(`${home.INPUT_AMOUNT_ERROR_MAX} 100 000`)
            }
        }

        if (phoneNumber.length === 0) {
            setFormatphone(true)
            setPhonetext(home.INPUT_ERROR_REQUIRED)
        } else if (phoneNumber.length > 0 && phoneNumber.length < 12) {
            setFormatphone(true)
            setPhonetext(home.INPUT_ERROR_PATTERN)
        }

        if(phoneNumber.length === 12 && Number(summa.replace(/\D/g, "")) > 500 && Number(summa.replace(/\D/g, "")) < 100000){
            
            const codeNumber = phoneNumber.slice(0,2)
            if(codeNumber==="90" || codeNumber==="91"){
                setLogoname("Beeline")
                setImage(bln)
            }else if(codeNumber==="93" || codeNumber==="94"){
                setLogoname("Ucell")
                setImage(ucell)
            }else if(codeNumber==="95" || codeNumber==="99" || codeNumber==="77"){
                setLogoname("Uzmobile GSM")
                setImage(gsm)
            }else if(codeNumber==="97" || codeNumber==="88"){
                setLogoname("Mobiuz")
                setImage(ums)
            }
            navigate("/checkout")
            setInput1(phoneNumber.replace(/\D/g, ""))
            setInput2(summa.replace(/\D/g, ""))
            setNumber(home.INPUT_PHONE_LABEL)
            setServicetype(home.HOME_MOBILE_HEADER)
        }
    }


    const getFormattedInputValue = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 6)
        let res = ""
        if (Number(digits) < 1000) {
            res = digits;
        } else if (Number(digits) >= 1000 && Number(digits) < 10000) {
            res = `${digits.slice(0, 1)} ${digits.slice(1)}`
        } else if (Number(digits) >= 10000 && Number(digits) < 100000) {
            res = `${digits.slice(0, 2)} ${digits.slice(2)}`
        } else if (Number(digits) >= 100000) {
            res = `${digits.slice(0, 3)} ${digits.slice(3)}`
        }

        return res;
    }


    const handleSetInputValue = (e) => {
        const { value } = e.target;
        const formattedInputValue = getFormattedInputValue(value)
        setSumma(formattedInputValue)
    }


    return (
        <Grid container>
            <Grid item md={5.5} sm={12} sx={{ mt: 5, position: "relative" }}>
                <Typography sx={{ position: "absolute", top: -25, left: 20 }}>
                    <small>{home.INPUT_PHONE_LABEL}</small>
                </Typography>
                <FormattedInput setPhoneNumber={setPhoneNumber} formatphone={formatphone} setFormatphone={setFormatphone} />
                {formatphone && <Typography sx={{ color: "#dc3545" }}>
                    {phonetext}
                </Typography>}

            </Grid>
            <Grid item md={5.5} sm={12} sx={{ mt: 5, position: "relative" }}>
                <Typography sx={{ position: "absolute", top: -25, left: 20 }}>
                    <small>{home.CHEQUE_AMOUNT}</small>
                </Typography>
                <input className='regtrinput' style={{ borderColor: sumlength ? "#dc3545" : "" }}
                    onChange={handleSetInputValue}
                    value={summa}
                    onFocus={() => setSumlength(false)}
                    placeholder={home.INPUT_AMOUNT_PLACEHOLDER} />
                {sumlength && <Typography sx={{ color: "#dc3545" }}>
                    {text}
                </Typography>}
            </Grid>
            <Grid item md={1} sm={12} xs={12} sx={{ mt: { md: 2.8, sm: 2.5, xs: 2.5 } }}>
                <Button onClick={handlePay}
                    variant="contained" sx={{ mt: 2.3, bgcolor: "#2aced0", "&: hover": { bgcolor: "#3cc" }, width: { md: "110px", sm: "300px", xs: "300px" } }}>
                    {home.BTN_PAY}
                </Button>
            </Grid>
        </Grid>
    )
}

export default MobOperator