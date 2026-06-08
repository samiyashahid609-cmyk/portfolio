import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Get In Touch</h2>
      <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">
        I am currently looking for new opportunities as a Full-Stack Developer. If you have any questions or want to discuss a project, drop a message!
      </p>
      
      <form action="https://formspree.io/f/mjgdwene" method="POST" className="space-y-4 text-left">
        <div>
          <input type="text" name="name" required placeholder="Your Name" className="w-full bg-[#121212] border border-white/5 rounded p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00f2fe] transition-colors" />
        </div>
        <div>
          <input type="email" name="email" required placeholder="Your Email" className="w-full bg-[#121212] border border-white/5 rounded p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00f2fe] transition-colors" />
        </div>
        <div>
          <textarea name="message" rows="5" required placeholder="Your Message" className="w-full bg-[#121212] border border-white/5 rounded p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00f2fe] transition-colors"></textarea>
        </div>
        <button type="submit" className="w-full py-3 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-semibold rounded hover:opacity-90 transition-opacity">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;