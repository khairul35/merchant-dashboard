/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    async generateStaticParams() {
        return {
            '/': { page: '/' },
            '/login': { page: '/login' },
            '/home': { page: '/home' },
            '/agents': { page: '/agents' },
            '/merchants': { page: '/merchants' },
            '/users': { page: '/users' },
            '/settings': { page: '/settings' },
        };
    },
}
 
module.exports = nextConfig
