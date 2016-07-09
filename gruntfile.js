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
                    cwd: "app",
                    dest: "../www",
                    src: "",
                    templates: {
                        "gpmApp.common": {
                            cwd: "app",
                            src: ["modules/common/directives/**/*.html"],
                            dest: "app/modules/common/templates.js"
                        }
                    }
                },
                copy: {
                    fonts: {
                        files: [
                            {
                                expand: true,
                                flatten: true,
                                src: ["app/bower_components/font-awesome/fonts/*.*"],
                                dest: "www/assets/fonts",
                                filter: "isFile"
                            },
                            {
                                expand: true,
                                flatten: true,
                                src: ["app/assets/styles/open-sans/*.woff2"],
                                dest: "www/assets/styles",
                                filter: "isFile"
                            }
                        ]
                    },
                    mobileImages: {
                        files: [
                            {
                                expand: true,
                                flatten: true,
                                src: ["app/assets/images/icon.png", "app/assets/images/splash.png"],
                                dest: "www",
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
