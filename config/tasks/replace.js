 module.exports = (grunt, whitelabel) => {
   "use strict";

   var config_whitelabel = grunt.file.readJSON('whitelabel/' + whitelabel + '/config.json');
   var footer_whitelabel = grunt.file.read('whitelabel/'+ whitelabel +'/partials/footer.html');
   var logo_whitelabel = grunt.file.read('whitelabel/'+ whitelabel +'/partials/logo.html');

   return {
     main: {
       options: {
         patterns: [
           {
             json: config_whitelabel
           },
           {
             match: 'footer',
             replacement: footer_whitelabel
           },
           {
             match: 'logo-main',
             replacement: logo_whitelabel
           }
         ]
       },
       files: [
         {  expand: true, flatten: true, src: ['whitelabel/edusynch/index.html'], dest: 'src' },
         {  expand: true, flatten: true, src: ['whitelabel/edusynch/views/auth.html'], dest: 'src/app/components/auth' },
         {  expand: true, flatten: true, src: ['whitelabel/edusynch/views/check-device.html'], dest: 'src/app/components/auth/check-device' },
         {  expand: true, flatten: true, src: ['whitelabel/edusynch/views/footer.html'], dest: 'src/app/static/footer' },
         {  expand: true, flatten: true, src: ['whitelabel/edusynch/views/header.html'], dest: 'src/app/common/header' },
         {  expand: true, flatten: true, src: ['whitelabel/edusynch/env.js'], dest: 'src/app' },
         {  expand: true, flatten: true, src: ['whitelabel/edusynch/colors.config.js'], dest: 'src/app/config/colors' },
         {  expand: true, flatten: true, src: ['whitelabel/edusynch/config/deploy/development.rb'], dest: 'config/deploy' },
         {  expand: true, flatten: true, src: ['whitelabel/edusynch/config/deploy/staging.rb'], dest: 'config/deploy' },
         {  expand: true, flatten: true, src: ['whitelabel/edusynch/config/deploy/production.rb'], dest: 'config/deploy' }
       ]
     }
   };

 };
