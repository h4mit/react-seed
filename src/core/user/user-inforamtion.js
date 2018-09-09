import axios from 'axios';
import _ from 'lodash';
import config from 'react-global-configuration';


export default class USER {
     GET() {
        let conf = {};
        axios.get(`https://randomuser.me/api`)
            .then(res => {
                conf = _.assignIn({ user: res.data.results[0]}, conf);
               axios.get(window.location.origin + `/config/config.json`)
               .then(res => {
                conf = _.assignIn({ config: res.data}, conf);
                config.set(conf);
             }).catch(error => {
                conf = _.assignIn({ config: error}, conf);
             });

            }).catch(error => {
                conf = _.assignIn({ user: error}, conf);
            });
    }
}