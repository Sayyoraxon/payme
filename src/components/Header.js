import React, { useState } from 'react'
import { AppBar, Box, Button, IconButton, Paper, Toolbar } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import uzflag from "../images/uzflag.png"
import rusflag from "../images/ruflag.png"
import engflag from "../images/engflag.png"
import { NavLink } from 'react-router-dom';

const Header = ({ home, setHome, uz, ru, eng, }) => {

    const [lang, setLang] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)

    return (
        <>
            <AppBar sx={{ bgcolor: "#fff", zIndex: 1 }}>
                <Toolbar className='container'
                    sx={{ bgcolor: "#fff", height: "100px", "@media (max-width:900px)": { height: "70px" } }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <NavLink to="/">
                            <img src="https://cdn.payme.uz/logo/payme_color.svg" alt="logo" width="100" />
                        </NavLink>
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                        <IconButton sx={{ mr: 2, fontSize: "14px", fontWeight: "600", "&:hover": { bgcolor: "#fff", color: "#4ed1d0" } }}>
                            <SwapHorizIcon sx={{ mr: 0.5 }} />
                            <NavLink to="/payment">
                                {home.HOME_HEADER_MENU_PAYMENT}
                            </NavLink>
                        </IconButton>

                        <IconButton sx={{ mr: 2, fontSize: "14px", fontWeight: "600", "&:hover": { bgcolor: "#fff", color: "#4ed1d0" } }}>
                            <HeadsetMicIcon sx={{ mr: 0.5 }} />
                            {home.HOME_HEADER_MENU_HELP}
                        </IconButton>
                        <IconButton onClick={() => { setLang(!lang) }}
                            sx={{ fontSize: "14px", fontWeight: "600", position: "relative", "&:hover": { bgcolor: "#fff", color: "#4ed1d0" } }}>
                            <LanguageIcon sx={{ mr: 0.5 }} />
                            {home === uz ? home.LANG_UZ : home === ru ? home.LANG_RU : home.LANG_EN}
                            {lang && <Paper sx={{ position: "absolute", top: "50px", left: '-30px', p: 2, width: "140px" }}>
                                <IconButton sx={{ display: "block", fontSize: "16px", alignItems: "center", "&:hover": { bgcolor: "#fff", color: "#4ed1d0" } }}
                                    onClick={() => setHome(uz)}>
                                    <img src={uzflag} alt="uzbflag" width="20" style={{ marginRight: "14px", position: "relative", top: "5px" }} />
                                    {home.LANG_UZ}
                                </IconButton>
                                <IconButton sx={{ display: "block", fontSize: "16px", alignItems: "center", "&:hover": { bgcolor: "#fff", color: "#4ed1d0" } }}
                                    onClick={() => setHome(ru)}>
                                    <img src={rusflag} alt="ruflag" width="24" style={{ marginRight: "14px", position: "relative", top: "5px", right: "2px" }} />
                                    {home.LANG_RU}
                                </IconButton>
                                <IconButton sx={{ display: "block", fontSize: "16px", alignItems: "center", "&:hover": { bgcolor: "#fff", color: "#4ed1d0" } }}
                                    onClick={() => setHome(eng)}>
                                    <img src={engflag} alt="enflag" width="20" style={{ marginRight: "14px", position: "relative", top: "5px" }} />
                                    {home.LANG_EN}
                                </IconButton>
                            </Paper>}
                        </IconButton>
                        <Button variant='contained' color="secondary" sx={{ ml: 3, fontSize: "12px", fontWeight: "600" }}>
                            {home.HOME_FOOTER_MENU_VACANCY}
                        </Button>
                    </Box>
                    <IconButton onClick={() => {
                        setMobileNav(!mobileNav)
                        setLang(false)
                    }}
                        sx={{ color: "#2aced0", "&: hover": { bgcolor: "#fff" }, display: { md: "none" } }}>
                        <MenuIcon sx={{ fontSize: "40px" }} />
                    </IconButton>
                </Toolbar>
                {mobileNav &&
                    <Box sx={{ px: 5, py: 2 }}>
                        <Button variant="contained" color="secondary" size="large" sx={{ width: "100%" }}>
                            {home.HOME_FOOTER_MENU_VACANCY}
                        </Button>
                        <IconButton sx={{ mr: 2, display: "flex", fontSize: "14px", fontWeight: "600", "&:hover": { bgcolor: "inherit", color: "#4ed1d0" } }}>
                            <SwapHorizIcon sx={{ mr: 1 }} />
                            <NavLink to="/payment">{home.HOME_HEADER_MENU_PAYMENT}</NavLink>
                        </IconButton>
                        <IconButton sx={{ mr: 2, display: "flex", fontSize: "14px", fontWeight: "600", "&:hover": { bgcolor: "inherit", color: "#4ed1d0" } }}>
                            <HeadsetMicIcon sx={{ mr: 1 }} />
                            {home.HOME_HEADER_MENU_HELP}
                        </IconButton>
                        <IconButton onClick={() => setLang(!lang)}
                            sx={{ mr: 2, display: "flex", fontSize: "14px", fontWeight: "600", "&:hover": { bgcolor: "inherit", color: "#4ed1d0" } }}>
                            <LanguageIcon sx={{ mr: 1 }} />
                            {home === uz ? home.LANG_UZ : home === ru ? home.LANG_RU : home.LANG_EN}
                        </IconButton>
                        {lang && <div style={{ paddingLeft: "15px" }}>
                            <IconButton sx={{ display: "block", fontSize: "16px", alignItems: "center", "&:hover": { bgcolor: "#fff", color: "#4ed1d0" } }}
                                onClick={() => setHome(uz)}>
                                <img src={uzflag} alt="uzbflag" width="20" style={{ marginRight: "14px", position: "relative", top: "5px" }} />
                                {home.LANG_UZ}
                            </IconButton>
                            <IconButton sx={{ display: "block", fontSize: "16px", alignItems: "center", "&:hover": { bgcolor: "#fff", color: "#4ed1d0" } }}
                                onClick={() => setHome(ru)}>
                                <img src={rusflag} alt="ruflag" width="24" style={{ marginRight: "14px", position: "relative", top: "5px", right: "2px" }} />
                                {home.LANG_RU}
                            </IconButton>
                            <IconButton sx={{ display: "block", fontSize: "16px", alignItems: "center", "&:hover": { bgcolor: "#fff", color: "#4ed1d0" } }}
                                onClick={() => setHome(eng)}>
                                <img src={engflag} alt="enflag" width="20" style={{ marginRight: "14px", position: "relative", top: "5px" }} />
                                {home.LANG_EN}
                            </IconButton>
                        </div>
                        }
                    </Box>
                }
            </AppBar>
        </>
    )
}

export default Header