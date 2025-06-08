import 'dotenv/config';
import nextra from 'nextra';


const isProd = process.env.NEXT_PUBLIC_ENV === 'production';


console.log(process.env)
console.log(isProd)
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
