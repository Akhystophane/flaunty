import React, { useState } from 'react';
import axios from 'axios';

const Section2 = () => {
  const [email, setEmail] = useState('');
  
  // Définissez l'URL de l'API en utilisant une variable d'environnement
/*   const API_URL = process.env.REACT_APP_API_URL || 'https://flaunty-8b316118970b.herokuapp.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Submitting email to ${API_URL}/api/submit-email`);
    try {
      // Utilisez l'URL de l'API définie ci-dessus
      const response = await axios.post(`${API_URL}/api/submit-email`, { email });
      console.log('Response data:', response.data);
      alert('Email submitted successfully!');
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      if (error.response) {
        console.error('Server responded with:', error.response.data);
      }
      alert('Error submitting email. Please try again.');
    }
  }; */


  return (
    <div id='register' className='relative bg-[rgba(40,42,87,1)] overflow-hidden' style={{background:`linear-gradient(270deg, rgba(98,3,103,1) 0%, rgba(40,42,87,1) 100%)`}}>
      <h3 className='h3 text-center xs_max:text-[1.25rem] py-5 '>Enter your Email to start Now</h3>
      <form /* onSubmit={handleSubmit} */ className="max-w-sm mx-auto pt-5 pb-10 ">
        <div className="mb-5">
          <input 
            type="email" 
            id="email" 
            value={email}
/*             onChange={(e) => setEmail(e.target.value)} */
            className="bg-gray-50 border text-gray-800 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder="name@pineapple.com" 
            required 
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Section2;