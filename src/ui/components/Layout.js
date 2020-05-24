import React, { Fragment } from 'react';
import Navbar from './Navbar';
import './styles/Layout.scss';

export default function Layout(props) {
    return (
        <Fragment>
            <Navbar />
            <section className="main-container">
                <div className="main-inner">
                    {props.children}
                </div>
            </section>
        </Fragment>
    )
};