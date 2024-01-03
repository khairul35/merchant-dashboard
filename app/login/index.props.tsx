export interface LoginProps  {
    username: string;
    password: string;
    error: string;
    notification: any;
    onLogin: () => void;
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
};