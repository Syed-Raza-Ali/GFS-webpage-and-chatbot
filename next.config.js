/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig;

// const nextConfig = {
//     images : {
//         domains : ["pbs.twimg.com","i.ibb.co"]
//     }
// }
  
// const nextconfigg = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'example.com',
//           port: '',
//           pathname: '/**',
//         },
//         {
//           protocol: 'https',
//           hostname: 'anotherdomain.com',
//           port: '',
//           pathname: '/**',
//         },
//       ],
//     },
//   };
  
// module.exports = nextConfig
