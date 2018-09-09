import React from 'react';
import Button from '@material-ui/core/Button';
import _ from 'lodash';


export const TYPES = (erorrs) => {
    if(!_.isEmpty(erorrs)) return 'secondary';
    else return 'primary';
}
export const SubmitButton = ({ 
  text, 
  onClick, 
  errors, 
  disabled
}) => (
  <Button
    type="submit"
    disabled={disabled}
    onClick={onClick}
    variant="contained"
    color={TYPES(errors)}
  >
    {text}
  </Button>
);