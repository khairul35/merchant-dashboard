'use client';
import { useState } from "react";
import authApi from '@/api/auth';
import { useRouter } from 'next/navigation';
import { LoginProps } from "./index.props";
import Component from "./index.component";
import { useNotification } from "../components/notification/NotificationContext";
import { NotificationProvider } from "../components/notification/NotificationContext";

const Login = () => {
    const { showNotification } = useNotification();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    if (localStorage.getItem('isLogin') == 'true') {
        router.push('/dashboard');
    }

    const onLogin = async () => {
        showNotification('Logging In', 'loading');

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
                showNotification('Successfully Logged In', 'success');
                localStorage.setItem('isLogin', 'true');
                router.push('/dashboard');
                window.location.href = '/dashboard';
            })
            .catch((err) => {
                setError(err.message || 'Issues with Log In your account, Please contact customer support!');
                showNotification('Oopss.. failed to logging in', 'error');
            });
    };

    const props: LoginProps = {
        username,
        password,
        error,
        setUsername,
        setPassword,
        onLogin,
    };

    return (
        <NotificationProvider>
            <Component {...props} />
        </NotificationProvider>
    )
};

export default Login;
