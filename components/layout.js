import React from 'react';

import Header from './Header';

const layoutStyle = {
    margin: "50px auto",
    maxWidth: 640,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => {

    return (
        <div style={layoutStyle}>
            <Header />
            {props.children}
        </div>        
    );

};

export default Layout;