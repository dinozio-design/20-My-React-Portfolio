import React from 'react';
import Form from "./Forms/Form";

export default function Contact() {
  return (
    <div className='mt-4'>
      <h2>Contact Page</h2>
      <p className='mb-0'>
        If you need to reach us, share your opinion, ask a question, or just simply say Hi, feel free to use the fields below. Be sure to type in your name and valid email address.
      </p>
      <div className='m-3 border border pt-3'>
        <Form />
      </div>
    </div>
  );
}
