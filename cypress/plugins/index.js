const { GoogleSocialLogin } = require('cypress-social-logins').plugins;

module.exports = (on) => {
  on('task', {
    GoogleSocialLogin: GoogleSocialLogin,
  });
};
