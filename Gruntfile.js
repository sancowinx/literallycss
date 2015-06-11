module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: [{
          expand: true,
          src: 'literallycss.css',
          dest: 'release/css',
          ext: '.min.css'
        }]
      }
    },
    cssdocs:{
      options:{ },
      files:{ 
        src: 'literallycss.css',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-css-docs');
  
  // Default task(s).
  grunt.registerTask('default', ['cssmin','cssdocs']);

};