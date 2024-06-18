import { Box, Button, Card, CardMedia, Dialog, Grid, IconButton, InputBase, MenuItem, Select, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { services } from "../data/communalServices"
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";





const Utilities = ({ home, payment, setInput1, setInput2, setImage, setLogoname, setServicetype, setNumber }) => {
    const mobile_operators = payment && payment.types[3]
    const utilities = services && services.result.merchants
    const [hide, setHide] = useState(false)
    const [open, setOpen] = useState(false)
    const [namemo, setNamemo] = useState("")
    const [logomo, setLogomo] = useState("")
    const [select, setSelect] = useState("")
    const [filtervalue, setFiltervalue] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [summa, setSumma] = useState("")
    const [sumlength, setSumlength] = useState(false)
    const [text, setText] = useState("")
    const [phonetext, setPhonetext] = useState("")
    const [formatphone, setFormatphone] = useState(false)
    const [formatSelect, setFormatSelect] = useState(false)
    const [format2Select, setFormat2Select] = useState(false)
    const [title, setTitle] = useState("")
    const [prefix, setPrefix] = useState([])

    const navigate = useNavigate()

    const handlePay = () => {
        if (summa.length === 0) {
            setSumlength(true)
            setText(home.INPUT_ERROR_REQUIRED)
        } else if (summa.length > 0) {
            if (Number(summa.replace(/\D/g, "")) < 500) {
                setSumlength(true)
                setText(`${home.INPUT_AMOUNT_ERROR_MIN} 500`)
            } else if (Number(summa.replace(/\D/g, "")) > 3000000) {
                setSumlength(true)
                setText(`${home.INPUT_AMOUNT_ERROR_MAX} 3000000`)
            }
        }

        if(filtervalue.length === 0) {
            setFormatSelect(true)
        }else if(select.length === 0) {
            setFormat2Select(true)
        }else if (phoneNumber.length === 0) {
            setFormatphone(true)
            setPhonetext(home.INPUT_ERROR_REQUIRED)
        }else if (Number(summa.replace(/\D/g, "")) > 500 && Number(summa.replace(/\D/g, "")) < 3000000 && phoneNumber.length > 0 ) {
            navigate("/checkout")
            setInput1(phoneNumber)
            setInput2(summa.replace(/\D/g, ""))
            setLogoname(namemo)
            setImage(logomo)
            setServicetype(home.INPUT_TO_SERVICE)
            setNumber(title)
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

    console.log(utilities)

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: formatSelect ? '#dc3545' : '#b8b2b2',
            fontSize: 16,
            padding: '6px 26px 6px 12px',
            width: '254px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
    }));
    return (
        <>
            <Grid container className='padding' sx={{ "@media (max-width: 1139px)": { px: "60px" }, "@media (min-width: 1140px)": { width: "1140px", mr: "auto", ml: "auto" } }}>
                <Grid item md={12} sm={12} xs={12}>
                    <Grid container>
                        <Grid item md={10} sm={10} xs={10}>
                            <Typography variant='h6'>
                                {`${mobile_operators.title} `}
                                <span style={{ color: "#666" }}>
                                    298
                                </span>
                            </Typography>
                        </Grid>
                        <Grid item md={2} sm={2} xs={2}>
                            <Button onClick={() => setHide(!hide)}
                                sx={{ fontWeight: "600", color: "#3ccc", "&: hover": { bgcolor: "inherit", color: "#81e8e9" } }}>
                                {!hide ? home.BTN_MORE : home.BTN_LESS}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={12} sm={12} xs={12} sx={{ mt: 3, overflowY: "hidden", paddingBottom: 1 }} height={!hide ? "180px" : "auto"}>
                    <Grid container spacing={3} >

                        {utilities.map((provider) => (
                            <Grid item key={provider.id}
                                onClick={() => {
                                    setFormatphone(false)
                                    setSumlength(false)
                                    setFormatSelect(false)
                                    setFormat2Select(false)
                                    setPhoneNumber("")
                                    setSumma("")
                                    setFiltervalue("")
                                    setOpen(true)
                                    setLogomo(provider.logo)
                                    setNamemo(provider.organization)
                                    setTitle(provider.terminal.account[provider.terminal.account.length-1].title)
                                    setPrefix(provider.terminal.account)
                                }}>
                                <Card className="card"
                                    sx={{ width: "126px", height: "60px", px: 4.75, py: 7 }}>
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

                        {prefix.map((item) => (
                            <>
                                {item.values ?

                                    item.name === "subRegion"
                                        ?
                                        <Grid item sx={{ mr: "auto", ml: "auto", mb: 1 }}>
                                            <Typography><small>{item.title}</small></Typography>
                                            <Select sx={{ p: 1 }}
                                                input={<BootstrapInput />}
                                                value={select}
                                                onChange={(e)=>setSelect(e.target.value)}
                                                onFocus = {()=>setFormat2Select(false)}
                                            >
                                                {item.values.map((value) => (
                                                    value.filter === filtervalue && <MenuItem value={value.value}>
                                                        {value.title}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            {format2Select && <Typography sx={{ color: "#dc3545" }}>
                                            {home.INPUT_ERROR_REQUIRED}
                                        </Typography>}
                                        </Grid>
                                        :
                                        <Grid item sx={{ mr: "auto", ml: "auto", mb: 1 }}>
                                            <Typography><small>{item.title}</small></Typography>
                                            <Select sx={{ p: 1 }}
                                                input={<BootstrapInput />}
                                                value={filtervalue}
                                                onChange={(e) => setFiltervalue(e.target.value)}
                                                onFocus={()=>setFormatSelect(false)}
                                            >
                                                {item.values.map((value) => (
                                                    <MenuItem value={value.value}>
                                                        {value.title}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            {formatSelect && <Typography sx={{ color: "#dc3545" }}>
                                            {home.INPUT_ERROR_REQUIRED}
                                        </Typography>}
                                        </Grid>
                                    :
                                    <Grid item sx={{ mr: "auto", ml: "auto", mb: 1 }}>
                                        <Typography><small>{item.title}</small></Typography>
                                        <input className='regtrinput' style={{ borderColor: formatphone ? "#dc3545" : "", height: "30px" }}
                                            type={item.type}
                                            placeholder={item.placeholder}
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            onFocus={()=>setFormatphone(false)}
                                            />
                                        {formatphone && <Typography sx={{ color: "#dc3545" }}>
                                            {phonetext}
                                        </Typography>}
                                    </Grid>}
                            </>

                        ))}

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

export default Utilities