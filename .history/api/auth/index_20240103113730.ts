const resource = "/api/auth";

        /** Since No APIs yet, override those request */
const api = {
    login(username: string, password: string) {
        return 'success'
    },
    refreshToken() {
        return 'success'
    },
    logout() {
        return 'success'
    },
    logoutAllDevice() {
        return 'success'
    },
};

export default api;
