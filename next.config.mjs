import 'dotenv/config';
import nextra from 'nextra';


const isGitHubPages = process.env.DEPLOY_ENV === 'gh-pages';


const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? '/demo' : '',
  assetPrefix: isGitHubPages ? '/demo/' : '',
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
