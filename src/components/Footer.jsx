import React from 'react';
import ghLogo from '../assets/images/logo-github.svg'
// import { GitHub} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <hr/>
      <h4>My Resume:</h4>
      <p className='text-body-secondary fst-italic fw-lighter'>It is still a work in progress, in the meanwhile feel free to check out my profiles on:</p><p> LinkedIn at:  <a href="https://www.linkedin.com/in/sam-azimi-p-eng">https://www.linkedin.com/in/sam-azimi-p-eng</a></p>
      <p>  GitHub at: <a href="https://github.com/dinozio-design">https://github.com/dinozio-design</a> </p>
      <p className='text-body-secondary fst-italic fw-lighter'>This web app is brought to you by:© Sam Azimi - 2023 CodeCamp Student. Confidential and Proprietary. All Rights Reserved.</p>
    </div>
  );
}