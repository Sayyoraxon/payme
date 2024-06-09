
import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import card from "../images/Unknown.svg"
import { NavLink } from 'react-router-dom';
import playMarket from "../images/play-market.png"
import appStore from "../images/app-store.png"
import appGallery from "../images/app-gallery.png"
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PaymentIcon from '@mui/icons-material/Payment';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import Footer from './Footer';
import PaymentsforLoans from './PaymentsforLoans';
import OtherCategories from './OtherCategories';
import PaymeTools from './PaymeTools';
import Subfooter from './Subfooter';
import FormattedInput from './FormattedInput';
import { useState } from 'react';
import MobOperator from './MobOperator';



const Home = ({ home, setInput1, setInput2, setImage, setLogoname }) => {

    const [phoneNumber, setPhoneNumber] = useState("")

    console.log(phoneNumber)

    return (
        <>
            <Grid container sx={{ marginTop: "100px", height: "415px", "@media (max-width: 900px)": { marginTop: "70px" } }}>
                <Grid item md={1} xs={2} sx={{ "@media (max-width: 500px)": { display: "none" } }}></Grid>
                <Grid item md={4} xs={10} sx={{ "@media (max-width: 500px)": { width: "100%", paddingLeft: 2 } }}>
                    <h1>{home.HOME_HEADER}</h1>
                    <h3>{home.HOME_AUTH_HEADER}</h3>
                    <p><small>{home.INPUT_PHONE_LABEL}</small></p>

                    <Box sx={{ display: "flex", mb: 4 }}>

                        <FormattedInput setPhoneNumber={setPhoneNumber}/>

                        <Button variant="contained" sx={{ mx: 1, bgcolor: "#3cc", "&: hover": { bgcolor: "#4ed1d0" } }}>
                            <NavLink to="/register">
                                {home.BTN_ENTER}
                            </NavLink>
                        </Button>
                    </Box>
                    <p>{home.HOME_AUTH_SUB_HEADER}</p>
                    <Typography variant='h6' sx={{ mt: 7, fontWeight: "bold" }}>{home.HOME_BANNER_HEADER}</Typography>
                    <Typography>{home.HOME_BANNER_TEXT}</Typography>
                </Grid>
                <Grid item md={7} sx={{ height: "415px", display: { xs: "none", sm: "none", md: "block" } }}>
                    <img src="https://payme.uz/home-auth.cfdc06d3194236c0f258.jpg" alt="home" height="415px" width="100%" style={{ objectFit: "cover" }} />
                </Grid>
            </Grid>
            <div style={{ backgroundColor: "#f0f2f5", width: "100%" }}>

                <div className='container secondDiv'>
                    <div className='card'>
                        <div style={{ marginRight: "20px", height: "auto", width: "320px", position: "relative" }}>
                            <img src={card} alt="card" style={{ borderRadius: "20px" }} />
                            <div style={{ position: "absolute", top: "0", left: "0", height: "100%", width: "100%" }}>
                                <div style={{ color: "#fff", background: "rgba(0,0,0,0.4)", display: "inline-block", padding: "3px", borderRadius: "18px", marginTop: "44px", marginLeft: "10px" }}>
                                    <small><b>{home.PAYME_CARD_NAME}</b></small>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", color: "#fff", marginLeft: "10px" }}>
                                    <h2 style={{ marginRight: "10px" }}>100 000.00 </h2>
                                    <p> {home.UZS}</p>
                                </div>
                                <div style={{ marginLeft: "10px" }}>
                                    <Typography variant="h7" sx={{ color: "#fff" }}>
                                        {home.PAYME_CARD_OWNER}
                                    </Typography>
                                    <Typography paragraph sx={{ color: "#fff" }}>
                                        0505 0100 0000 0000
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mdiv">
                        <Typography variant="h4" gutterBottom>
                            {home.PAYME_CARD_MODULE_HEADER}
                        </Typography>
                        <Typography >
                            {home.PAYME_CARD_MODULE_SUB_HEADER}
                        </Typography>
                        <Button variant='outlined' sx={{ border: "none", bgcolor: "#fff", color: "#888894", mt: 4, fontWeight: "600", "&: hover": { color: "#2aced0", border: "none", bgcolor: "#fff" } }}>
                            {home.BTN_ABOUT}
                        </Button>
                    </div>
                </div>
                <Divider />
                <div className='container thirdDiv'>

                    <div>
                        <Typography variant='h4' gutterBottom>
                            {home.HOME_DOWNLOAD_HEADER}
                        </Typography>
                    </div>
                    <div>
                        <div>
                            <img src={playMarket} alt="pMarket" />
                        </div>
                        <div>
                            <img src={appStore} alt="pMarket" />
                        </div>
                        <div>
                            <img src={appGallery} alt="pMarket" />
                        </div>
                    </div>
                </div>
                <Divider />

            </div>
            <div style={{ backgroundColor: "#f8f8f8" }}>
                <div className='padding'>
                    <Grid container sx={{ mb: { xs: 5 }, "@media (max-width: 1139px)": { px: "60px" }, "@media (max-width: 600px)": { px: "1px" },  "@media (min-width: 1140px)": { maxWidth: "1140px", mr: "auto", ml: "auto" } }}>
                        <Grid item md={12} sm={12}>
                            <Typography variant='h4' gutterBottom>
                                {home.HOME_MOBILE_HEADER}
                            </Typography>
                            <Typography>
                                {home.HOME_MOBILE_SUB_HEADER}
                            </Typography>
                        </Grid>
                        <Grid item md={12} sm={12}>

                            <MobOperator home={home} setInput1={setInput1} setInput2={setInput2} setImage={setImage} setLogoname={setLogoname}/>

                        </Grid>

                    </Grid>
                </div>
            </div>
            <div style={{ backgroundColor: "#f0f2f5" }}>
                <Grid container className='padding' sx={{ "@media (max-width: 1139px)": { px: "60px" }, "@media (min-width: 1140px)": { maxWidth: "1140px", mr: "auto", ml: "auto" }, "@media (max-width: 600px)": {px: "2px"} }}>
                    <Grid item md={5} sm={12} xs={12} sx={{ paddingRight: 3, mb: 4 }}>
                        <Typography variant='h4' gutterBottom>
                            {home.HOME_GOV_HEADER}
                        </Typography>
                        <Typography>
                            {home.HOME_GOV_SUB_HEADER}
                        </Typography>
                    </Grid>
                    <Grid item md={7} sm={12} xs={12} >
                        <Grid container spacing={1} sx={{ mb: { sm: 5, xs: 8 } }}>
                            <Grid item md={3} sm={3} xs={4} sx={{ textAlign: "center" }}>
                                <IconButton sx={{"@media (max-width: 600px)": {width: "120px"}, color: "#000", width: "150px", "&: hover": { bgcolor: "inherit", color: "#3cc" } }}>
                                    <NavLink to="/payment">
                                        <PaymentIcon fontSize='large' />
                                        <Typography>
                                            {home.HOME_GOV_PAY_TAXES}
                                        </Typography>
                                    </NavLink>
                                </IconButton>
                            </Grid>

                            <Grid item md={3} sm={3} xs={4} sx={{ textAlign: "center" }}>
                                <IconButton sx={{"@media (max-width: 600px)": {width: "120px"}, color: "#000", width: "150px", "&: hover": { bgcolor: "inherit", color: "#3cc" } }}>
                                    <NavLink to="/payment">
                                        <ElectricBoltIcon fontSize='large' />
                                        <Typography>
                                            {home.HOME_GOV_PAY_ELECTRICITY}
                                        </Typography>
                                    </NavLink>
                                </IconButton>
                            </Grid>
                            <Grid item md={3.3} sm={3} xs={4} sx={{ textAlign: "center" }}>
                                <IconButton sx={{"@media (max-width: 600px)": {width: "120px"}, color: "#000", width: "150px", "&: hover": { bgcolor: "inherit", color: "#3cc" } }}>
                                    <NavLink to="/payment">
                                        <NoCrashIcon fontSize='large'/>
                                        <Typography>
                                            {home.HOME_GOV_PAY_FINES_STSI}
                                        </Typography>
                                    </NavLink>
                                </IconButton>
                            </Grid>
                            <Grid item md={2.7} sm={3} xs={12}>
                                <Button variant='contained' sx={{ width: { md: "160px", sm: "160px", xs: "100%" }, bgcolor: "#fff", color: "#888894", fontWeight: "600", "&: hover": { bgcolor: "#fff", color: "#3ccc" } }}>
                                    <NavLink to="/payment">
                                        {home.HOME_GOV_BTN}
                                    </NavLink>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

            <div style={{ backgroundColor: "#f8f8f8" }}>
                <PaymentsforLoans home={home} />
            </div>

            <div style={{ backgroundColor: "#f0f2f5" }}>
                <OtherCategories home={home} />
            </div>

            <div style={{ backgroundColor: "#f8f8f8" }}>
                <PaymeTools home={home} />
            </div>

            <div style={{ backgroundColor: "#17a2b8" }}>
                <Subfooter home={home} />
            </div>

            <Footer home={home} />
        </>
    )
}

export default Home