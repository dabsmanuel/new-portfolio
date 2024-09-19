'use client'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Circles from '@/components/circles/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const Page = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formFields = form.current.elements;
    let newErrors = {};
    let isValid = true;

    for (let field of formFields) {
      if (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA') {
        if (!field.value.trim()) {
          newErrors[field.name] = `${field.placeholder} is required`;
          isValid = false;
        }
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current.reset(); // Clear the form fields
            setShowAlert(true); // Show the alert
            setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  const handleInputChange = (e) => {
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className="flex flex-col w-full max-w-[700px] ">
          <motion.h2
            className="h2 text-center mb-12"
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {showAlert && (
            <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-6" role="alert">
              <span className="block sm:inline">Message sent successfully!</span>
            </div>
          )}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col gap-6 w-full mx-auto'
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <div className="flex gap-x-6 w-full">
              <div className="w-full">
                <input 
                  type="text" 
                  placeholder='name' 
                  className={`input w-full ${errors.user_name ? 'border-accent' : ''}`} 
                  name="user_name" 
                  onChange={handleInputChange}
                />
                {errors.user_name && <p className="text-accent text-xs mt-1">{errors.user_name}</p>}
              </div>
              <div className="w-full">
                <input 
                  type="email" 
                  placeholder='email' 
                  className={`input w-full ${errors.user_email ? 'border-accent' : ''}`} 
                  name="user_email" 
                  onChange={handleInputChange}
                />
                {errors.user_email && <p className="text-accent text-xs mt-1">{errors.user_email}</p>}
              </div>
            </div>
            <div>
              <input 
                type="text" 
                placeholder='subject' 
                className={`input w-full ${errors.subject ? 'border-accent' : ''}`} 
                name="subject" 
                onChange={handleInputChange}
              />
              {errors.subject && <p className="text-accent text-xs mt-1">{errors.subject}</p>}
            </div>
            <div>
              <textarea 
                placeholder='message' 
                className={`textarea w-full ${errors.message ? 'border-accent' : ''}`} 
                name="message" 
                onChange={handleInputChange}
              ></textarea>
              {errors.message && <p className="text-accent text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 pr-1'>Let's talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Page