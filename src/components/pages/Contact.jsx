import React from 'react';
import Form from "./Forms/Form";

export default function Contact() {
  return (
    <div className='mt-4'>
      <h2>Contact Page</h2>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices.
      </p>
      <div className='m-3 border border pt-3'>
        <Form />
      </div>
    </div>
  );
}
