import { Button, Grid, IconButton, Typography } from '@mui/material'
import QRCode from "react-qr-code";
import { NavLink } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FormattedInputs from './TextMaskCustom';
import { useState } from 'react';
import SendCode from './SendCode';

const CheckOut = ({ home, phoneNumber, summa, logoname, image, servicetype, number }) => {
    const baseUrl = window.location.hostname
    const data = new Date()
    const date = data.toISOString().slice(0, 10)
    const time = data.toString().slice(16, 21)
    const [cardNumber, setCardNumber] = useState("");
    const [datee, setDate] = useState("");
    const [pay, setPay] = useState(true)
    const [format, setFormat] = useState(true)
    const [paid, setPaid] = useState(false)
    

    


    const handlePay = () => {

        if(datee.length===0){
            setPay(false)
        }else if(datee.length>0 && datee.length<5){
            setFormat(false)
        }else{
            setPaid(true)
        }

    }


    return (
        <div className='checkout'>
            <Grid container sx={{ maxWidth: "470px", height: "auto", mr: "auto", ml: "auto" }}>
                <Grid item md={12} sm={12} xs={12} sx={{ mb: 6 }}>
                    <NavLink to="/">
                        <img src="https://cdn.payme.uz/logo/payme_color.svg" alt="logo" width="100" />
                    </NavLink>
                </Grid>
                <Grid item md={12} sm={12} xs={12} sx={{ p: { md: 6, sm: 6, xs: 6 }, boxShadow: "0 4px 12px 12px rgba(0,0,0,0.1)", bgcolor: "#f8f8f8", "@media (max-width: 470px)": { px: 2, py: 6 } }}>
                    <Grid container>
                        <Typography sx={{ fontWeight: "600", color: "#3f3f46" }} gutterBottom>
                            {home.CHECKOUT_TITLE}
                        </Typography>
                        <Grid item md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <img src={image} alt="bl" style={{ width: "150px", padding: "30px 10px", backgroundColor: "#fff" }} />
                                <div style={{ padding: "10px", backgroundColor: "#fff" }}>
                                    <QRCode
                                        size={100}
                                        value={`${baseUrl}`}
                                        fgColor="#000"
                                        bgColor="#fff"
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Typography sx={{ width: "100%", textAlign: "center", color: "#888894", my: 1 }}>
                            {logoname}
                        </Typography>
                        <Typography>
                            {servicetype}
                        </Typography>
                        <Grid item md={12} sm={12} xs={12}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px 0" }}>
                                <Typography sx={{ color: "#888894" }}>
                                    {number}:
                                </Typography>
                                <Typography>
                                    {phoneNumber}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Button variant='contained'
                                sx={{
                                    width: "100%", bgcolor: "#fff", color: "#888894", fontWeight: "600",
                                    "&: hover": { color: "#3cc", bgcolor: "#fff" }, p: 1.5
                                }}>
                                {home.CHECKOUT_DETAILS}
                            </Button>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "16px 0" }}>
                                <Typography sx={{ color: "#888894" }}>
                                    {`${home.CHEQUE_STATUS}:`}
                                </Typography>
                                <div>
                                    <Typography sx={{ bgcolor: "#fa6a6a", color: "#fff", px: 1, borderRadius: "20px" }}>
                                        {home.CHEQUE_STATE_UNPAID}
                                    </Typography>
                                    <Typography>
                                        {`${date} ${time}`}
                                    </Typography>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px 0" }}>
                                <Typography sx={{ color: "#888894" }}>
                                    {`${home.CHEQUE_AMOUNT}:`}
                                </Typography>

                                <Typography>
                                    {summa}
                                </Typography>

                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px 0" }}>
                                <IconButton sx={{ borderRadius: "5px", "&: hover": { bgcolor: "inherit", color: "#3cc" } }}>
                                    <NavLink>
                                        <CloseIcon />
                                        <Typography>
                                            {home.BTN_CANCEL}
                                        </Typography>
                                    </NavLink>
                                </IconButton>
                                <IconButton sx={{ borderRadius: "5px", "&: hover": { bgcolor: "inherit", color: "#3cc" } }}>
                                    <NavLink>
                                        <ShareIcon />
                                        <Typography>
                                            {home.BTN_CHEQUE_SHARE}
                                        </Typography>
                                    </NavLink>
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Grid container sx={{ maxWidth: "470px", mr: "auto", ml: "auto" }}>
                {!paid ?
                    <Grid item md={12} sm={12} xs={12} sx={{ p: 6, "@media (max-width: 470px)": { p: 2 } }}>
                        <Typography sx={{ fontWeight: "bold", mb: 1 }}>
                            {home.BTN_ENTER}
                        </Typography>
                        <Grid item sx={{ mb: 4 }}>
                            <Typography sx={{ color: "#999", fontWeight: "550" }}>
                                <small>
                                    {home.INPUT_PHONE_LABEL}
                                </small>
                            </Typography>
                            <FormattedInputs />
                        </Grid>
                        <Typography sx={{ fontWeight: 550, fontSize: 14, mb: 2 }}>
                            {home.CHECKOUT_PAY_HEADER}
                        </Typography>
                        <Grid item>
                            <Typography sx={{ color: "#999", fontWeight: "550" }}>
                                <small>
                                    {home.INPUT_CARD_NUMBER_LABEL}
                                </small>
                            </Typography>
                            <div style={{ marginLeft: "8px", boxSizing: "border-box", display: "flex", width: "300px", borderWidth: "1px ", borderStyle: "solid", borderColor: !pay || !format ? '#dc3545' : '#b8b2b2', borderRadius: "5px", padding: "5px" }}>
                                <CreditCardIcon sx={{ px: 2 }} />
                                <input
                                    style={{ border: "none", outline: "none", fontSize: "14px" }}
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    required
                                    maxLength={19}
                                    value={cardNumber
                                        .replace(/\s/g, "")
                                        .replace(/(\d{4})/g, "$1 ")
                                        .trim()}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                />
                                <input
                                    onFocus={()=>{
                                        setPay(true)
                                        setFormat(true)
                                    }}
                                    style={{ width: "50px", border: "none", outline: "none", fontSize: "14px" }}
                                    maxLength={5}
                                    type="text"
                                    placeholder={home.INPUT_CARD_EXPIRE_PLACEHOLDER}
                                    required
                                    value={datee
                                        .replace(/\s/i, "")
                                        .replace(/(\d{2})/i, " $1 ")
                                        .trim()
                                    }
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                            {!pay && <Typography sx={{ ml: 29, color: "#dc3545" }}>
                                {home.INPUT_ERROR_REQUIRED}
                            </Typography>}
                            {!format && <Typography sx={{ ml: 24, color: "#dc3545" }}>
                                {home.INPUT_ERROR_PATTERN}
                            </Typography>}
                        </Grid>
                        {cardNumber.length === 19 && <Grid item md={12} sm={12} xs={12} sx={{ mt: 3 }}>
                            <Button onClick={handlePay}
                                variant="contained" sx={{ ml: 1, width: "300px", bgcolor: "#3cc", "&:hover": { bgcolor: "#81e8e9" } }}>
                                {home.BTN_PAY}
                            </Button>
                        </Grid>}
                    </Grid>
                    :
                    <SendCode home={home} setPaid={setPaid}/>

                }

            </Grid>
        </div>
    )
}

export default CheckOut