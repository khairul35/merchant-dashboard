'use client';

import { useEffect, useState } from "react";
import Component from './index.component'
import { HeaderProps } from "./index.props";

const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const onLogOut = () => {
        if(typeof window !== 'undefined') {
            window.localStorage.setItem('isLogin', 'false');
            window.location.href = '/login';
        }
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
    }, []);

    const props: HeaderProps = {
        onLogOut,
        showMenu,
        toggleMenu,
    }

    if(typeof window == 'undefined') {
        return <></>
    }
    return window.localStorage.getItem('isLogin') == 'true' ?
        (
            <Component {...props} />
        )
        : (<></>)
};

export default Header;