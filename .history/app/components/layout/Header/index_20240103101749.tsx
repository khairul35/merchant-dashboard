'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {


    useEffect(() => {
        if (window.localStorage.getItem('isLogin') == 'true') {
        }
    }, []);


    return (
        localStorage.getItem('isLogin') == 'true' ?
        <div
            className="navbar border-b shadow-black-200"
            style={{ backgroundColor: "#158BB8", color: "#fff" }}
        >
            <h2 className="text-xl font-semibold pl-10">HOMA DESIGN</h2>
        </div>
        :
        <div
            className="navbar border-b shadow-black-200"
            style={{ backgroundColor: "#158BB8", color: "#fff" }}
        >
            <h2 className="text-xl font-semibold pl-10">HOMA DESIGN</h2>
        </div>
    )
};

export default Header;