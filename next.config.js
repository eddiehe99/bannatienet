/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx'
})

module.exports = withNextra({
  output: 'export',
  distDir: 'dist',
  basePath: process.env.BASE_PATH ?? '',
  images: {
    unoptimized: true
  }
})
