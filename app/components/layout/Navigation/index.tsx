'use client'

import Component from "./index.component";
import { NavigationProps } from "./index.props";
import { useState, useEffect } from 'react';
import { menus } from "./menus";

const Navigation = (style?: React.CSSProperties, className?: string) => {

    const [currentPath, setCurrentPath] = useState<string>('');

    useEffect(() => {
        if(typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    const props: NavigationProps = {
        menus,
        path: currentPath,
        setCurrentPath,
        style,
        className,
    }
    if(typeof window == 'undefined') {
        return <></>
    }
        return window.localStorage.getItem('isLogin') == 'true' ?
            (
                <Component {...props} />
            )
            : (<></>)
    return (<></>)
};

export default Navigation;
