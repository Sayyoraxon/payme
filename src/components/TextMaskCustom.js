import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import InputBase from '@mui/material/Input';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="+998 00 000 00 00"
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};



const FormattedInputs = () => {
    const [values, setValues] = React.useState({
        textmask: '+998',
        numberformat: '1320',
    });


    const handleChange = (event) => {
     
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        console.log(event.target.value.slice(5).split(" ").join(""));   
    };
   

  

    return (
        <>
            <InputBase 
                sx={{bgcolor: "#fff","&::before": {borderBottom: 0}, "&::after": {borderBottom: 0},
                ml: 1, flex: 1, border: "1px solid #b8b2b2", p: "2px 10px", width: "300px", maxWidth: "300px",
                 borderRadius: "5px", minWidth: "220px"}}
                value={values.textmask}
                onChange={(e)=>{
                    handleChange(e)
                }}
                name="textmask"
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
            />

        </>
    );
}

export default FormattedInputs
