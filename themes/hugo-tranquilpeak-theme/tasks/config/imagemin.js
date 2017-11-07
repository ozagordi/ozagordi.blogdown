module.exports = function(grunt) {
  grunt.config.set('imagemin', {
    imagemin: {
        // static: {
        //     options: {
        //         optimizationLevel: 3,
        //         svgoPlugins: [{removeViewBox: false}],
        //         use: [mozjpeg()] // Example plugin usage
        //     },
        //     files: {
        //         'dist/img.png': 'src/img.png',
        //         'dist/img.jpg': 'src/img.jpg',
        //         'dist/img.gif': 'src/img.gif',
        //         'dist/img.jpg': 'src/images/alps.jpg'
        //     }
        // },
          options: {
              optimizationLevel: 3,
              svgoPlugins: [{removeViewBox: false}]
              // use: [mozjpeg()] // Example plugin usage
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
