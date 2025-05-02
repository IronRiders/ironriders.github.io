const eleventySass = require('eleventy-sass');
const glob = require('glob');
const Image = require('@11ty/eleventy-img');
const path = require('path');

(async () => {
  let images = glob.globSync('./assets/**/*.{jpg,jpeg,png,webp}')
  images.forEach(file => {
    Image(file, {
      filenameFormat: function (id, src, width, format, options) { 
        return `${path.parse(src).name}-${width}.${format}`;
      },
      outputDir: './site/img/',
      formats:['png'],
      widths: [100, 250, 500, "auto"]
    })
  });
})();

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.setPugOptions({ doctype: 'html' });
  eleventyConfig.addPassthroughCopy('CNAME');
  eleventyConfig.addPassthroughCopy({ "assets/favicon.ico" : "/" } );

  return {
    dir: {
      output: 'site'
    }
  }
};