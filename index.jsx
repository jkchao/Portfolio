import React from 'react';
import { render } from 'react-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';


render(
    <div>
        <Header />
        <Content />
        <Footer />
    </div>,
    document.getElementById('box')
);