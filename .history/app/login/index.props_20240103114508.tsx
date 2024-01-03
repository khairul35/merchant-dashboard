export interface LoginProps  {
    username: string;
    password: string;
    error: string;
    onLogin: () => void;
};