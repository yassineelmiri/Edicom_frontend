import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans text-white">
      {/* Section About */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-6 animate-fade-in">
            Test Technique
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
            Edicom Maroc is a leading digital agency providing innovative solutions to enhance your online presence.
          </p>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-12 animate-fade-in">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Design Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 animate-fade-in-up">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Web Design</h3>
              <p className="text-gray-300">We create stunning and user-friendly websites.</p>
            </div>

            {/* Development Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 animate-fade-in-up delay-100">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Development</h3>
              <p className="text-gray-300">We build robust and scalable web applications.</p>
            </div>

            {/* SEO Optimization Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 animate-fade-in-up delay-200">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">SEO Optimization</h3>
              <p className="text-gray-300">We optimize your site to rank higher on search engines.</p>
            </div>

            {/* Digital Marketing Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 animate-fade-in-up delay-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Digital Marketing</h3>
              <p className="text-gray-300">We help you reach your audience effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-6 animate-fade-in">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-8 animate-fade-in-up">
            Get in touch with us to start your next project!
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-transform transform hover:scale-105 animate-pulse">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;