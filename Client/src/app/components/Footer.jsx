import React from 'react';

import './Footer.scss';

const year = (new Date()).getFullYear();

const Footer = () => (
  <footer className="footer">
    Copyright <sup>&copy;</sup> 2017-{year} DreamTeam
  </footer>
);

export default Footer;
