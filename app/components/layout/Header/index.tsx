'use client';

import { useEffect } from "react";
import Component from './index.component'
import { HeaderProps } from "./index.props";

const Header = () => {

    const onLogOut = () => {
        window.localStorage.setItem('isLogin', 'false');
        window.location.href = '/login';
    };

    useEffect(() => {
        if (window.localStorage.getItem('isLogin') == 'true') {
        }
    }, []);

    const props: HeaderProps = {
        onLogOut
    }

    return window.localStorage.getItem('isLogin') == 'true' ?
        (
            <Component {...props} />
        )
        : (<></>)
};

export default Header;