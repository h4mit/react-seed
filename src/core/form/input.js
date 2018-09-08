
import React, { Component } from 'react';
// import Input from '@material-ui/core/Input';
// import { toast } from 'react-toastify';
// import _ from 'lodash';
import './form.css';

/*  
    Touched

    -webkit-box-shadow: 0 1px 0 0 #dc3545;
    box-shadow: 0 1px 0 0 #dc3545;
    border-bottom: 1px solid #dc3545;
    */

export class AInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleChangeValue(e) { 
        this.setState({ value: e.target.value });
        this.props.onChange(e);    
    }

    componentDidMount() {
        this.setState({ value: this.props.value })
        // this.props.value = this.state.value;
    }

    HandleError = (label, erorrs) => {
        console.log('error', erorrs, label);
        // if (!_.isEmpty(erorrs))
        //     toast.error(label + ' : ' + erorrs);
    }

    HandleTouched = (touched) => {
        console.log('touched', touched);
    }


    render() {
        // const  value  = this.props.value;
        // this.state.s
        return (
            <div>
                <input name={this.props.label} id={'a-input-' + this.props.label} type={this.props.type} icon={this.props.icon} value={this.state.value}
                    onChange={this.handleChangeValue} />
                {/* {this.HandleError(this.props.value, this.props.error)}{this.HandleTouched(this.props.touched)} */}
                {this.props.error && this.props.touched && <div className="field-error">{this.props.error}</div>}
            </div>
        );
    }
}

