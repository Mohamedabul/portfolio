import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });
    
    try {
      // EmailJS configuration
      const serviceId = 'service_ok7y2iq';
      const templateId = 'template_godrffj';
      const publicKey = 'KrlC_z3pYxJpU09Sj';
      
      // Template parameters that match your EmailJS template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Mohammed Abul Hassan', // Your name
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white-text">
          Get In Touch
        </h2>
        
        <div className="bg-black-primary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden">
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-white-text mb-8">Contact Information</h3>
              
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-accent rounded-full flex items-center justify-center">
                      <FaEnvelope className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-text text-sm">Email</p>
                      <a 
                        href="mailto:mohammedabulhassan298@gmail.com"
                        className="text-white-text text-lg hover:text-white transition-colors"
                      >
                        mohammedabulhassan298@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-accent rounded-full flex items-center justify-center">
                      <FaPhone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-text text-sm">Phone</p>
                      <p className="text-white-text text-lg">+91 9342161322</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-accent rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-text text-sm">Address</p>
                      <p className="text-white-text text-lg">
                        63/108, Rowther North East Street, Melepalayam, Tirunelveli
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-white-text mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/in/mohammedabulhassan298"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                    >
                      <FaLinkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/mohammedabulhassan298"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white text-white flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-white-text mb-8">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Status Message */}
                  {status.message && (
                    <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                      {status.message}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-gray-text text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-gray-accent border border-gray-accent rounded-lg text-white focus:border-white focus:outline-none transition-all duration-300 disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-text text-sm mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-gray-accent border border-gray-accent rounded-lg text-white focus:border-white focus:outline-none transition-all duration-300 disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-text text-sm mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-gray-accent border border-gray-accent rounded-lg text-white focus:border-white focus:outline-none transition-all duration-300 resize-vertical disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                      isLoading 
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                        : 'bg-white text-black hover:bg-gray-200 transform hover:scale-105'
                    }`}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
