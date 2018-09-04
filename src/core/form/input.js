
import React from 'react';
import { Input } from 'mdbreact';
// import { toast } from 'react-toastify';
// import _ from 'lodash';
import './form.css';

/*  
    Touched

    -webkit-box-shadow: 0 1px 0 0 #dc3545;
    box-shadow: 0 1px 0 0 #dc3545;
    border-bottom: 1px solid #dc3545;
    */

export const HandleError = (label, erorrs) => {
    console.log('error',erorrs, label);
    // if (!_.isEmpty(erorrs))
    //     toast.error(label + ' : ' + erorrs);
}

export const HandleTouched = (touched) => {
    console.log('touched',touched);
}
export const AInput = ({
    label,
    type,
    error,
    value,
    onChange,
    onBlur,
    icon,
    touched,
    disabled
}) => (
        <div>
            <Input name={label} id={'a-input-' + label} label={label} type={type} value={value} icon={icon} onChange={onChange} onBlur={onBlur} />
            {HandleError(value ,error)}{HandleTouched(touched)}    
            {error && touched && <div className="field-error">{error}</div>}
        </div>
    );