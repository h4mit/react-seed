This project was seed with need requirement for react project!.


## Table of Dependencies

- [formik](https://github.com/jaredpalmer/formik) for handle form validation ([yup](https://github.com/jquense/yup) Object schema).
- [react-toastify](https://github.com/fkhadra/react-toastify) for React notification made easy.
```
 import React, { Component } from 'react';
  import { toast } from 'react-toastify';

  class Position extends Component {
    notify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });

    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT
    });
    
    toast.warn("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT
    });

    toast.info("Info Notification !", {
      position: toast.POSITION.BOTTOM_CENTER
    });

    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar'
    });
  };

    render(){
      return <button onClick={this.notify}>Notify</button>;
    }
  }
```
- [react-intl-universal](https://github.com/alibaba/react-intl-universal) for multilingual (internationalization) website.
```
import intl from 'react-intl-universal';

{intl.get('SIMPLE')}
{intl.get('HELLO', {name:'H4mit', where:'Aroin'}) // "with parameters"
// { "TIP": "This is <span style='color:red'>HTML</span>" }
{intl.getHTML('TIP');} // with renderer HTML 
{intl.get('SIMPLE').d('default message')} // with default value.
```
- [BizCharts](https://github.com/alibaba/BizCharts) for show chart and graph in the dashboard.
- [lodash](https://github.com/lodash/lodash) A modern JavaScript utility library delivering modularity, performance, & extras.
```
import _ from 'lodash'
_.merge({}, {foo: 'bar'})
```
- [Axios](https://github.com/axios/axios) Handle Rest API (Promise based HTTP).
```
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
```
- [js-cookie](https://github.com/js-cookie/js-cookie) A simple, lightweight JavaScript API for handling browser cookies.
```
Cookies.set('name', 'value', { expires: 7, path: '' });
Cookies.get('name'); // => 'value'
```
- [mdbootstrap](https://mdbootstrap.com/react) for ui component.
## other ui library for react 
- [material-ui](https://material-ui.com)
- [ant.design](https://ant.design/)
- [evergreen](https://github.com/segmentio/evergreen)


## Supported

If you have ideas for more “How To” recipes that should be on this page, [Issues](https://github.com/h4mit/react-seed/issues) 