import { Button, Paper } from '@mui/material'
import '../App.css'
import FormattedInputs from './TextMaskCustom'
import { NavLink } from 'react-router-dom'

const Register = ({ home }) => {
    return (
        <div className='register'>
            <Paper sx={{ mt: 2, p: 5 }}>
                <img src="https://cdn.payme.uz/logo/payme_color.svg" alt="logo" width="100" />
                <h2>{home.BTN_ENTER}</h2>
                <p style={{ margin: "5px 15px" }}><small><b>{home.INPUT_PHONE_LABEL}</b></small></p>
                <FormattedInputs />
                <p style={{ margin: "20px 0 5px 15px" }}><small><b>{home.INPUT_PASSWORD_LABEL}</b></small></p>
                <input type="password" placeholder={home.INPUT_PASSWORD_PLACEHOLDER}
                    className='regtrinput' />
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "40px"}}>
                    <Button sx={{color: "#2aced0", fontWeight: "bold", mr: 3}}>
                        <NavLink to="/">
                           {home.BTN_BACK} 
                        </NavLink>
                    </Button>
                    <Button variant="contained"
                    sx={{bgcolor: "#2aced0", fontWeight: "bold", color: "#fff", "&:hover": {bgcolor: "#4ed1d0"}}}>
                        {home.BTN_REGISTRATION}
                    </Button>
                </div>
                <Button sx={{color: "#2aced0", width: "100%", fontWeight: "600", mt: 2}}>
                    {home.INPUT_PASSWORD_RECOVER}
                </Button>

            </Paper>
        </div>
    )
}

export default Register