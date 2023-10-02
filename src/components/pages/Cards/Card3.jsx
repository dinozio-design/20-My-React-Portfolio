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
    textShadow: 'black 0px 1px -1px',
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
  title: 'ClotheStation - eCommerce',
  description: 'This is a group project. We built a comprehensive eComerce platform using MERN stack. It has not yet been deployed, we will be deploying it to Heroku soon. Stay tuned!',
  deployLink: 'https://urban-sk8-ef054e6c42c1.herokuapp.com/',
  gitHubLink: 'https://github.com/cdelacruzzin/ClotheStation',
}

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card3() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>{project.title}</div>
      <div style={styles.content}>
        <div className="card" id="card-1">
          <figure className="card-cont">
            <img style={styles.imgPlace} className="imgPlace" src={IMAGES.image3} alt="placeholder image" />
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

export default Card3;
