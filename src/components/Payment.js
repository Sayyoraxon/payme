import { Grid, Typography } from '@mui/material'
import Mobileoperators from './Mobileoperators'
import InternetProviders from './InternetProviders'
import Footer from './Footer'


const Payment = ({ home, payment, setInput1, setInput2, setImage, setLogoname, setServicetype, setNumber }) => {

  return (
    <Grid container sx={{ bgcolor: "#f8f8f8", marginTop: "100px", "@media (max-width: 900px)": { marginTop: "70px" } }}>
      <Grid container className='padding' sx={{ "@media (max-width: 1139px)": { px: "60px" }, "@media (min-width: 1140px)": { width: "1140px", mr: "auto", ml: "auto" } }}>
        <Grid item md={7} sm={7} xs={12} sx={{ mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            {home.HOME_PAYMENT_HEADER}
          </Typography>
          <Typography>
            {home.HOME_PAYMENT_SUB_HEADER}
          </Typography>
        </Grid>
        <Grid item md={5} sm={5} xs={12}>
          <input className='regtrinput' placeholder={home.INPUT_SEARCH_PLACEHOLDER}
            style={{ width: "100%" }} />
        </Grid>
      </Grid>

      <Mobileoperators home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <InternetProviders home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <Footer home={home}/>
    </Grid>
  )
}

export default Payment