import React from 'react';

export default function About() {
  return (
    <div className='mt-4'>
      <h2 >About Page</h2>
      <div class="m-3 px-2">
        <article className='text-start text-wrap mb-4 '>
          This is where you can know a little more about me.
          <p className='mt-3'>I am an inquisitive Engineer with a passion for AI solutions. I am redirecting my focus to Backend programming, DB architecture (SQL/NoSQL), and Computer Vision. Feel free to look me up on <a href="https://www.linkedin.com/in/sam-azimi-p-eng">LinkeIn</a>. I am open to connect, and I am always happy to help.</p>
          <p>I just want to code, and create bespoke solutions to help businesses take advantage of AI, and become better, faster, and more cost effective 🙂</p>
          <p className='mb-0 mt-1'>Name: Sam Azimi</p>
          <p className='mb-0'>Title: Professional Engineer</p>
          <p className='mb-0'>Occupation: Full Stack Developer</p>
          <p className='mb-0'>Phone: +1-647-678-****</p>
          <p className='mb-0'>email: sam@dinozio.design</p>
        </article>
      </div>
    </div>
  );
}
