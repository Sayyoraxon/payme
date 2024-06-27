import { Grid, Typography } from '@mui/material'
import Mobileoperators from './Mobileoperators'
import InternetProviders from './InternetProviders'
import Utilities from './Utilities'
import Footer from './Footer'
import PublicServices from './PublicServices'
import Telefoniya from './Telefoniya'
import TVandOnline from './TVandOnline'
import OnlineServices from './OnlineServices'
import Advertising from './Advertising'
import WriteOffLoans from './WriteOffLoans'
import Kredit from './Kredit'
import Transport from './Transport'
import Charity from './Charity'
import Edu from './Edu'


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
            style={{ width: "95%" }} />
        </Grid>
      </Grid>

      <Mobileoperators home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <InternetProviders home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <Utilities home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <PublicServices home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <Telefoniya home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <TVandOnline home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <OnlineServices home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <Advertising home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <WriteOffLoans home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <Kredit home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <Transport home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <Charity home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <Edu home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>
      <Footer home={home}/>
    </Grid>
  )
}

export default Payment