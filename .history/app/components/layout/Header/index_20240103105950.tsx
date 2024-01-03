'use client';

import { useEffect } from "react";
import Component from './index.component'
import { HeaderProps } from "./index.props";

const Header = () => {

    const onLogOut = () => {
        window.localStorage.set('isLogin', 'true');
    };

    useEffect(() => {
        if (window.localStorage.getItem('isLogin') == 'true') {
        }
    }, []);

    const props: HeaderProps = {
        onLogOut
    }

    return (
        <Component {...props} />
    )
};

export default Header;