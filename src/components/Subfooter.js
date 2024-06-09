import { Button, Grid, Typography } from '@mui/material'
import logo from "../images/pb_white_logo_horizontal.svg"
import wlogo from "../images/home-business.png"


const Subfooter = ({home}) => {
  return (
    <>
        <Grid container sx={{"@media (max-width: 1139px)": { px: "60px"}, "@media (min-width: 1140px)": { width: "1140px", mr: "auto", ml: "auto"} }}>
            <Grid item md={6} sm={12} xs={12} sx={{py: 5}}>
                <img src={logo} alt="logo" height="40" />
                <Typography variant='h4' sx={{color: "#fff", my: 3}}>
                    {home.HOME_BUSINESS_HEADER}
                </Typography>
                <Typography sx={{color: "#fff", my: 3}}>
                    {home.HOME_BUSINESS_SUB_HEADER}
                </Typography>
                <Button variant='contained' size='large' sx={{bgcolor: "#cdf4f5", color: "#02bdbf", fontWeight: "600", "&: hover": {bgcolor: "#abebed"}}}>
                    {home.HOME_BUSINESS_BTN}
                </Button>
            </Grid>
            <Grid item md={6} sx={{display: {md: "block", sm: "none", xs: "none"}}}>
                <img src={wlogo} alt="wlogo"/>
            </Grid>
        </Grid>
    </>
  )
}

export default Subfooter