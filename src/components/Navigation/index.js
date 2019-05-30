import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../Constants/routes';
// import Homepage from '../components/pages/homePage';

const Navigation = () => (
  <div>
    <ul>
      <li>
        {/* <Link to={ROUTES.SIGN_IN}>Sign In</Link> */}
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Home</Link>
        
      </li>
      <li>
        <Link to={ROUTES.ptf}>Program template form</Link>
      </li>

      <li>
        <Link to={ROUTES.ttf}>Teacher template form</Link>
      </li>

      <li>
        <Link to={ROUTES.ctf}>Class template form</Link>
      </li>
      
    </ul>
   
  </div>

    
 
);

export default Navigation;