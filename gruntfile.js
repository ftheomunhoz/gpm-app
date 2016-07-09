/**
 * @author ftheomunhoz
 * @description
 * Arquivo de script grunt para preparar o pacote de execução da aplicação.
 */

"use strict";

module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-sofea-build");

    var minify = grunt.option("minify") || false;

    grunt.initConfig({
        build: {
            main: {
                minify: minify,
                options: {
                    cwd: "www/app",
                    dest: "../deploy",
                    src: "",
                    templates: {
                        "gpmApp.common": {
                            cwd: "www/app",
                            src: ["modules/common/directives/**/*.html"],
                            dest: "www/app/modules/common/templates.js"
                        }
                    }
                },
                copy: {
                    fonts: {
                        files: [
                            {
                                expand: true,
                                flatten: true,
                                src: ["www/app/bower_components/font-awesome/fonts/*.*"],
                                dest: "www/deploy/assets/fonts",
                                filter: "isFile"
                            },
                            {
                                expand: true,
                                flatten: true,
                                src: ["www/app/assets/styles/open-sans/*.woff2"],
                                dest: "www/deploy/assets/styles",
                                filter: "isFile"
                            }
                        ]
                    },
                    mobileImages: {
                        files: [
                            {
                                expand: true,
                                flatten: true,
                                src: ["www/app/assets/images/icon.png", "www/app/assets/images/splash.png"],
                                dest: "www/deploy",
                                filter: "isFile"
                            }
                        ]
                    }
                }
            }
        }
    });

    grunt.registerTask("default", ["build"]);
};
