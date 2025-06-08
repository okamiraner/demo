import nextra from 'nextra';


const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES ? '/demo' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/demo/' : '',
  images: {
    unoptimized: true,
  },
};

const withNextra = nextra({

});


export default withNextra({
  ...nextConfig,
  contentDirBasePath: '/content',
});
