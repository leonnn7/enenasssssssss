import React from 'react';

const Privacy = () => {
  return (
    <div id="privacy" className="pt-20 bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-extrabold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Data Collection</h2>
            <p className="text-gray-300">
              We collect only the necessary information required to provide our services. This may include:
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>Contact information (name, email)</li>
                <li>Technical information related to your IT systems</li>
                <li>Service history and support requests</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Use of Information</h2>
            <p className="text-gray-300">
              We use your information solely for:
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>Providing requested IT services</li>
                <li>Communication regarding your service requests</li>
                <li>Improving our services</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Protection</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, modification, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Your Rights</h2>
            <p className="text-gray-300">
              You have the right to:
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>Access your personal data</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact</h2>
            <p className="text-gray-300">
              For privacy-related inquiries, please contact us at huslert292@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;