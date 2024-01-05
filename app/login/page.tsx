'use client';
import { useState, useEffect } from "react";
import authApi from '@/api/auth';
import { useRouter } from 'next/navigation';
import { LoginProps } from "./index.props";
import Component from "./index.component";
import { useNotification } from "../components/notification/NotificationContext.client";

const Login = () => {
    const { showNotification, notification } = useNotification();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (localStorage.getItem('isLogin') === 'true') {
            router.push('/home');
        }
    }, []);

    const onLogin = async () => {
        showNotification('Logging In', 'loading');

        if (!username || !password) {
            setError('Username and Password are required');
            showNotification('Oops.. failed to log in', 'error');
            return;
        } else {
            try {
                await authApi.login(username, password);
                localStorage.setItem('isLogin', 'true');
                router.push('/home');
                showNotification('Successfully Logged In', 'success');
            } catch (err) {
                showNotification('Oops.. failed to log in', 'error');
                setError('Issues with logging in. Please contact support!');
            }
        }
    };

    const props: LoginProps = {
        username,
        password,
        error,
        notification,
        setUsername,
        setPassword,
        onLogin,
    };

    return <Component {...props} />;
};

export default Login;

