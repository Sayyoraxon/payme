import React, { useState } from 'react'

const FormattedInput = ({setPhoneNumber, formatphone, setFormatphone}) => {
    const getFormattedInputValue = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 9)
        let res = ""
        if (digits.length >= 0) {
            res = `${digits.slice(0, 2)}`;
        }
        if (digits.length >= 3) {
            res = `${res} ${digits.slice(2, 5)}`
        }
        if (digits.length >= 6) {
            res = `${res} ${digits.slice(5, 7)}`
        }
        if(digits.length >= 8) {
            res +=  ` ${digits.slice(7)}`
        }

        return res;
    }

    const Num = "5 000"
    console.log(typeof Number(Num.replace(/\D/g, "")))

    const [inputValue, setInputValue] = useState("")
    const handleSetInputValue = (e) => {
        const { value } = e.target;
        const formattedInputValue = getFormattedInputValue(value)
        setInputValue(formattedInputValue)
        setPhoneNumber(e.target.value)
    }
    return (
        <div className='registrdiv'
        style={{borderColor: formatphone ? "#dc3545" : ""}}>
            <input defaultValue={'+998'}/>
            <input
                maxLength={12}
                value={inputValue}
                onChange={handleSetInputValue}
                type='tel'
                placeholder=''
                onFocus={()=>{
                    setFormatphone && setFormatphone(false)
                }}
            />
        </div>
    )
}

export default FormattedInput