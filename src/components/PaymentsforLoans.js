import { Button, Grid, Typography } from '@mui/material'
import ipoteka from '../images/ipoteka.png'
import mkb from '../images/mkbank.png'
import tbc from '../images/tbcbank.png'
import anor from '../images/anorbank.png'
import kapital from '../images/kapital-credits.png'
import trast from '../images/trast-credits.png'
import { NavLink } from 'react-router-dom'


const PaymentsforLoans = ({ home }) => {
    return (
        <>
            <Grid container rowSpacing={8} className='padding' sx={{ mb: 5, "@media (max-width: 1139px)": { px: "60px" }, "@media (min-width: 1140px)": { width: "1140px", mr: "auto", ml: "auto" } }}>
                <Grid item md={12} sm={12} xs={12}>
                    <Grid container >
                        <Grid item md={10.5} sm={9} xs={12}>
                            <Typography variant='h4'>
                                {home.HOME_CREDIT_HEADER}
                            </Typography>
                            <Typography>
                                {home.HOME_CREDIT_SUB_HEADER}
                            </Typography>
                        </Grid>
                        <Grid item md={1.5} sm={3}>
                            <Button variant='contained' sx={{ width: "160px", bgcolor: "#fff", color: "#888894", fontWeight: "600", "&: hover": { bgcolor: "#fff", color: "#3ccc" }, display: { md: "block", sm: "block", xs: "none" } }}>
                                <NavLink to="payment">
                                    {home.HOME_CREDIT_BTN}
                                </NavLink>

                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} sx={{ textAlign: 'center' }}>
                    <NavLink to="/payment">
                        <img src={ipoteka} alt="ipotekabank" style={{ width: "150px", marginRight: "16px" }} />
                    </NavLink>
                    <NavLink to="/payment">
                        <img src={mkb} alt="mikrokreditbank" style={{ width: "150px", marginRight: "16px" }} />
                    </NavLink>
                    <NavLink to="/payment">
                        <img src={tbc} alt="tbcbank" style={{ width: "150px", marginRight: "16px" }} />
                    </NavLink>
                    <NavLink to="/payment">
                        <img src={anor} alt="anorbank" style={{ width: "150px", marginRight: "16px" }} />
                    </NavLink>
                    <NavLink to="/payment">
                        <img src={kapital} alt="kapitalbank" style={{ width: "150px", marginRight: "16px" }} />
                    </NavLink>
                    <NavLink to="/payment">
                        <img src={trast} alt="trastbank" style={{ width: "150px", marginRight: "16px" }} />
                    </NavLink>

                </Grid>
                <Grid item xs={12} sx={{ display: { md: "none", sm: "none", xs: "block" }, textAlign: "center" }}>
                    <Button sx={{ mb: 5, width: "100%", fontWeight: "600", color: "#3cc", "&: hover": { bgcolor: "inherit", color: "#81e8e9" } }}>
                        <NavLink to="/payment">
                            {home.HOME_CREDIT_BTN}
                        </NavLink>

                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default PaymentsforLoans