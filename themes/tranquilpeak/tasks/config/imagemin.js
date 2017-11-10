const mozjpeg = require('imagemin-mozjpeg');
module.exports = function(grunt) {
  grunt.config.set('imagemin', {
    imagemin: {
          options: {
              optimizationLevel: 3,
              svgoPlugins: [{removeViewBox: false}],
              use: [mozjpeg()] // Example plugin usage
          },
            files: [{
                expand: true,
                cwd: 'src',
                //src: ['**/*.{png,jpg,gif}'],
                src: ['images/*.jpg'],
                dest: 'dist/'
            }]
        }
  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
//  grunt.registerTask('default', ['imagemin']);

};
