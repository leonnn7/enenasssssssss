import React from 'react';
import { Code2, Rocket, Shield } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="bg-navy-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            About BCX
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Your partner for professional web development
          </p>
        </div>

        <div className="mt-20">
          <div className="prose prose-lg text-gray-300 max-w-none">
            <p className="mb-4">
              BCX specializes in creating beautiful, functional websites for small businesses and entrepreneurs. We understand that having a strong online presence is crucial in today's digital world, which is why we offer affordable web development solutions.
            </p>
            <p className="mb-4">
              Our team of experienced developers is committed to delivering high-quality websites that not only look great but also perform exceptionally. We handle everything from initial design to ongoing maintenance, ensuring your website stays up-to-date and secure.
            </p>
            <p>
              What sets us apart is our commitment to providing ongoing support and website management. We don't just build your website and leave - we're here to help you maintain and grow your online presence long-term.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">Modern Development</h3>
              <p className="mt-2 text-gray-300">Using the latest technologies to build fast, responsive websites</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">Fast Delivery</h3>
              <p className="mt-2 text-gray-300">Quick turnaround times without compromising quality</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">Ongoing Support</h3>
              <p className="mt-2 text-gray-300">Continuous maintenance and support for your website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;