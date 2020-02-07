module.exports = function(grunt) {
         grunt.initConfig({

             less: {
                 development: {
                     options: {
                         paths: ["css/css"]
                     },
                     files: {"css/master.css": "less/master.less"}
                 },
                 production: {
                     options: {
                         paths: ["css/css"],
                         cleancss: true
                     },
                     files: {"css/master.css": "less/master.less"}
                 }
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.registerTask('default', ['less']);
     };
