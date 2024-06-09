import React, { useState } from 'react';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = () => {
    // Store user data in localStorage for demo purposes
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    setMessage('Sign up successful! You can now log in.');
  };

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid email or password.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  return (
    <div className='loginsignup w-full h-auto min-h-[80vh] pt-20 pb-16'>
      <div className="w-full h-auto max-w-md px-6 py-10 mx-auto rounded-lg shadow-md loginsignup-container lg:max-w-lg xl:max-w-xl bg-slate-300 lg:px-10 lg:py-12">
        <h1 className='mb-6 text-3xl font-bold text-center lg:text-4xl'>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form className="flex flex-col gap-6 mt-6 loginsignup-fields" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='p-2 border border-gray-300 rounded input-field'
            />
          )}
          <input
            type="email"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='p-2 border border-gray-300 rounded input-field'
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='p-2 border border-gray-300 rounded input-field'
          />
          <button
            type="submit"
            className='w-full mt-6 text-lg font-semibold text-white bg-red-600 border-none rounded-lg cursor-pointer h-14 lg:text-xl'
          >
            {isLogin ? 'Login' : 'Continue'}
          </button>
        </form>
        <p className='mt-4 text-base font-medium text-center text-gray-600 loginsignup-login lg:text-lg'>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            className='font-semibold text-red-600 cursor-pointer'
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign up here' : 'Login here'}
          </span>
        </p>
        <div className="flex items-center gap-4 mt-6 text-base font-medium text-gray-600 loginsignup-agree lg:text-lg">
          {!isLogin && (
            <>
              <input type="checkbox" id='agree' className='w-4 h-4 lg:w-5 lg:h-5' />
              <label htmlFor='agree'>
                By continuing, I agree to the <a href="/terms" className="text-red-600 underline">terms of use</a> & <a href="/privacy" className="text-red-600 underline">privacy policy</a>.
              </label>
            </>
          )}
        </div>
        {message && <p className='mt-4 text-lg text-center text-red-600'>{message}</p>}
      </div>
    </div>
  );
};

export default LoginSignup;
