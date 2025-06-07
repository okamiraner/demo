import nextra from 'nextra'


const nextConfig = {
  output: 'export',
}

const withNextra = nextra({

})


export default withNextra({
  ...nextConfig,
  contentDirBasePath: '/content',
})
