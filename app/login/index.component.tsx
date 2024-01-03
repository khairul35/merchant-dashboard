'use client';
import { LoginProps } from "./index.props";
import Notification from "../components/notification";

const Component = (props: LoginProps) => {
    const {
        error,
        notification,
        setUsername,
        setPassword,
        onLogin,
    } = props;

    const LoginError = () => {
        return (
            <div className="text-red-500 italic">
                <span>{error}</span>
            </div>
        )
    }

    return (
        <main className="min-h-screen items-center justify-between p-24 bg-bg-color">
            <div>
                <div className="flex flex-col items-center justify-center">
                    <img
                        className="w-64 h-64"
                        src="/assets/ho-tak-logo.png"
                        alt="Ho Tak Technology"
                    />
                </div>
                <h1 className="text-5xl text-center items-center">Merchant App Dashboard</h1>
                <div className="flex items-center justify-center h-full pt-20">
                    <input
                        type="text"
                        placeholder="Username"
                        className="input input-bordered input-primary w-full max-w-xs bg-white"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-center h-full pt-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered input-primary w-full max-w-xs bg-white"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-center h-full pt-4">
                    <button
                        className="btn btn-primary w-full max-w-xs"
                        onClick={onLogin}
                    >
                        Login
                    </button>
                </div>
                <div className="flex items-center justify-center h-full pt-4">
                    {error && <LoginError />}
                </div>
            </div>
            {notification ?
                <Notification
                    message={notification?.message}
                    type={notification?.type }
                    closeMessage={() => {} /* Implement close method if needed */}
                /> : <></>
            }
        </main>
    )
};

export default Component;
