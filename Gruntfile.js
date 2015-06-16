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
    csslint :{
      options:{
        formatters: [
          {id: 'junit-xml', dest: 'report/csslint_junit.xml'},
          {id: 'csslint-xml', dest: 'report/csslint.xml'}]
      },
      target: {
        files: {
          src: 'literallycss.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  
  // Default task(s).
  grunt.registerTask('default', ['cssmin','csslint']);

};