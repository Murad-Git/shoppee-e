import { defineConfig } from 'cypress';
require(`dotenv`).config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // on(`task`, {
      //   GoogleSocialLogin: GoogleSocialLogin,
      // });
    },
  },
  env: {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    googleUser: process.env.GOOGLE_USER,
    googlePassword: process.env.GOOGLE_PW,
    siteName: process.env.HOST,
  },
  component: {
    devServer: {
      framework: `next`,
      bundler: `webpack`,
    },
  },
});
