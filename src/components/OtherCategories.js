import { Button, Grid, IconButton, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BackupIcon from '@mui/icons-material/Backup';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { NavLink } from 'react-router-dom';

const OtherCategories = ({ home }) => {
    return (
        <>
            <Grid container rowSpacing={8} className='padding' sx={{ "@media (max-width: 1139px)": { px: "60px" }, "@media (min-width: 1140px)": { width: "1140px", mr: "auto", ml: "auto" } }}>
                <Grid item md={12} sm={12} xs={12}>
                    <Grid container >
                        <Grid item md={10.5} sm={9} xs={12}>
                            <Typography variant='h4'>
                                {home.HOME_OTHER_HEADER}
                            </Typography>
                        </Grid>
                        <Grid item md={1.5} sm={3}>
                            <Button variant='contained' sx={{ width: "160px", bgcolor: "#fff", color: "#888894", fontWeight: "600", "&: hover": { bgcolor: "#fff", color: "#3ccc" }, display: { md: "block", sm: "block", xs: "none" } }}>
                                <NavLink to="payment">
                                    {home.HOME_OTHER_BTN}
                                </NavLink>

                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} sx={{ textAlign: 'center' }}>
                    <IconButton sx={{ color: "#000", width: "150px", "&: hover": { bgcolor: "inherit", color: "#3cc" } }}>
                        <NavLink to="/payment">
                            <LanguageIcon sx={{ fontSize: "64px" }} />
                            <Typography>
                                {home.HOME_OTHER_CAT_100}
                            </Typography>
                        </NavLink>
                    </IconButton>
                    <IconButton sx={{ color: "#000", width: "150px", "&: hover": { bgcolor: "inherit", color: "#3cc" } }}>
                        <NavLink to="/payment">
                            <PersonalVideoIcon sx={{ fontSize: "64px" }} />
                            <Typography>
                                {home.HOME_OTHER_CAT_200}
                            </Typography>
                        </NavLink>
                    </IconButton>
                    <IconButton sx={{ color: "#000", width: "150px", "&: hover": { bgcolor: "inherit", color: "#3cc" } }}>
                        <NavLink to="/payment">
                            <BeachAccessIcon sx={{ fontSize: "64px" }} />
                            <Typography>
                                {home.HOME_OTHER_CAT_425}
                            </Typography>
                        </NavLink>
                    </IconButton>
                    <IconButton sx={{borderRadius: "5px", color: "#000", width: "150px", "&: hover": { bgcolor: "inherit", color: "#3cc" } }}>
                        <NavLink to="/payment">
                            <SportsEsportsIcon sx={{ fontSize: "64px" }} />
                            <Typography>
                                {home.HOME_OTHER_CAT_450}
                            </Typography>
                        </NavLink>
                    </IconButton>
                    <IconButton sx={{borderRadius: "5px", color: "#000", width: "150px", "&: hover": { bgcolor: "inherit", color: "#3cc" } }}>
                        <NavLink to="/payment">
                            <BackupIcon sx={{ fontSize: "64px" }} />
                            <Typography>
                                {home.HOME_OTHER_CAT_475}
                            </Typography>
                        </NavLink>
                    </IconButton>
                    <IconButton sx={{borderRadius: "5px", color: "#000", width: "150px", "&: hover": { bgcolor: "inherit", color: "#3cc" } }}>
                        <NavLink to="/payment">
                            <FlightLandIcon sx={{ fontSize: "64px" }} />
                            <Typography>
                                {home.HOME_OTHER_CAT_500}
                            </Typography>
                        </NavLink>
                    </IconButton>
                </Grid>
                <Grid item xs={12} sx={{ display: { md: "none", sm: "none", xs: "block" }, textAlign: "center" }}>
                    <Button variant="contained" sx={{ mb: 5, width: "100%", fontWeight: "600", bgcolor: "#abebed", color: "#02bdbf", "&: hover": { bgcolor: "#81e8e9" } }}>
                        <NavLink to="/payment">
                            {home.HOME_OTHER_BTN}
                        </NavLink>
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default OtherCategories