import React from 'react';

import IMAGES from './Images';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: 'rgb(240, 156, 0)',
    color: '#e8eaf6',
    textShadow: 'black -1px 1px 1px',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '0 20px',
  },
  content: {
    padding: 25,
  },
  imgPlace: {
    maxWidth: '80%',
  },
  icon: {
    width: 30,
    height: 30,
  },
};

// since I am short in time I will just hard code it here, a better approach will be to iterate through an array of objects and only call the Card comnponent once... will do it in the next edit after submission
const project = {
  title: 'My First Portfolio',
  description: 'This app is all about CSS. This was my very first portfolio, written in HTML and hardcoded with CSS styles',
  deployLink: 'https://dinozio-design.github.io/02-My-Portfolio-Advanced-CSS',
  gitHubLink: 'https://github.com/dinozio-design/02-My-Portfolio-Advanced-CSS',
}

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card6() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>{project.title}</div>
      <div style={styles.content}>
        <div className="card" id="card-1">
          <figure className="card-cont">
            <img style={styles.imgPlace} className="imgPlace" src={IMAGES.image6} alt="placeholder image" />
          </figure>
          <hr />
          <p>{project.description}</p>
          <div className="d-flex p-2 flex-row">
            <a className="p-2" href={project.gitHubLink}>
              <img  style={styles.icon} src={IMAGES.githubmark} alt="GitHub Logo" />
            </a>
            <a className="p-2" href={project.deployLink}>
              <img style={styles.icon} src={IMAGES.deploymark} alt="Deployed Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card6;

