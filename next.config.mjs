import nextra from 'nextra'

const withNextra = nextra({
  // theme: 'nextra-theme-docs',
  // themeConfig: './src/theme.config.tsx',
  latex: true,
  search: {
    codeblocks: false
  }
})

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.BASE_PATH ?? '',
  images: {
    unoptimized: true
  },
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      'next-mdx-import-source-file': './src/mdx-components.js'
    }
  }
})
