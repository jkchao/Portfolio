import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div id="Foot">
                <Grid fluid>
                    <div className="Foot-box">
                        <p className="text-justify">
                            So, that is some information about me. <br />
                            At last, i want to share words about the feature and life.
                        </p>
                        <p className="text-center">
                            我走过山时，山不说话。<br />
                            我路过海时，海不回答。<br />
                            <time>-- 来自网络</time>
                        </p>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Footer;