import React from 'react';

const Register = () => {
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className='form register_form'>
          <p className="form_error-message">This is an error message.</p>
          <input type="text" />
        </form>
      </div>
    </section>
  );
}

export default Register;
