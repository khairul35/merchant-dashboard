'use client';

import { useEffect } from "react";
import Component from './index.component'

const Header = () => {

    const onLogOut = () => {
        window.localStorage.set('isLogin', 'true');
    };

    useEffect(() => {
        if (window.localStorage.getItem('isLogin') == 'true') {
        }
    }, []);


    return (
        <Component />
    )
};

export default Header;