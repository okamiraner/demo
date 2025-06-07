import type { NextConfig } from 'next';
import nextra from 'nextra';


const nextConfig: NextConfig = {
  // output: 'export',
};

const withNextra = nextra({
  contentDirBasePath: '/content',
});


export default withNextra({
  ...nextConfig,
  ...withNextra,
});
