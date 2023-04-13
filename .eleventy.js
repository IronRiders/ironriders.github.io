const eleventySass = require('eleventy-sass');

const Image = require('@11ty/eleventy-img');

(async () => {
	let url = './assets/logo.png';
	let stats = await Image(url, {
    filenameFormat: function (id, src, width, format, options) { 
      return `logo-${width}.${format}`;
    },
    outputDir: './docs/img/',
    formats:['png'],
		widths: [100, 300]
	});
})();

(async () => {
	let url = './assets/teampic_2019.webp';
	let stats = await Image(url, {
    filenameFormat: function (id, src, width, format, options) { 
      return `teampic_2019-${width}.${format}`;
    },
    outputDir: './docs/img/',
    formats:['jpg']
	});
})();

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.setPugOptions({ doctype: 'html' });

  return {
    dir: {
      output: 'docs'
    }
  }
};