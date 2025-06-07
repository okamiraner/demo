import 'dotenv/config';
import nextra from 'nextra';


const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/demo' : '',
  assetPrefix: isProd ? '/demo/' : '',
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
