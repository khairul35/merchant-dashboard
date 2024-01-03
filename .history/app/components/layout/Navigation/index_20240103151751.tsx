'use client'

import Component from "./index.component";
import { NavigationProps } from "./index.props";
import { useState, useEffect } from 'react';
import { menus } from "./menus";

const Navigation = () => {

    const [currentPath, setCurrentPath] = useState<string>('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const props: NavigationProps = {
        menus,
        path: currentPath,
        setCurrentPath,
    }

    return window.localStorage.getItem('isLogin') == 'true' ?
        (
            <Component {...props} />
        )
        : (<></>)
};

export default Navigation;
