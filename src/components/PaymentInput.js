import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import InputBase from '@mui/material/Input';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="0 000 000 000"
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



export default function FormatInputs({home}) {
    const [values, setValues] = React.useState({
        textmask: '',
        numberformat: '1320',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    console.log(values.textmask)


    return (
        <>
            <InputBase 
                sx={{bgcolor: "#fff","&::before": {borderBottom: 0}, "&::after": {borderBottom: 0},
                ml: 1, flex: 1, border: "1px solid #b8b2b2", p: "2px 10px", width: "300px", maxWidth: "300px",
                 borderRadius: "5px", minWidth: "220px"}}
                value={values.textmask}
                onChange={handleChange}
                name="textmask"
                id="formatted-text-mask-input"
                placeholder={home.INPUT_AMOUNT_PLACEHOLDER}
                inputComponent={TextMaskCustom}
            />

        </>
    );
}
