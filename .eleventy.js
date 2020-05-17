var moment = require('moment-timezone');

module.exports = function(eleventyConfig) {
    // Output directory: _site
    eleventyConfig.addPassthroughCopy("public");
    
    eleventyConfig.addFilter("dateformat", function(dateIn) {
        return moment(dateIn).tz('GMT').format('DD MMMM YYYY');
    });
  };