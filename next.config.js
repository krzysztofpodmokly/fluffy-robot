/** @type {import('next').NextConfig} */
const nextConfig = {

  // make <Image /> from 'next/image' to work
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**'
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
        pathname: '**'
      }
    ]
  }
}

module.exports = nextConfig
