import React from 'react';
import { Button } from 'mdbreact';
import _ from 'lodash';


export const TYPES = (erorrs) => {
    if(!_.isEmpty(erorrs)) return 'danger';
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
    color={TYPES(errors)}
  >
    {text}
  </Button>
);