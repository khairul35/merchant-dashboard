export interface LoginProps  {
    username: string;
    password: string;
    error: string;
    onLogin: () => void;
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
};