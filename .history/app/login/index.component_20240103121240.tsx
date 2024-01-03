'use client';
import { LoginProps } from "./index.props";

const Component = (props: LoginProps) => {
    const {
        error,
        setUsername,
        setPassword,
        onLogin,
    } = props;

    const LoginError = () => {
        return (
            <div>
                test
            </div>
            // <div className="alert alert-error max-w-2xl">
            //     <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            //     <span>{error}</span>
            // </div>
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
        </main>
    )
};

export default Component;
