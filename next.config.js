/** @type {import('next').NextConfig} */
const nextConfig = {
    async exportPathMap() {
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
