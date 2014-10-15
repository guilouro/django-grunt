"use strict";

module.exports = function(grunt) {

    // Module Requires
    // --------------------------
    require("load-grunt-tasks")(grunt);
    require("time-grunt")(grunt);


    var appConfig = {

    	// Compile Sass/Scss to CSS
        compass: {
            dist: {
                options: {
                    force: true,
                    config: "config.rb",
                }
            }
        }

    };

    grunt.initConfig(appConfig);
    grunt.registerTask("default", ["compass"]);

};