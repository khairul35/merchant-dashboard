const resource = "/api/auth";

        /** Since No APIs yet, override those request */
const api = {
    async login(username: string, password: string) {
        return 'success'
    },
    async refreshToken() {
        return 'success'
    },
    async logout() {
        return 'success'
    },
    async logoutAllDevice() {
        return 'success'
    },
};

export default api;
