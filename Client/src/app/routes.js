import sidebarDisplay from './sidebarDisplay';

export default {
  Main : {
    text : 'Main',
    path : '/',
    display : sidebarDisplay.NOBODY,
  },

  About : {
    text : 'About company',
    path : '/about',
    display : sidebarDisplay.NOBODY,
  },

  AboutUs : {
    text : 'About us',
    path : '/about/about-us',
    display : sidebarDisplay.NOBODY,
  },

  Contacts : {
    text : 'Contacts',
    path : '/about/contacts',
    display : sidebarDisplay.NOBODY,
  },

  SignUp : {
    text : 'SignUp',
    path : '/signup',
    display : sidebarDisplay.NOBODY,
  },

  Login : {
    text : 'Login',
    path : '/login',
    display : sidebarDisplay.NOBODY,
  },

  ForgotPassword : {
    text : 'Forgot password?',
    path : '/forgot_password',
    display : sidebarDisplay.NOBODY,
  },

  ResetPassword : {
    text : 'Reset password',
    path : '/reset_password',
    params : '/:userId/:token+',
    display : sidebarDisplay.NOBODY,
  },

  Forbidden : {
    text : 'HTTP Forbidden (403)',
    path : '/forbidden',
    display : sidebarDisplay.NOBODY,
  },

  DB : {
    text : 'Tables from DB',
    path : '/db',
    display : sidebarDisplay.ANY,
  },
};
