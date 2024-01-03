export interface LoginProps  {
    username: string;
    password: string;
    error: string;
    login: () => void;
};