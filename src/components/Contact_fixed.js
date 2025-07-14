import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:ml-64">
      <div className="container mx-auto px-6 lg:px-12 animate-float-delay-4">
        <div className="glass p-8 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 heading-gradient">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-white-300 text-sm">Email</p>
                    <a 
                      href="mailto:mohammedabulhassan298@gmail.com"
                      className="text-white text-lg hover:text-white-400 transition-colors"
                    >
                      mohammedabulhassan298@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-white-300 text-sm">Phone</p>
                    <p className="text-white text-lg">+91 9342161322</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-white-300 text-sm">Address</p>
                    <p className="text-white text-lg">
                      63/108, Rowther North East Street, Melepalayam, Tirunelveli
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/mohammedabulhassan298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass w-12 h-12 border border-white-500/50 flex items-center justify-center rounded-full hover:bg-white-500/20 hover:text-white transition-colors duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/mohammedabulhassan298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass w-12 h-12 border border-white-500/50 flex items-center justify-center rounded-full hover:bg-white-500/20 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white-300 text-sm mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass border border-white-500/50 rounded-lg text-white focus:border-white-500 focus:outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white-300 text-sm mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass border border-white-500/50 rounded-lg text-white focus:border-white-500 focus:outline-none transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white-300 text-sm mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 glass border border-white-500/50 rounded-lg text-white focus:border-white-500 focus:outline-none transition-all duration-300 resize-vertical"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  className="button button-glow w-full flex items-center justify-center px-8 py-4 font-semibold transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
