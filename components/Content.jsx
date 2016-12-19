import React, {Component} from 'react';
import About from './About.jsx';
import Ability from './Ability.jsx';
import Items from './Items.jsx';

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