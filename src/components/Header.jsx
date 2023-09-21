import React from 'react';
import myLogo from '../assets/images/myAvaLookRight.PNG'
export default function Header() {
  return (
    <div>
      <h1>My Portfolio 2.0 - React</h1>
      <img id="myAva" src={myLogo} alt="my logo avatar"></img>
    </div>
  );
}