import React from 'react';
// import Image from '../../../assets/images/img_01.jpg'
import IMAGES from './Images';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 25,
  },
  imgPlace: {
    maxWidth: '100%',
  },
  icon: {
    scale: '20%',
  },
};

const project = {
  title: 'My Best Work Yet',
  description: 'This app is all about React!',
  deployLink: '',
  gitHubLink: '',
}

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card1() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>{project.title}</div>
      <div style={styles.content}>
        <div className="card" id="card-1">
          <figure className="card-cont">
            <img style={styles.imgPlace} className="imgPlace" src={IMAGES.image1} alt="placeholder image" />
            <hr/>
            <p>{project.description}</p>
             <a href='https://github.com/dinozio-design/20-My-React-Portfolio'>
             <img style={styles.icon} src={IMAGES.githubmark} alt="GitHub Logo"/>
             </a>

          </figure>
        </div>
      </div>
    </div>
  );
}

export default Card1;
