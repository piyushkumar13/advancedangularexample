module.exports = function(grunt){

    grunt.initConfig({

        web_server:{
            options: {
                cors: true,
                port: 8000,
                nevercache: true,
                logRequests: true
            },
            foo: 'bar'
        }

    });

    grunt.loadNpmTasks('grunt-web-server');
    grunt.registerTask('run',['web_server']);

}