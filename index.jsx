import React from 'react';
import { render } from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';


render(
    <div>
        <Header />
        <Content />
        <Footer />
    </div>,
    document.getElementById('box')
);