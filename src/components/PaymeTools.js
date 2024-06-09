import { Button, Grid, Typography } from '@mui/material'
import paymeGo from "../images/paymego.svg"
import qr from "../images/qr.svg"
import payment from "../images/payment.svg"
import star from "../images/star.svg"
import monitoring from "../images/monitoring.svg"
import offline from "../images/offlinepayment.svg"

const PaymeTools = ({home}) => {
    return (
        <>
            <Grid container className='padding' spacing={3} sx={{ "@media (max-width: 1139px)": { px: "60px" }, "@media (min-width: 1140px)": { width: "1140px", mr: "auto", ml: "auto" } }}>
                <Grid item md={12}>
                    <Typography variant='h4' gutterBottom>
                        {home.HOME_ABILITIES_HEADER}
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Grid container spacing={3}>
                        <Grid item md={6} sm={12} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item md={3} sm={3} xs={3}>
                                    <img src={paymeGo} alt="pay" width="74"/>
                                </Grid>
                                <Grid item md={9} sm={9} xs={9}>
                                    <Typography variant="h5" gutterBottom>
                                        {home.HOME_ABILITIES_01_TITLE}
                                    </Typography>
                                    <Typography dangerouslySetInnerHTML={{__html: home.HOME_ABILITIES_01_TEXT}}>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={6} sm={12} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item md={3} sm={3} xs={3}>
                                    <img src={qr} alt="pay" width="74" />
                                </Grid>
                                <Grid item md={9} sm={9} xs={9}>
                                    <Typography variant="h5" gutterBottom>
                                        {home.HOME_ABILITIES_02_TITLE}
                                    </Typography>
                                    <Typography dangerouslySetInnerHTML={{__html: home.HOME_ABILITIES_02_TEXT}}>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={12}>
                    <Grid container spacing={3}>
                        <Grid item md={6} sm={12} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item md={3} sm={3} xs={3}>
                                    <img src={payment} alt="pay" width="74"/>
                                </Grid>
                                <Grid item md={9} sm={9} xs={9}>
                                    <Typography variant="h5" gutterBottom>
                                        {home.HOME_ABILITIES_03_TITLE}
                                    </Typography>
                                    <Typography dangerouslySetInnerHTML={{__html: home.HOME_ABILITIES_03_TEXT}}>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={6} sm={12} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item md={3} sm={3} xs={3}>
                                    <img src={star} alt="pay" width="74" />
                                </Grid>
                                <Grid item md={9} sm={9} xs={9}>
                                    <Typography variant="h5" gutterBottom>
                                        {home.HOME_ABILITIES_04_TITLE}
                                    </Typography>
                                    <Typography dangerouslySetInnerHTML={{__html: home.HOME_ABILITIES_04_TEXT}}>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={12}>
                    <Grid container spacing={3}>
                        <Grid item md={6} sm={12} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item md={3} sm={3} xs={3}>
                                    <img src={monitoring} alt="pay" width="74"/>
                                </Grid>
                                <Grid item md={9} sm={9} xs={9}>
                                    <Typography variant="h5" gutterBottom>
                                        {home.HOME_ABILITIES_05_TITLE}
                                    </Typography>
                                    <Typography>
                                        {home.HOME_ABILITIES_05_TEXT}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={6} sm={12} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item md={3} sm={3} xs={3}>
                                    <img src={offline} alt="pay" width="74" />
                                </Grid>
                                <Grid item md={9} sm={9} xs={9}>
                                    <Typography variant="h5" gutterBottom>
                                        {home.HOME_ABILITIES_06_TITLE}
                                    </Typography>
                                    <Typography dangerouslySetInnerHTML={{__html: home.HOME_ABILITIES_06_TEXT}}>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={12}>
                    <Grid container spacing={3}>
                        <Grid item md={6} sm={12} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item md={3} sm={3} xs={3}>
                                    <img src={monitoring} alt="pay" width="74"/>
                                </Grid>
                                <Grid item md={9} sm={9} xs={9}>
                                    <Typography variant="h5" gutterBottom>
                                        {home.HOME_ABILITIES_09_TITLE}
                                    </Typography>
                                    <Typography dangerouslySetInnerHTML={{__html: home.HOME_ABILITIES_09_TEXT}}>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={6} sm={12} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item md={3} sm={3} xs={3}>
                                    <img src={offline} alt="pay" width="74" />
                                </Grid>
                                <Grid item md={9} sm={9} xs={9}>
                                    <Typography variant="h5" gutterBottom>
                                        {home.HOME_ABILITIES_08_TITLE}
                                    </Typography>
                                    <Typography dangerouslySetInnerHTML={{__html: home.HOME_ABILITIES_10_TEXT}}>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                    <Grid container spacing={10}>
                        <Grid item md={9} sm={12} xs={12}>
                            <Typography>
                                {home.HOME_ABILITIES_SUB_HEADER}
                            </Typography>
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <Button variant='contained' sx={{ width: "100%", bgcolor: "#fff", color: "#888894", fontWeight: "600", "&: hover": { bgcolor: "#fff", color: "#3ccc" } }}>
                                {home.HOME_ABILITIES_BTN}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default PaymeTools