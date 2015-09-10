module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('aws-auth.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.key %>', // Use the variables
        secretAccessKey: '<%= aws.secret %>', // You can also use env variables
        region: '<%= aws.region %>',
        access: 'public-read',
        debug: false,
        uploadConcurrency: 5, // 5 simultaneous uploads
        downloadConcurrency: 5 // 5 simultaneous downloads
      },
      production: {
        options: {
          bucket: '<%= aws.bucket %>',
          differential: true // Only uploads the files that have changed
        },
        files: [
          {
            expand: true,
            cwd: 'published',
            src: ['**'],
            dest: 'captures'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-aws-s3');
};
