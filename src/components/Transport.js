import { Box, Button, Card, CardMedia, Dialog, Grid, IconButton, Typography } from "@mui/material"
import { transport } from '../data/transport'
import { transportru } from '../data/transport'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"
import React from "react"
import FormattedInput from "./FormattedInput"
import { useNavigate } from "react-router-dom"


const Transport = ({ home, payment, setInput1, setInput2, setImage, setLogoname, setNumber, setServicetype }) => {
    const mobile_operators = payment && payment.types[11]
    const internetproviders = home.APRIL === "Aprel" ? transport.result.merchants : transportru.result.merchants


    const [hide, setHide] = useState(false)
    const [open, setOpen] = useState(false)
    const [namemo, setNamemo] = useState("")
    const [logomo, setLogomo] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [summa, setSumma] = useState("")
    const [sumlength, setSumlength] = useState(false)
    const [text, setText] = useState("")
    const [phonetext, setPhonetext] = useState("")
    const [formatphone, setFormatphone] = useState(false)
    const [title, setTitle] = useState("")
    const [account, setAccount] = useState("")
    const [min, setMin] = useState()
    const [max, setMax] = useState()
    const navigate = useNavigate()

    const handlePay = () => {
        if (summa.length === 0) {
            setSumlength(true)
            setText(home.INPUT_ERROR_REQUIRED)
        } else if (summa.length > 0) {
            if (Number(summa.replace(/\D/g, "")) < min) {
                setSumlength(true)
                setText(`${home.INPUT_AMOUNT_ERROR_MIN} ${min}`)
            } else if (Number(summa.replace(/\D/g, "")) > max) {
                setSumlength(true)
                setText(`${home.INPUT_AMOUNT_ERROR_MAX} ${max}`)
            }
        }

        if(account.name !== "phone"){
            if (Number(summa.replace(/\D/g, "")) > min && Number(summa.replace(/\D/g, "")) < max) {
                navigate("/checkout")
                setInput1(phoneNumber)
                setInput2(summa)
                setLogoname(namemo)
                setImage(logomo)
                setNumber(title)
            }
        }else{
            if (phoneNumber.length === 0) {
            setFormatphone(true)
            setPhonetext(home.INPUT_ERROR_REQUIRED)
        } else if (phoneNumber.length > 0 && phoneNumber.length < 12) {
            setFormatphone(true)
            setPhonetext(home.INPUT_ERROR_PATTERN)
        }

        if (phoneNumber.length === 12 && Number(summa.replace(/\D/g, "")) > min && Number(summa.replace(/\D/g, "")) < max) {
            navigate("/checkout")
            setInput1(phoneNumber.replace(/\D/g, ""))
            setInput2(summa.replace(/\D/g, ""))
            setLogoname(namemo)
            setImage(logomo)
            setNumber(title)
        }
        }

        
    }


    const getFormattedInputValue = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 7)
        let res = ""
        if (Number(digits) < 1000) {
            res = digits;
        } else if (Number(digits) >= 1000 && Number(digits) < 10000) {
            res = `${digits.slice(0, 1)} ${digits.slice(1)}`
        } else if (Number(digits) >= 10000 && Number(digits) < 100000) {
            res = `${digits.slice(0, 2)} ${digits.slice(2)}`
        } else if (Number(digits) >= 100000 && Number(digits) < 1000000) {
            res = `${digits.slice(0, 3)} ${digits.slice(3)}`
        } else if (Number(digits) >= 1000000) {
            res = `${digits.slice(0, 1)} ${digits.slice(1, 4)} ${digits.slice(4)}`
        }

        return res;
    }


    const handleSetInputValue = (e) => {
        const { value } = e.target;
        const formattedInputValue = getFormattedInputValue(value)
        setSumma(formattedInputValue)
    }


    return (
        <>
            <Grid container className='padding' sx={{ "@media (max-width: 1139px)": { px: "60px", py: 0 }, "@media (min-width: 1140px)": { width: "1140px", mr: "auto", ml: "auto" } }}>
                <Grid item md={12} sm={12} xs={12}>
                    <Grid container>
                        <Grid item md={11.3} sm={11.3} xs={11.3}>
                            <Typography variant='h6'>
                                {`${mobile_operators.title} `}
                                <span style={{ color: "#666" }}>
                                    392
                                </span>
                            </Typography>
                        </Grid>
                        <Grid item md={0.7} sm={0.7} xs={0.7}>
                            <Button onClick={() => setHide(!hide)}
                                sx={{ fontWeight: "600", color: "#3ccc", "&: hover": { bgcolor: "inherit", color: "#81e8e9" } }}>
                                {!hide ? home.BTN_MORE : home.BTN_LESS}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={12} sm={12} xs={12} sx={{ mt: 3, pb: 3, overflow: "hidden" }} height={!hide ? "178px" : "auto"} >
                    <Grid container spacing={3} >
                        {internetproviders.map((provider) => (
                            <Grid item key={provider.id}
                                onClick={() => {
                                    setFormatphone(false)
                                    setSumlength(false)
                                    setPhoneNumber("")
                                    setSumma("")
                                    setOpen(true)
                                    setLogomo(provider.logo)
                                    setNamemo(provider.organization)
                                    setTitle(provider.terminal.account[0].title)
                                    setAccount(provider.terminal.account[0])
                                    setMin(provider.terminal.amount.min/100)
                                    setMax(provider.terminal.amount.max/100)
                                }}>
                                <Card className="card"
                                    sx={{ width: "106px", height: "60px", px: 6, py: 7 }}>
                                    <CardMedia
                                        component="img"
                                        image={provider.logo}
                                        title="Image title" />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Dialog open={open}>
                    <Grid container sx={{ height: "auto", maxWidth: "460px", bgcolor: "#f8f8f8", px: { md: 5.5, sm: 5.5, xs: 1 }, py: { md: 2, sm: 2, xs: 1 } }}>
                        <Grid item md={12} sm={12} xs={12}>
                            <Grid container sx={{ px: 4, py: 3 }}>
                                <Grid item md={11} sm={11} xs={11}>
                                    <Typography variant="h7" sx={{ fontWeight: "600" }}>
                                        {namemo}
                                    </Typography>
                                </Grid>
                                <Grid item md={1} sm={1} xs={1}>
                                    <IconButton onClick={() => setOpen(false)}
                                        sx={{ p: 0, "&:hover": { bgcolor: "inherit" } }}>
                                        <CloseIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ mr: "auto", ml: "auto", mb: 3 }}>
                            <Box sx={{ borderRadius: "5px", px: 2, py: 3, bgcolor: "#fff" }}>
                                <img src={logomo} alt="beline" width="auto" height="60px" />
                            </Box>
                        </Grid>
                        {account.name === "phone"
                            ?
                            <>
                                <Grid item sx={{ mr: "auto", ml: "auto", mb: 2 }}>
                                    <Typography><small>{home.INPUT_PHONE_LABEL}</small></Typography>
                                    <FormattedInput setPhoneNumber={setPhoneNumber} formatphone={formatphone} setFormatphone={setFormatphone} />
                                    {formatphone && <Typography sx={{ color: "#dc3545" }}>
                                        {phonetext}
                                    </Typography>}
                                </Grid>
                            </>
                            :
                            <>
                                <Grid item sx={{ mr: "auto", ml: "auto", mb: 2 }}>
                                <Typography><small>{account.title}</small></Typography>
                                    <input className='regtrinput' style={{ borderColor: sumlength ? "#dc3545" : "" }}
                                        onChange={(e)=>setPhoneNumber(e.target.value)}
                                        value={phoneNumber}
                                        onFocus={() => setFormatphone(false)}
                                        placeholder={account.placeholder} />
                                    {formatphone && <Typography sx={{ color: "#dc3545" }}>
                                        {phonetext}
                                    </Typography>}
                                </Grid>
                                </>
                        }
                                <Grid item sx={{ mr: "auto", ml: "auto", mb: 5 }}>
                                    <Typography><small>{home.CHEQUE_AMOUNT}</small></Typography>
                                    <input className='regtrinput' style={{ borderColor: sumlength ? "#dc3545" : "" }}
                                        onChange={handleSetInputValue}
                                        value={summa}
                                        onFocus={() => setSumlength(false)}
                                        placeholder={home.INPUT_AMOUNT_PLACEHOLDER} />
                                    {sumlength && <Typography sx={{ color: "#dc3545" }}>
                                        {text}
                                    </Typography>}
                                </Grid>
                           
                        <Grid item md={12} sm={12} xs={12} sx={{ mb: 2 }}>
                            <Button onClick={handlePay}
                                variant="contained" sx={{ width: "100%", bgcolor: "#3cc", "&:hover": { bgcolor: "#81e8e9" } }}>
                                {home.BTN_PAY}
                            </Button>
                        </Grid>
                    </Grid>
                </Dialog>
            </Grid>
        </>
    )
}

export default Transport