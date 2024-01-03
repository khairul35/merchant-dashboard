'use client';

import { useEffect } from "react";
import Component from './index.component'

const Header = () => {


    useEffect(() => {
        if (window.localStorage.getItem('isLogin') == 'true') {
        }
    }, []);


    return (
        <Component />
    )
};

export default Header;