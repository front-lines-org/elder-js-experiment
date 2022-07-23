require('dotenv').config();
const sharp = require('sharp');
module.exports = {
  origin: 'https://front-lines-org.github.io/elder-js-experiment', // TODO: update this. The URL of your site's root, without a trailing slash
  lang: 'en',
  srcDir: 'src',
  distDir: 'public',
  rootDir: process.cwd(),
  build: {},
  prefix: '', // If you want your site to be built within a sub folder within your `distDir` you can use this.
  server: {},
  props: {
    hydration: 'hybrid',
    compress: false,
  },
  debug: {
    stacks: false, // output details of the stack consolidation process.
    hooks: false, // outputs the details of each hook as they are run.
    performance: false, // outputs a full performance report of how long it took to run each page.
    build: false, // gives additional details about the build process.
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncomment this hook to disabled writing your files during build.
  },
  plugins: {
    '@elderjs/plugin-markdown': {
      routes: ['blog', 'page'],
      contents: {
        blog: 'src/contents/articles', // if you want to add custom path to your route relative to the root directory
        page: 'src/contents/categories', // if you want to add custom path to your route relative to the root directory
      },
      slugFormatter: (path, fm) => fm.slug || path,
    },
    '@elderjs/plugin-browser-reload': {
      // this reloads your browser when nodemon restarts your server.
      port: 8080,
      reload: true, // if you are having issues with reloading not working, change to true.
    },
    '@elderjs/plugin-images': {
      folders: [
        {
          src: '/images/*', // glob of where your original images are. Relative to rootDir/process.cwd() defined in your elder.config.js. Careful with **.
          // src: 'articles/**/*' is also acceptable
          output: './node_modules/images/', // where files should be put within the distDir defined in your elder.config.js.
        },
      ],
      placeholder: {
        // placeholder settings. See sharp.
        resize: {
          width: 100,
          fit: sharp.fit.cover,
        },
        jpeg: {
          // resize settings for the placeholder. See sharp.
          quality: 90,
          progressive: true,
          optimizeScans: true,
          chromaSubsampling: '4:2:0',
          trellisQuantisation: true,
          quantisationTable: 2,
        },
      },
    },
    // '@elderjs/plugin-seo-check': {
    //   display: ['none'], // If the errors are too verbose remove 'warnings'
    //   writeLocation: './report.json', // if you want to write a report of errors
    // },
  },
  shortcodes: { closePattern: '}}', openPattern: '{{' },
};
