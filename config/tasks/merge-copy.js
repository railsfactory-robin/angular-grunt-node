 module.exports = (config, WHITELABEL) => {
   "use strict";

   return {
     main: {
       options: {
           destination: '<%= config.dev %>/assets/',
           directories: [ 'whitelabel/edusynch/assets', 'whitelabel/' + WHITELABEL + '/assets' ]
       },
     },
     introjs: {
       options: {
           destination: '<%= config.dev %>/app/config/locales',
           directories: [ 'whitelabel/edusynch/config/locales', 'whitelabel/' + WHITELABEL + '/config/locales' ]
       }
     }
   };
 };
