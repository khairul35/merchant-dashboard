'use client';
import { useState } from "react";
import authApi from '@/api/auth';
import { useRouter } from 'next/navigation';
import { LoginProps } from "./index.props";
import Component from "./index.component";

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    if (localStorage.getItem('isLogin') == 'true') {
        router.push('/dashboard');
    }

    const login = async () => {
        /** validate credential of user */
        if (!username && !password) {
            setError('Username and Password is required');
            return;
        } else if (username.length <= 0 && password.length <= 0) {
            setError('Username and Password is required');
            return;
        } else if (username.length <= 0) {
            setError('Username is required');
            return;
        } else if (password.length <= 0) {
            setError('Password is required');
            return;
        } else {
            setError('');
        }

        /** call request to API */
        await authApi.login(username, password)
            .then(() => {
                // localStorage.setItem('accessToken', data.accessToken);
                // localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('isLogin', 'true');
                router.push('/dashboard');
                window.location.href = '/dashboard';
            })
            .catch((err) => {
                setError(err.message || 'Issues with Log In your account, Please contact customer support!')
            });
    };

    const LoginError = (props: any) => {
        return (
            <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error}</span>
            </div>
        )
    };

    const props: LoginProps = {
        username,
        password,
        error,
        login,
    };

    return (
        <Component {...props} />
    )
};

export default Login;
