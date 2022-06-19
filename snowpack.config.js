// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    "public/about": '/about',
    "public/tips": '/tips'
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: 'http://breakupsurvival.guide',
    // put the build files in /docs
    out: 'docs',
    // put the meta snowpack build files under snowpack instead of _snowpack since Github special-cases underscore prefixed folders
    metaUrlPath: 'snowpack'
  },
};
