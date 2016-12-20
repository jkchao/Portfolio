import React, {Component} from 'react';
import About from './About';
import Ability from './Ability';
import Items from './Items';

class Content extends Component {
    render() {
        return (
            <div id="Content">
                <About />
                <Ability />
                <Items />
            </div>
        );
    }
}

export default Content;