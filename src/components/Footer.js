import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid, Typography } from '@mui/material';
import logo from '../images/compliant_logo.jpg'

const Footer = ({ home }) => {
    return (
        <Grid container columnSpacing={2} className='padding' sx ={{"@media (max-width: 1139px)": {px: "60px"}, "@media (min-width: 1140px)": {width: "1140px", mr: "auto", ml: "auto"}}}>
            <Grid item md={4} sm={6} xs={12}>
                <Typography sx={{ color: "#888894" }} gutterBottom>
                    {home.HOME_FOOTER_PHONE_HEADER}
                </Typography>
                <Typography variant='h6'>1350</Typography>
                <Typography>
                    Payme
                </Typography>
                <Typography dangerouslySetInnerHTML={{ __html: home.FOOTER.ADDRESS }} gutterBottom>
                </Typography>
                <Typography sx={{ textDecoration: "underline", cursor: "pointer", "&:hover": { color: "#2aced0", textDecoration: "none" } }}>
                    {home.FOOTER.REQUISITES.TITLE}
                </Typography>
                <Grid container sx={{ my: 2 }}>
                    <TelegramIcon sx={{ color: "#2aced0" }} fontSize='large' />
                    <FacebookIcon sx={{ mx: 1, color: "#007bff" }} fontSize='large' />
                    <InstagramIcon sx={{ color: "#dc3545" }} fontSize='large' />
                </Grid>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <Typography sx={{ textDecoration: "underline", cursor: "pointer", "&:hover": { color: "#2aced0", textDecoration: "none" } }} gutterBottom>
                    {home.HOME_FOOTER_MENU_DEVELOPERS}
                </Typography>
                <Typography sx={{ textDecoration: "underline", cursor: "pointer", "&:hover": { color: "#2aced0", textDecoration: "none" } }} gutterBottom>
                    {home.HOME_FOOTER_MENU_BLOG}
                </Typography>
                <Typography sx={{ mb: 4, textDecoration: "underline", cursor: "pointer", "&:hover": { color: "#2aced0", textDecoration: "none" } }} gutterBottom>
                    {home.HOME_FOOTER_MENU_VACANCY}
                </Typography>
                <img src={logo} alt="logo" width="100" />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                <Grid container columnSpacing={2}>
                    <Grid item md={12} sm={6} xs={12}>
                        <Typography sx={{ textDecoration: "underline", cursor: "pointer", "&:hover": { color: "#2aced0", textDecoration: "none" } }} gutterBottom>
                            {home.HOME_FOOTER_MENU_PRIVACY_POLICY}
                        </Typography>
                        <Typography sx={{ textDecoration: "underline", cursor: "pointer", "&:hover": { color: "#2aced0", textDecoration: "none" } }} gutterBottom>
                            {home.HOME_FOOTER_MENU_TERMS}
                        </Typography>
                        <Typography sx={{ textDecoration: "underline", cursor: "pointer", "&:hover": { color: "#2aced0", textDecoration: "none" } }} gutterBottom>
                            {home.HOME_FOOTER_MENU_LICENSE_PAYMENT_ORGANIZATION}
                        </Typography>
                    </Grid>
                    <Grid item md={12} sm={6} xs={12}>
                        <Typography sx={{ textDecoration: "underline", cursor: "pointer", "&:hover": { color: "#2aced0", textDecoration: "none" } }} gutterBottom>
                            {home.HOME_FOOTER_MENU_LICENSE_DATA_NETWORK}
                        </Typography>
                        <Typography sx={{ textDecoration: "underline", cursor: "pointer", "&:hover": { color: "#2aced0", textDecoration: "none" } }} gutterBottom>
                            {home.HOME_FOOTER_MENU_ENVIRONMENTAL_POLICY}
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item md={12} sx={{mt: 2}}>
                <Typography sx={{ color: "#888894" }}>
                    &copy; 2013-2024. {home.HOME_FOOTER_COPYRIGHT}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer