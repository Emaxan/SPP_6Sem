import React from 'react';

import {userIsNotAuthenticated} from '../auth/authWrappers';
import {SignUpLink} from './SignUpLink';
import Image from './images/main.jpg';

import './Home.scss';

const SignUp = userIsNotAuthenticated(SignUpLink);

export const Home = () => (
  <div className="home-wrapper">
    <div className="home-content">
      <h1 className="home-content__title">Welcome to VacationSpotsBooking.by!</h1>
      <p className="image-wrapper">
        <img className="image-wrapper__image" src={Image} alt="Main image" />
      </p>
      <p className="home-content__paragraph">
          This is our web-site. Here you can find different information about many different places of Minsk city.
      </p>
      <p className="home-content__paragraph">
          After signin up as owner, you can add your estabiishment to our database. Then you can assign administrator of your estabilishment.
      </p>
      <p className="home-content__paragraph">
          If you are common user, you can search estabilishment by many filters and book place at a convenient time for you.
      </p>
      <SignUp/>
    </div>
  </div>
);
